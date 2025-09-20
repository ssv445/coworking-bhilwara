'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hey, I am interested to know more about the CoWorking place, 🤔 may I visit the place tomorrow around 4-5 PM ?"
  );
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Facilities', href: '/#facilities' },
    { name: 'Culture', href: '/#culture' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Visit', href: '/visit' },
    { name: 'WhatsApp', href: whatsappUrl, external: true }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/homepage/logo-header.png"
              alt="Ready CoWorking Space Bhilwara Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-gray-700 hover:text-cyan-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-gray-700 hover:text-cyan-500 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}