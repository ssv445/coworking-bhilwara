import type { Metadata } from 'next';
import Hero from '@/components/dev/Hero';
import SystemSection from '@/components/dev/SystemSection';
import Facilities from '@/components/dev/Facilities';
import Pricing from '@/components/dev/Pricing';
import Faq from '@/components/dev/Faq';
import VisitCTA from '@/components/dev/VisitCTA';

export const metadata: Metadata = {
  title: 'Ready CoWork Bhilwara — for developers',
  description:
    'A 32-seat coworking floor in Bhilwara for computer professionals. Reserved desk, gigabit cable, 8h UPS, hot RO water. ₹3,000/month, no lock-in.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <SystemSection desksFree={19} totalDesks={32} />
      <Facilities />
      <Pricing />
      <Faq />
      <VisitCTA />
    </main>
  );
}
