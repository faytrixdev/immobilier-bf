'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Tag } from 'lucide-react';
import { Property } from '@/data/properties';
import WhatsAppButton from './WhatsAppButton';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-primary-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <Link href={`/biens/${property.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-3 top-3">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary-800 backdrop-blur-sm">
              {property.type}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/biens/${property.slug}`}>
          <h3 className="text-lg font-semibold text-primary-900">
            {property.title}
          </h3>
        </Link>

        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-primary-600">
          <MapPin size={14} className="shrink-0" />
          <span>{property.location}</span>
        </div>

        <div className="mt-2 flex items-center gap-1.5">
          <Tag size={14} className="shrink-0 text-accent-600" />
          <span className="text-lg font-bold text-accent-700">{property.price}</span>
        </div>

        <ul className="mt-2 space-y-0.5">
          {property.features.slice(0, 2).map((feature, index) => (
            <li key={index} className="text-sm text-primary-600">
              • {feature}
            </li>
          ))}
        </ul>

        <div className="mt-3 flex flex-col gap-2">
          <Link
            href={`/biens/${property.slug}`}
            className="btn-outline text-center text-sm"
          >
            Voir le bien
          </Link>
          <WhatsAppButton
            propertyTitle={property.title}
            className="justify-center text-sm"
          />
        </div>
      </div>
    </article>
  );
}
