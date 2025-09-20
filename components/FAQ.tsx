'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Is it available to any person?",
    answer: "No, the space is available to computer professionals only. We only allow professionals who fit culturally with existing members."
  },
  {
    question: "Can my friends & guest can come and meet me?",
    answer: "No, we do not allow any guest/friends inside the premise. However you can meet with them outside the compound."
  },
  {
    question: "Can I use internet to use/download whatever I want?",
    answer: "High speed internet is available for fair use. You can use it for fair office work usage and obvious person work. We dont allow its usage for movie streaming or objectionable content."
  },
  {
    question: "Where I can have online meetings?",
    answer: "We have 3 shared rooms, where you can attend your online meetings."
  },
  {
    question: "Do you have enough parking space?",
    answer: "We have multiple parking spots, which can be used for bike/scooty. For cars, you need to park them roadside available areas."
  },
  {
    question: "Can I use printer / scanner / copy?",
    answer: "Yes, its available to use. You can print/copy 10 pages free of cost per month. Additional usaged would be on charge basis."
  },
  {
    question: "Do you provide tea/coffee facility?",
    answer: "Yes. We have kitchen and person to manage it, the tea facility is optional and you can opt it by paying the charges."
  },
  {
    question: "How long the uninterrupted power will continue in case of long electricity outage?",
    answer: "We have a 6KV UPS to support most of the desk for 8 hours of electric outage. The AC/Oven/Printer might not work during that period."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our coworking space.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:bg-gray-100"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}