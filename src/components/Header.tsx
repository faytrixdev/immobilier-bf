'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { agencyInfo } from '@/data/agency';
import { getWhatsAppUrl } from '@/data/properties';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/#biens', label: 'Nos biens' },
    { href: '/#apropos', label: 'À propos' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100 bg-white/95 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-9 w-9 overflow-hidden rounded-2xl sm:h-10 sm:w-10">
              <Image
                src="/images/logo.webp"
                alt={agencyInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg font-bold text-primary-900 sm:text-xl">
              {agencyInfo.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-primary-700 transition-colors hover:text-primary-900"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Nous contacter
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-primary-900 transition-colors hover:bg-primary-50 md:hidden"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-primary-100 bg-white md:hidden">
          <nav className="container-custom flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-primary-50 py-3 text-base font-medium text-primary-700 transition-colors hover:text-primary-900"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full text-center"
            >
              Nous contacter
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
