"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/store/useCartStore";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Detroit Jacket Vintage",
    brand: "Carhartt",
    price: 850,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbQV0cihQnJU6JMiLzT8vwnxvCDF7CURQoAlDgUY5HviaJfPsUFEY7WsNvqCrAbHylLQ-3Eo9uU6ur98-IThKDOoAFMKg2Hmx3A8vCY05TVsdqYD_RuHk9WciTxZkpizjvK_EKf94kKzqGsDJ7Noa9lzWeQrAW28eqFRO-6fJuzCyJw-Iio1s4Z8zubGDceRE3LJ_K1il9BCiwvMM-d3gQ-ojX70L4RPO7wpBADkdrNs7v0oAUzx8dKebDT6MnMTUj0zG0MWbZwYw",
    status: "10/10",
    size: "58cm x 65cm",
    category: "Refugio Workwear"
  },
  {
    id: "2",
    name: "R1 Fleece Pullover",
    brand: "Patagonia",
    price: 620,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlcEVrOhSc_A5BES9NLxGGELaeWG7FeCo-LMP5TpslRSWlyryAR8Mlgowko24mW4ng46YZXZg_WpDhbL_dQyXbGrQ8pf86T5vtruxtR7BVwVFSzJIWDUSjVBb5QW7l-u_QznEnxvScxPrqskixpWj_lZmL4WTTqmeRfksFH0VBq-B4UEMEYEYS37HGR_doRLDenMy-sI9C4Z0U1IV-nurrpIxHz_GIquJrlKPbZdPFVqUqmjRR51ULvW7pwecTToZxh0I8FJ8YheQ",
    status: "9/10",
    size: "54cm x 70cm",
    category: "Refugio Trekking"
  },
  {
    id: "3",
    name: "Double Knee Pant",
    brand: "Carhartt",
    price: 780,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUkefEtdyGHLTplylvm611ujyfQ7rMeh04N1dqo95Hk8KgLtiBFiciQAl4xeoFoxzCN3lO37EACpTCAvDkV6ysULl-dPf2IwVwXAhdbZUezS8AWzWKSrEHtx7aUoCxCc59YUditJdah5Fn7-30oJp9Yz6xhcP_GgTQlDXeEaMFa4TDa6rDrVdFGlxBmzaq4PYTqAYyD41Tsjfhga7t634dG4PfFtaahnfSEZvDjZ0rZsuqzl6KGSbKrytMdAU36e7QfNbQV4uaLBQ",
    status: "10/10",
    size: "34W x 32L",
    category: "Refugio Workwear"
  },
  {
    id: "4",
    name: "Board Shirt Virgin Wool",
    brand: "Pendleton",
    price: 550,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQrJEJ922XGAuT4iW9u6_g3tcY1VH77l_Uoh_T62xMjQiDCphrZZ1ykk4nK8eeKxzG6L3l8Anv-swWY6eCRoWLNX_C0oh-J9wx-FbF1mslF-flGMeCBBNKjtN4CUzW2g3DZn88cjIBRZlBFlYRTc0VT8sdttS9zbR4okhsktd5-_etB-BQ5tzrUs4evROCpS8hEDgYKJ9qiKTMRBgDD6XpYmy7qCV3Z4DD3tXbQ00BkJihO98pobeR0RR1vQpCicFoMNXBtIkYptE",
    status: "9/10",
    size: "56cm x 72cm",
    category: "Refugio Essentials"
  },
  {
    id: "5",
    name: "Street Creek 24L",
    brand: "Black Diamond",
    price: 920,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWTlyHBO4gvTxJ5VkzZm-b3I297Yl3_HrkrvZCMmR-jzgG99rOssCvvDKO1hMxvuhXxFV_pCUio5ujqEknAmCkCXUiYQsha8rZ6GuBwKSpGXXnnhnZ2WpIo1c57CoABNxQcFcF__imVDwP5glEOchQzezJgyoRcVe2VC3u_Gc10IrjDGtlTortMwUoZ5VA-7oSq1qZFzFkezeQ-qQei1hlkzTuzcmcniMfZW5rctOYbIeCYsNEzm4n7Ip0UkrWqKW6Rn3VY_SLYBI",
    status: "10/10",
    size: "24L",
    category: "Equipo de Ruta"
  },
  {
    id: "6",
    name: "Thorium AR Vest",
    brand: "Arc'teryx",
    price: 1150,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHVjWgwjFGoHHFeNzXU1JJN5nfuZM_ekWvjHRTX8rbuU6AnRKZgCoE2kCezja51EiJL1upO-4BCAq9Udikc6QgoU_YkOFeOCTguOTaf_nxAwMpXF7NpLs5_5M_iP4V6tmWlXFD-hf206qDUeBDO-apBfDA9ic6r9DN7HOIZERSCmP6s3t6r2ne56VZ-bOguwCZRyTbpZ6NN6EuFjTxRWMaJG9r3o4um-rblujKa_g9bqTuW-El4UmKGpHsnTWBctkc4otEdCvkCWk",
    status: "8/10",
    size: "52cm x 68cm",
    category: "Refugio Trekking"
  }
];

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

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchStatus = selectedStatus.length > 0 ? selectedStatus.includes(p.status) : true;
    const matchCategory = selectedCategory ? p.category === selectedCategory : true;
    return matchStatus && matchCategory;
  });

  return (
    <main className="flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
      <header className="mb-16">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4">La Curaduría</h1>
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
            <h3 className="font-montserrat font-bold text-sm uppercase text-primary mb-6 tracking-widest">Categorías</h3>
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
            <h3 className="font-montserrat font-bold text-sm uppercase text-primary mb-6 tracking-widest">Estado (Status)</h3>
            <div className="space-y-3">
              {["10/10", "9/10", "8/10"].map((status) => (
                <label key={status} className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 border-primary text-burnt-orange focus:ring-burnt-orange rounded-none accent-burnt-orange"
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
            <span className="material-symbols-outlined text-burnt-orange mb-2">straighten</span>
            <h4 className="font-montserrat font-bold text-xs uppercase text-primary mb-2">Guía de Medidas</h4>
            <p className="font-montserrat text-[13px] text-on-surface-variant leading-relaxed">
              Todas nuestras prendas incluyen medidas exactas en cm (axila a axila y largo total) para asegurar un calce perfecto.
            </p>
          </section>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-gutter">
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
