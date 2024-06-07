import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { cartAtom } from 'src/store/cartAtom';
import { contactInfoAtom, shippingAddressAtom } from 'src/store/checkoutAtom';
import { useCreatePaymentIntent } from 'src/queries/payments';

const PaymentForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cart] = useAtom(cartAtom);
  const [contactInfo] = useAtom(contactInfoAtom);
  const [shippingAddress] = useAtom(shippingAddressAtom);
  const createPaymentIntent = useCreatePaymentIntent();
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>('card');
  const navigate = useNavigate();

  const isContactInfoValid = (): boolean => {
    return Boolean(
      contactInfo.firstName &&
        contactInfo.lastName &&
        contactInfo.email &&
        contactInfo.phoneNumber
    );
  };

  const isShippingAddressValid = (): boolean => {
    return Boolean(
      shippingAddress.address &&
        shippingAddress.city &&
        shippingAddress.state &&
        shippingAddress.zipcode
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(`isShippingAddressValid: ${isShippingAddressValid()}`);
    console.log(`isContactInfoValid: ${isContactInfoValid()}`);

    if (!isContactInfoValid() || !isShippingAddressValid()) {
      setMessage(
        'Please fill out all required fields in contact and shipping information.'
      );
      return;
    }

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      setLoading(true);

      const { clientSecret } = await createPaymentIntent.mutateAsync({
        cartItems: cart,
        shippingAddress,
        contactInfo,
      });

      let error, paymentIntent;

      if (paymentMethod === 'card') {
        ({ error, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: cardElement!,
              billing_details: {
                name: `${contactInfo.firstName} ${contactInfo.lastName}`,
                email: contactInfo.email,
              },
            },
          }
        ));
      } else if (paymentMethod === 'affirm') {
        ({ error, paymentIntent } = await stripe.confirmAffirmPayment(
          clientSecret,
          {
            payment_method: {
              affirm: {},
              billing_details: {
                name: `${contactInfo.firstName} ${contactInfo.lastName}`,
                email: contactInfo.email,
              },
            },
            return_url: `${window.location.origin}/confirmation`,
          }
        ));
      }

      if (error) {
        setMessage(`Payment failed: ${error.message}`);
        setLoading(false);
      } else if (paymentIntent?.status === 'requires_action') {
        const { error: actionError, paymentIntent: actionPaymentIntent } =
          await stripe.confirmCardPayment(clientSecret);
        if (actionError) {
          setMessage(`Payment failed: ${actionError.message}`);
          setLoading(false);
        } else if (actionPaymentIntent?.status === 'succeeded') {
          setMessage('Payment succeeded!');
          navigate('/confirmation');
        }
      } else if (paymentIntent?.status === 'succeeded') {
        setMessage('Payment succeeded!');
        navigate('/confirmation');
      }
    } catch (error: any) {
      setMessage(`Error: ${error?.message}`);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-4 border border-gray-200 rounded"
    >
      <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
      <div className="mb-4">
        <label className="block mb-2 text-primary">Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        >
          <option value="card">Debit Card</option>
          <option value="affirm">Affirm (Pay Later)</option>
        </select>
      </div>
      {paymentMethod === 'card' && (
        <div className="mb-4">
          <CardElement className="p-2 border border-gray-300 rounded" />
        </div>
      )}
      <button
        type="submit"
        className={`bg-primary text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Pay'}
      </button>
      {message && <div className="mt-4 text-red-600">{message}</div>}
    </form>
  );
};

export default PaymentForm;
