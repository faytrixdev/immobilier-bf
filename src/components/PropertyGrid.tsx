'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { properties, Property } from '@/data/properties';
import PropertyCard from './PropertyCard';

export default function PropertyGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [locationFilter, setLocationFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const types = useMemo(
    () => ['all', ...Array.from(new Set(properties.map((p) => p.type)))],
    []
  );

  const locations = useMemo(
    () => ['all', ...Array.from(new Set(properties.map((p) => p.location)))],
    []
  );

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        searchQuery === '' ||
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        typeFilter === 'all' || property.type === typeFilter;

      const matchesLocation =
        locationFilter === 'all' || property.location === locationFilter;

      return matchesSearch && matchesType && matchesLocation;
    });
  }, [searchQuery, typeFilter, locationFilter]);

  return (
    <section id="biens" className="bg-primary-50/50 py-16 sm:py-20 lg:py-24">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Découvrez nos biens</h2>
          <p className="section-subtitle">
            Explorez notre sélection de biens immobiliers à Ouagadougou
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400"
              />
              <input
                type="text"
                placeholder="Rechercher un bien..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-primary-200 bg-white py-3 pl-10 pr-4 text-sm text-primary-900 placeholder-primary-400 outline-none transition-colors focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-200 bg-white px-4 py-3 text-sm font-medium text-primary-700 transition-colors hover:bg-primary-50 sm:hidden"
            >
              <SlidersHorizontal size={16} />
              Filtres
            </button>
            <div className={`hidden gap-3 sm:flex ${showFilters ? 'flex' : ''}`}>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="rounded-lg border border-primary-200 bg-white px-4 py-3 text-sm text-primary-700 outline-none focus:border-primary-400"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'Tous les types' : type}
                  </option>
                ))}
              </select>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="rounded-lg border border-primary-200 bg-white px-4 py-3 text-sm text-primary-700 outline-none focus:border-primary-400"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'Toutes les localisations' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {showFilters && (
            <div className="mt-3 flex flex-col gap-3 sm:hidden">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="rounded-lg border border-primary-200 bg-white px-4 py-3 text-sm text-primary-700 outline-none focus:border-primary-400"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'Tous les types' : type}
                  </option>
                ))}
              </select>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="rounded-lg border border-primary-200 bg-white px-4 py-3 text-sm text-primary-700 outline-none focus:border-primary-400"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'Toutes les localisations' : location}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-primary-500">
              Aucun bien ne correspond à votre recherche.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
