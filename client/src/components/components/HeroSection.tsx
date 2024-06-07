import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Cozy Threads</span>{' '}
              <span className="block text-primary xl:inline">
                Stylish & Sustainable
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Discover our range of high-quality, ethically-sourced apparel and
              accessories.
            </p>
            <Link
              to="/shop"
              className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-neutral inline-block"
            >
              Shop All
            </Link>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="/cozy-threads-hero.JPEG"
        alt="Cozy Threads"
      />
    </div>
  </div>
);
