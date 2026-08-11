'use client';

import { CheckCircle } from 'lucide-react';
import { whyChooseUs } from '@/data/whyChooseUs';

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Pourquoi Immobilier BF ?</h2>
          <p className="section-subtitle">
            Nous vous accompagnons dans la réalisation de votre projet immobilier
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-primary-100 bg-white p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-50">
                <CheckCircle size={20} className="text-accent-600" />
              </div>
              <h3 className="text-base font-semibold text-primary-900 sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
