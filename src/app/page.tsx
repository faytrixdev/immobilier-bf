import {
  Header,
  Hero,
  PropertyGrid,
  WhyChooseUs,
  AboutSection,
  CTASection,
  Footer,
  WhatsAppFloatingButton,
} from '@/components';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PropertyGrid />
      <WhyChooseUs />
      <AboutSection />
      <CTASection />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
