'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Property } from '@/data/properties';
import WhatsAppButton from './WhatsAppButton';

interface PropertyDetailsProps {
  property: Property;
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + property.images.length) % property.images.length
    );
  };

  return (
    <section className="bg-white pb-8 pt-4 sm:pb-12 sm:pt-8">
      <div className="container-custom">
        <Link
          href="/#biens"
          className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-900 sm:mb-6"
        >
          <ArrowLeft size={16} />
          Retour aux biens
        </Link>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="relative min-w-0">
            <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: '4/3' }}>
              <Image
                src={property.images[currentImage]}
                alt={`${property.title} - Photo ${currentImage + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {property.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-white sm:left-3 sm:p-3"
                  aria-label="Image précédente"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition-colors hover:bg-white sm:right-3 sm:p-3"
                  aria-label="Image suivante"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {property.images.length > 1 && (
              <div className="mt-3 w-full">
                <div
                  className="flex gap-2 overflow-x-auto pb-2"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`relative shrink-0 overflow-hidden rounded-lg transition-all ${
                        index === currentImage
                          ? 'ring-2 ring-primary-900 ring-offset-2 opacity-100'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                      style={{ width: '4.5rem', height: '3.25rem' }}
                    >
                      <Image
                        src={image}
                        alt={`Miniature ${index + 1}`}
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
                <p className="mt-1 text-center text-xs text-primary-500">
                  {currentImage + 1} / {property.images.length}
                </p>
              </div>
            )}
          </div>

          <div className="min-w-0">
            <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
              {property.type}
            </span>

            <h1 className="mt-2 text-xl font-bold text-primary-900 sm:mt-3 sm:text-3xl">
              {property.title}
            </h1>

            <div className="mt-2 flex items-center gap-1.5 text-sm text-primary-600 sm:text-base">
              <MapPin size={16} />
              <span>{property.location}</span>
            </div>

            <p className="mt-2 text-xl font-bold text-accent-700 sm:mt-3 sm:text-3xl">
              {property.price}
            </p>

            <div className="mt-4 sm:mt-6">
              <h2 className="text-base font-semibold text-primary-900 sm:text-lg">
                Description
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-primary-600 sm:text-base">
                {property.description}
              </p>
              {property.additionalInfo && (
                <p className="mt-2 text-sm leading-relaxed text-primary-600 sm:text-base">
                  {property.additionalInfo}
                </p>
              )}
            </div>

            <div className="mt-4 sm:mt-6">
              <h2 className="text-base font-semibold text-primary-900 sm:text-lg">
                Caractéristiques
              </h2>
              <ul className="mt-2 grid gap-2 sm:mt-3">
                {property.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-primary-600"
                  >
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {property.proximity && (
              <div className="mt-4 rounded-lg border border-primary-100 bg-primary-50 p-3 sm:mt-6 sm:p-4">
                <p className="text-sm font-medium text-primary-800">
                  Proximité
                </p>
                <p className="mt-1 text-sm text-primary-600">
                  {property.proximity}
                </p>
              </div>
            )}

            <div className="mt-6 sm:mt-8">
              <WhatsAppButton
                propertyTitle={property.title}
                fullWidth
                className="text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
