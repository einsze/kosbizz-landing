import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { ChatDemo } from '@/components/ChatDemo';
import { Trust } from '@/components/Trust';
import { PartnerBanner } from '@/components/PartnerBanner';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { PlanPreview } from '@/components/PlanPreview';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <ChatDemo />
      <Trust />
      <PartnerBanner />
      <FeaturesGrid />
      <PlanPreview />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
