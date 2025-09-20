import Link from 'next/link';
import { MapPin, Phone, Mail, Users, Target, Coffee } from 'lucide-react';
import FacilitiesGrid from '@/components/FacilitiesGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | CoWorking Bhilwara',
  description: 'Premium coworking space for computer professionals in Bhilwara, Rajasthan. Modern facilities, high-speed internet, and productive environment.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <img
                  src="/images/homepage/logo-hero.png"
                  alt="Ready CoWorking Space Bhilwara Logo"
                  className="h-24 w-auto"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 heading-font">
                The Best Office Space in Bhilwara to co-work with great peers.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Get a Professional Space for CoWorking In Bhilwara. Peaceful, Clean, Comfortable and Vetted Colleagues. It&apos;s time to dive deep into the work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/visit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
                >
                  Schedule Visit
                </Link>
                <Link
                  href="/pricing"
                  className="border border-cyan-500 text-cyan-500 hover:bg-cyan-50 font-medium py-3 px-8 rounded-md transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <FacilitiesGrid />

        {/* Culture Section */}
        <section id="culture" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 heading-font">
                Culture
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Being a bunch of true techies we believe in setting up a healthy environment where everyone feels no distractions and no stress, making their day more productive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  Connect with like-minded professionals and build meaningful relationships in a supportive environment.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Productivity First</h3>
                <p className="text-gray-600">
                  Our space is designed to minimize distractions and maximize your focus and productivity.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Work-Life Balance</h3>
                <p className="text-gray-600">
                  Enjoy a comfortable workspace with amenities that help you maintain a healthy work-life balance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 heading-font">
                CONTACT US
              </h2>
              <p className="text-lg text-gray-600">
                Come and see our facilities in person. We&apos;re located in the heart of Bhilwara.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-cyan-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        67, EAST EXTENSION,<br />
                        SUBHASH NAGAR, BHILWARA,<br />
                        RAJASTHAN, INDIA PIN - 311001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a
                        href="tel:+919782049418"
                        className="text-gray-600 hover:text-cyan-500 transition-colors"
                      >
                        +91 9782049418
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-cyan-500 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a
                        href="mailto:shyam+coworking@readybytes.in"
                        className="text-gray-600 hover:text-cyan-500 transition-colors"
                      >
                        shyam+coworking@readybytes.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="https://maps.google.com/?q=67+EAST+EXTENSION+SUBHASH+NAGAR+BHILWARA+RAJASTHAN+311001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    View on Google Maps
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src="/images/homepage/contact-image.jpeg"
                    alt="Ready CoWorking Space"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Join?</h3>
                  <p className="text-gray-600 mb-6">
                    Schedule a visit to see our facilities and meet our community. We&apos;re excited to welcome you!
                  </p>
                  <Link
                    href="/visit"
                    className="block w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
                  >
                    Schedule Your Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
