import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hey, I am interested to know more about the CoWorking place, 🤔 may I visit the place tomorrow around 4-5 PM ?"
  );
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="/images/homepage/logo-header.png"
                alt="Ready CoWorking Space Bhilwara Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Premium coworking space for computer professionals in Bhilwara, Rajasthan.
            </p>
            <div className="flex space-x-4">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  67, EAST EXTENSION,<br />
                  SUBHASH NAGAR, BHILWARA,<br />
                  RAJASTHAN, INDIA PIN - 311001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a
                  href="tel:+919782049418"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +91 9782049418
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a
                  href="mailto:shyam+coworking@readybytes.in"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  shyam+coworking@readybytes.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/#facilities" className="block text-gray-300 hover:text-white transition-colors">
                Facilities
              </Link>
              <Link href="/#culture" className="block text-gray-300 hover:text-white transition-colors">
                Culture
              </Link>
              <Link href="/pricing" className="block text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/visit" className="block text-gray-300 hover:text-white transition-colors">
                Schedule Visit
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © All rights reserved by Ready CoWorking Space Bhilwara.
          </p>
        </div>
      </div>
    </footer>
  );
}