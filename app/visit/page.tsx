import VisitForm from '@/components/VisitForm';
import { MapPin, Phone, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule a Visit | CoWorking Bhilwara',
  description: 'Schedule a visit to our coworking space in Bhilwara. See our facilities and meet our community before joining.',
};

export default function VisitPage() {
  return (
    <main className="min-h-screen bg-gray-50">
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 heading-font">
                Schedule Your Visit
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Come and see our facilities in person. We'll show you around and answer any questions you have.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Visit Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Information</h2>

                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What to Expect</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tour of all facilities and amenities</li>
                    <li>• Meet our community and staff</li>
                    <li>• See available desks and meeting rooms</li>
                    <li>• Get answers to all your questions</li>
                    <li>• Learn about our pricing and membership options</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Visit Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Duration</p>
                        <p className="text-gray-600">30-45 minutes</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">
                          67, EAST EXTENSION,<br />
                          SUBHASH NAGAR, BHILWARA,<br />
                          RAJASTHAN, INDIA PIN - 311001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Contact</p>
                        <a
                          href="tel:+919782049418"
                          className="text-gray-600 hover:text-cyan-500 transition-colors"
                        >
                          +91 9782049418
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visit Form */}
              <div>
                <VisitForm />
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-12 bg-cyan-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Important Note
              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto">
                Our coworking space is exclusively for computer professionals. Please ensure you meet this criteria
                before scheduling your visit. We look forward to welcoming you to our community!
              </p>
            </div>
          </div>
        </div>
      </main>
  );
}