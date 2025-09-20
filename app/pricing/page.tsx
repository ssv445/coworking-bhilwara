import PricingCard from '@/components/PricingCard';
import FAQ from '@/components/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Ready Coworking',
  description: 'Simplified Price get you these benefits at ₹3,000/month in Bhilwara. Computer professionals only workspace with comprehensive facilities.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 heading-font">
                Pricing
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Simplified Price get you these benefits.
                Available to computer professionals only.
              </p>
            </div>

            <PricingCard />
          </div>
        </div>

        <FAQ />
      </main>
  );
}