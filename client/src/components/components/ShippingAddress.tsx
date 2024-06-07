import React from 'react';
import { useAtom } from 'jotai';
import { shippingAddressAtom } from 'src/store/checkoutAtom';

const ShippingAddress: React.FC<{}> = () => {
  const [shippingAddress, setShippingAddress] = useAtom(shippingAddressAtom);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setShippingAddress((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mb-4 p-4 border border-gray-200 rounde">
      <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <label className="block mb-1 text-primary">Address</label>
          <input
            type="text"
            name="address"
            value={shippingAddress.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 text-primary">State</label>
          <input
            type="text"
            name="state"
            value={shippingAddress.state}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <div className="mb-2">
          <label className="block mb-1 text-primary">City</label>
          <input
            type="text"
            name="city"
            value={shippingAddress.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1 text-primary">Zip Code</label>
          <input
            type="text"
            name="zipcode"
            value={shippingAddress.zipcode}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
