import Link from 'next/link';
import { Check } from 'lucide-react';

const reservedBenefits = [
  'One Reserved Desk',
  'One Office Chair',
  'One Locker',
  'Backup Power Supply'
];

const sharedBenefits = [
  'High Speed Internet (WiFi and Cable)',
  'RO Water (Hot & Cold)',
  'Meeting Rooms',
  'BrainStorming Space',
  'MicroWave Oven',
  'Refrigerator',
  'Parking',
  'Washroom',
  'Library'
];

const valueAddedBenefits = [
  'Tea',
  'Coffee',
  'Monitor',
  'Keyboard+Mouse',
  'Printer',
  'Stationary Item'
];

export default function PricingCard() {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-cyan-500 text-white text-center py-8">
        <h2 className="text-3xl font-bold mb-2">Monthly Pricing</h2>
        <div className="text-5xl font-bold mb-2">₹3,000</div>
        <p className="text-cyan-100">per month</p>
        <div className="mt-4 inline-block bg-white bg-opacity-20 rounded-full px-4 py-2">
          <span className="text-sm font-medium">Available Seats: 19/32</span>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Reserved Benefits */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Reserved</h3>
            <ul className="space-y-3">
              {reservedBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Shared Benefits */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Shared</h3>
            <ul className="space-y-3">
              {sharedBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Value Added Benefits */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Value Added</h3>
            <ul className="space-y-3">
              {valueAddedBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/visit"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Schedule Your Visit
          </Link>
        </div>
      </div>
    </div>
  );
}