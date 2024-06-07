import React from 'react';
import { useAtom } from 'jotai';
import { contactInfoAtom } from 'src/store/checkoutAtom';

const ContactInformation: React.FC<{}> = () => {
  const [contactInfo, setContactInfo] = useAtom(contactInfoAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mb-4 p-4 border border-gray-200 rounded">
      <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
      <input
        type="email"
        name="email"
        value={contactInfo.email}
        onChange={handleChange}
        placeholder="Email address (for order notification)"
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />

      <div className="grid grid-cols-2 gap-2 mb-2">
        <div>
          <label className="block mb-1 text-primary">First name</label>
          <input
            type="text"
            name="firstName"
            value={contactInfo.firstName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-1 text-primary">Last name</label>
          <input
            type="text"
            name="lastName"
            value={contactInfo.lastName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <div className="mb-2">
        <label className="block mb-1 text-primary">Phone number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={contactInfo.phoneNumber}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default ContactInformation;
