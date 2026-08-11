import { notFound } from 'next/navigation';
import { Header, PropertyDetails, Footer, CTASection, WhatsAppFloatingButton } from '@/components';
import { getPropertyBySlug } from '@/data/properties';

interface PropertyPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return [
    { slug: 'maison-ouaga-2000' },
    { slug: 'local-commercial-patte-d-oe' },
  ];
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      <PropertyDetails property={property} />
      <CTASection />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
