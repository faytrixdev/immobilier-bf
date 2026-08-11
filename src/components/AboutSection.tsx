'use client';

import Image from 'next/image';
import { agencyInfo } from '@/data/agency';

export default function AboutSection() {
  return (
    <section id="apropos" className="bg-primary-50/50 py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/logo.jpeg"
              alt={agencyInfo.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="section-title">À propos d&apos;{agencyInfo.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-primary-600 sm:text-lg">
              {agencyInfo.description}
            </p>

            <div className="mt-6 space-y-3">
              {agencyInfo.services.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent-500" />
                  <span className="text-sm text-primary-700 sm:text-base">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-primary-100 bg-white p-5">
              <p className="text-sm font-medium text-primary-800">
                Zone d&apos;intervention
              </p>
              <p className="mt-1 text-primary-600">{agencyInfo.locations}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
