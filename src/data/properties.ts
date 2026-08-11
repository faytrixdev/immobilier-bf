export interface Property {
  id: string;
  slug: string;
  title: string;
  type: string;
  location: string;
  price: string;
  priceValue: number;
  description: string;
  features: string[];
  proximity: string;
  additionalInfo: string;
  images: string[];
  available: boolean;
}

export const properties: Property[] = [
  {
    id: '1',
    slug: 'maison-ouaga-2000',
    title: 'Maison à Ouaga 2000',
    type: 'Maison',
    location: 'Ouaga 2000',
    price: '450 000 FCFA',
    priceValue: 450000,
    description: 'Bien situé dans la zone de Ouaga 2000, à proximité immédiate de l\'école Le Creuset.',
    features: [
      '2 chambres',
      'Salon',
      '2 douches/WC',
      'Garage fermé pour véhicule',
    ],
    proximity: 'À proximité de l\'école Le Creuset',
    additionalInfo: 'Idéale pour famille, cette maison offre un cadre de vie agréable dans un quartier prisé de Ouagadougou.',
    images: [
      '/images/biens/premier-bien/image1.webp',
      '/images/biens/premier-bien/image2.webp',
      '/images/biens/premier-bien/image3.webp',
      '/images/biens/premier-bien/image4.webp',
      '/images/biens/premier-bien/image5.webp',
      '/images/biens/premier-bien/image6.webp',
    ],
    available: true,
  },
  {
    id: '2',
    slug: 'local-commercial-patte-d-oe',
    title: 'Local commercial à la Patte d\'Oie',
    type: 'Local commercial',
    location: 'Patte d\'Oie',
    price: '110 000 FCFA / mois',
    priceValue: 110000,
    description: 'Local adapté à une activité commerciale et situé dans une zone accessible, à proximité du goudron.',
    features: [
      'Buvette-restauration',
      'Possibilité d\'autres activités similaires',
      'Deuxième position par rapport au goudron',
    ],
    proximity: 'Non loin de l\'église catholique',
    additionalInfo: 'Local commercial bien situé, idéal pour une activité de restauration ou tout autre commerce de proximité.',
    images: [
      '/images/biens/deuxieme-bien/image1.webp',
      '/images/biens/deuxieme-bien/image2.webp',
      '/images/biens/deuxieme-bien/image3.webp',
      '/images/biens/deuxieme-bien/image4.webp',
      '/images/biens/deuxieme-bien/image5.webp',
      '/images/biens/deuxieme-bien/image6.webp',
      '/images/biens/deuxieme-bien/image7.webp',
    ],
    available: true,
  },
];

export const WHATSAPP_NUMBER = '22664765280';

export function getWhatsAppUrl(propertyTitle?: string): string {
  const message = propertyTitle
    ? `Bonjour, je suis intéressé par le bien ${propertyTitle}. Pouvez-vous me donner plus d'informations ?`
    : 'Bonjour, je souhaite obtenir des informations sur vos biens immobiliers.';
  const encodedMessage = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
