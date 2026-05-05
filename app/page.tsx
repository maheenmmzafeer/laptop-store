import { FrameSequenceHero } from '@/components/hero/FrameSequenceHero';
import { Navbar } from '@/components/layout/Navbar';
import { EditorialFeature } from '@/components/sections/EditorialFeature';
import { SpecsSection } from '@/components/sections/SpecsSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { PreOrderSection } from '@/components/sections/PreOrderSection';

export default function Home() {
  return (
    <main className="bg-tech-dark text-silver-100 selection:bg-silver-700 selection:text-white">
      <Navbar />
      <FrameSequenceHero />
      <EditorialFeature />
      <SpecsSection />
      <GallerySection />
      <PreOrderSection />
    </main>
  );
}
