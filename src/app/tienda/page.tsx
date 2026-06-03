"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function Tienda() {
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleStatus = (status: string) => {
    setSelectedStatus(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchStatus = selectedStatus.length > 0 ? selectedStatus.includes(p.status) : true;
    const matchCategory = selectedCategory ? p.category === selectedCategory : true;
    return matchStatus && matchCategory;
  });

  return (
    <main className="flex-grow max-w-[1600px] w-full mx-auto px-6 md:px-12 py-12">
      <header className="mb-16">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">La curaduría</h1>
        <p className="font-montserrat text-lg text-on-surface-variant max-w-2xl">
          Selección premium de equipo técnico y ropa de trabajo. Cada pieza es inspeccionada bajo nuestros estándares de durabilidad y funcionalidad.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-gutter">
        {/* Mobile Filter Button */}
        <button 
          className="md:hidden w-full bg-surface-container py-4 font-montserrat font-bold text-sm uppercase text-primary border border-outline-variant/30 mb-6"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          {showMobileFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
        </button>

        {/* Sidebar Navigation & Filters */}
        <aside className={`${showMobileFilters ? "block" : "hidden"} md:block w-full md:w-64 flex-shrink-0 space-y-10 mb-10 md:mb-0`}>
          <section>
            <h3 className="font-montserrat font-bold text-sm uppercase text-primary mb-4 border-b border-outline-variant/30 pb-2">Filtrar por categoría</h3>
            <ul className="space-y-4">
              {["Refugio Essentials", "Refugio Trekking", "Refugio Workwear", "Mini Refugio", "Equipo de Ruta"].map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                    className={`font-montserrat font-bold transition-colors ${selectedCategory === cat ? 'text-burnt-orange' : 'text-on-surface-variant hover:text-primary'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-montserrat font-bold text-sm uppercase text-primary mb-4 border-b border-outline-variant/30 pb-2">Estado de la prenda</h3>
            <div className="space-y-3">
              {["10/10", "9/10", "8/10"].map((status) => (
                <label key={status} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 border-primary text-brand-accent focus:ring-brand-accent rounded-none accent-brand-accent"
                    checked={selectedStatus.includes(status)}
                    onChange={() => toggleStatus(status)}
                  />
                  <span className="font-montserrat text-base text-on-surface-variant group-hover:text-primary transition-colors">
                    {status} {status === "10/10" ? "- Como Nuevo" : status === "9/10" ? "- Excelente" : "- Muy Bueno"}
                  </span>
                </label>
              ))}
            </div>
          </section>

          <section className="p-6 bg-soft-white border border-outline-variant/30 rounded-lg">
            <span className="material-symbols-outlined text-brand-accent mb-2">straighten</span>
            <h4 className="font-montserrat font-bold text-xs uppercase text-primary mb-2">Guía de medidas</h4>
            <p className="font-montserrat text-[13px] text-on-surface-variant leading-relaxed">
              Todas nuestras prendas incluyen medidas exactas en cm (axila a axila y largo total) para asegurar un calce perfecto.
            </p>
          </section>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-on-surface-variant font-montserrat">
              No se encontraron productos con los filtros seleccionados.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
