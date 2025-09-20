'use client';

import Link from 'next/link';
import { Check, Star } from 'lucide-react';
import { useState } from 'react';

const allPlanBenefits = [
  'One Reserved Desk',
  'One Office Chair',
  'One Locker',
  'Backup Power Supply',
  'High Speed Internet (WiFi and Cable)',
  'RO Water (Hot & Cold)',
  'Meeting Rooms',
  'BrainStorming Space',
  'MicroWave Oven',
  'Refrigerator',
  'Parking',
  'Washroom',
  'Library',
  'Tea & Coffee',
  'Monitor',
  'Keyboard+Mouse',
  'Printer',
  'Stationary Item'
];

const pricingOptions = {
  daily: { price: '₹300', period: 'per day', description: 'Perfect for occasional use' },
  weekly: { price: '₹1,200', period: 'per week', description: 'Great for short-term projects' },
  monthly: { price: '₹3,000', period: 'per month', description: 'Best value for regular users' }
};

export default function PricingCard() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <div className="inline-block bg-cyan-50 rounded-full px-4 py-2 mb-4">
          <span className="text-sm font-medium text-cyan-600">Available Seats: 19/32</span>
        </div>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-100 rounded-lg p-1 inline-flex">
          {Object.entries(pricingOptions).map(([key, option]) => (
            <button
              key={key}
              onClick={() => setSelectedPlan(key)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedPlan === key
                  ? 'bg-cyan-500 text-white shadow-sm'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Single Pricing Card */}
      <div className="relative bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto">
        {selectedPlan === 'monthly' && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
              <Star className="h-4 w-4 mr-1" />
              Most Popular
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-0">
          {/* Pricing Section */}
          <div className={`text-center py-12 md:py-16 ${selectedPlan === 'monthly' ? 'bg-cyan-500 text-white' : 'bg-gray-50'}`}>
            <h3 className={`text-3xl font-bold mb-3 ${selectedPlan === 'monthly' ? 'text-white' : 'text-gray-900'}`}>
              {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Pass
            </h3>
            <div className={`text-5xl font-bold mb-3 ${selectedPlan === 'monthly' ? 'text-white' : 'text-gray-900'}`}>
              {pricingOptions[selectedPlan].price}
            </div>
            <p className={`text-lg ${selectedPlan === 'monthly' ? 'text-cyan-100' : 'text-gray-600'}`}>
              {pricingOptions[selectedPlan].period}
            </p>
            <p className={`text-sm mt-3 ${selectedPlan === 'monthly' ? 'text-cyan-100' : 'text-gray-500'}`}>
              {pricingOptions[selectedPlan].description}
            </p>

            <div className="mt-8">
              <Link
                href="/visit"
                className={`inline-block font-medium py-3 px-8 rounded-md transition-colors ${
                  selectedPlan === 'monthly'
                    ? 'bg-white text-cyan-500 hover:bg-gray-100'
                    : 'bg-cyan-500 text-white hover:bg-cyan-600'
                }`}
              >
                Schedule Your Visit
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="md:col-span-2 p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-6">What's Included</h4>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {allPlanBenefits.map((benefit, benefitIndex) => (
                <div key={benefitIndex} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}