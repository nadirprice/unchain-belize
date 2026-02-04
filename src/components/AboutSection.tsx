// src/components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We are driven by the vision of a decentralized future, championing financial freedom and building empowered communities through open collaboration and volunteerism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1: Crypto & DeFi */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Decentralization & DeFi</h3>
            <p className="text-gray-700 leading-relaxed">
              We are passionate about the transformative power of cryptocurrencies and Decentralized Finance (DeFi). Our mission is to champion financial sovereignty, transparency, and innovation, empowering individuals to take control of their assets and future.
            </p>
          </div>

          {/* Card 2: Freedom */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Embracing Freedom</h3>
            <p className="text-gray-700 leading-relaxed">
              We see technology as a tool for liberation. By supporting open protocols and permissionless systems, we advocate for greater personal and economic freedom, unshackled from traditional gatekeepers and centralized control.
            </p>
          </div>

          {/* Card 3: Community & Volunteerism */}
          <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Community & Volunteerism</h3>
            <p className="text-gray-700 leading-relaxed">
              Our project thrives on the spirit of community and volunteerism. We believe in open-source contributions, mutual aid, and collective action to build a more equitable and robust ecosystem for everyone involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
