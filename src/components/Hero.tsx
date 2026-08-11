'use client';

import Image from 'next/image';
import { agencyInfo } from '@/data/agency';
import { getWhatsAppUrl } from '@/data/properties';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-950">
      <div className="absolute inset-0">
        <Image
          src="/images/biens/premier-bien/image1.jpeg"
          alt="Bien immobilier"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/70 to-primary-950/50" />
      </div>

      <div className="container-custom relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent-400 sm:text-base">
            Agence Immobilière
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            {agencyInfo.name}
          </h1>
          <p className="mt-4 text-lg text-primary-200 sm:text-xl lg:text-2xl">
            {agencyInfo.tagline}
          </p>
          <p className="mt-6 max-w-lg text-sm text-primary-300 sm:text-base">
            {agencyInfo.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#biens" className="btn-primary w-full text-center sm:w-auto">
              Découvrir nos biens
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full text-center sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Nous contacter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
