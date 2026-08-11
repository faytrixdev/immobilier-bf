export interface AgencyInfo {
  name: string;
  tagline: string;
  description: string;
  locations: string;
  services: string[];
}

export const agencyInfo: AgencyInfo = {
  name: 'Immobilier BF',
  tagline: 'Votre projet immobilier commence ici.',
  description: 'Agence immobilière spécialisée dans la vente, l\'achat et la location de biens immobiliers à Ouagadougou et dans ses environs. Nous accompagnons nos clients dans leurs projets immobiliers en leur proposant des biens adaptés à leurs besoins et à leur budget.',
  locations: 'Ouagadougou et environs',
  services: [
    'Vente de biens immobiliers',
    'Achat de biens immobiliers',
    'Location de biens immobiliers',
    'Accompagnement personnalisé',
  ],
};
