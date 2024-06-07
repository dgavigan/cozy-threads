import React from 'react';
import ContactInformation from 'src/components/components/ContactInfo';
import ShippingAddress from 'src/components/components/ShippingAddress';
import OrderSummary from 'src/components/components/OrderSummary';
import PaymentForm from 'src/components/components/PaymentForm';

const Checkout: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <ContactInformation />
          <ShippingAddress />
          <PaymentForm />
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};

export default Checkout;
