import React from 'react';
import { HeroSection } from 'src/components/components/HeroSection';
import { NewArrivals } from 'src/components/components/NewArrivals';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <NewArrivals />

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              About Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Who We Are
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Cozy Threads is committed to providing high-quality, stylish
              apparel that is sustainably and ethically sourced. Our mission is
              to make fashion accessible without compromising on our values of
              environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
