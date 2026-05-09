import type { Metadata } from 'next';
import Hero from '@/components/dev/Hero';
import Photos from '@/components/dev/Photos';
import Members from '@/components/dev/Members';
import Facilities from '@/components/dev/Facilities';
import Pricing from '@/components/dev/Pricing';
import Faq from '@/components/dev/Faq';
import Founder from '@/components/dev/Founder';
import VisitCTA from '@/components/dev/VisitCTA';

export const metadata: Metadata = {
  title: 'Ready CoWork Bhilwara — a quiet floor for shipping code',
  description:
    'A 32-seat coworking floor in Bhilwara. Reserved desk, gigabit, 8h UPS, vetted neighbors who code. ₹3,000/month, no contract. Walk in this week.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Members />
      <Founder />
      <Photos />
      <Facilities />
      <Pricing />
      <Faq />
      <VisitCTA />
    </main>
  );
}
