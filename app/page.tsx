import type { Metadata } from 'next';
import { BRAND } from '@/lib/business';
import Hero from '@/components/dev/Hero';
import Photos from '@/components/dev/Photos';
import Members from '@/components/dev/Members';
import Facilities from '@/components/dev/Facilities';
import Pricing from '@/components/dev/Pricing';
import Faq from '@/components/dev/Faq';
import Founder from '@/components/dev/Founder';
import VisitOutro from '@/components/dev/VisitOutro';
import PhadBorder from '@/components/dev/PhadBorder';

export const metadata: Metadata = {
  title: `${BRAND.name} — a quiet floor for shipping code`,
  description: `${BRAND.name} (Subhash Nagar) — a ${BRAND.seats}-seat coworking floor with reserved desks, comfortable chairs, high-speed internet, 8h UPS, and vetted neighbors who code. An ideal place to work in Bhilwara. ₹3,000/month, no contract. Walk in this week.`,
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Members />
      <PhadBorder />
      <Founder />
      <Photos />
      <PhadBorder />
      <Facilities />
      <Pricing />
      <Faq />
      <VisitOutro />
    </main>
  );
}
