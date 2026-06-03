"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight, ShieldCheck, MapPin, Search, Leaf, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import productsData from "@/data/products.json";
import { Product } from "@/store/useCartStore";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

const HERO_IMAGES = [
  {
    src: "/bolivia_trekking.png",
    title: "La Curaduría",
    subtitle: "Ropa de Segunda Mano de Alta Gama para Montaña y Ciudad",
    location: "Tunari, Cochabamba"
  },
  {
    src: "/salar_uyuni_adventure.png",
    title: "Aventura Sin Límites",
    subtitle: "Equipamiento para Terrenos Extremos",
    location: "Salar de Uyuni, Potosí"
  },
  {
    src: "/illimani_camping.png",
    title: "El Legado de la Montaña",
    subtitle: "Prendas que Resisten el Paso del Tiempo",
    location: "Illimani, La Paz"
  },
  {
    src: "/madidi_jungle.png",
    title: "Exploración Profunda",
    subtitle: "Rendimiento Técnico en la Selva Tropical",
    location: "Madidi, Beni"
  },
  {
    src: "/cordillera_real.png",
    title: "Cumbres Heladas",
    subtitle: "Aislamiento Térmico para las Alturas",
    location: "Cordillera Real, La Paz"
  }
];

export default function Home() {
  const products = productsData as Product[];
  const addItem = useCartStore(state => state.addItem);
  const router = useRouter();
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleProductClick = (id: string) => {
    router.push(`/producto/${id}`);
  };

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addItem(product);
  };

  return (
    <main className="flex-grow font-montserrat">
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        {HERO_IMAGES.map((img, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <Image 
              src={img.src} 
              alt={img.title}
              fill
              className={`object-cover object-center transition-transform duration-[10000ms] ease-out ${index === currentSlide ? "scale-105" : "scale-100"}`}
              priority={index === 0}
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 max-w-4xl mx-auto text-center text-soft-white overflow-hidden">
               <div className={`mb-4 inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 transition-all duration-1000 ease-out delay-300 ${index === currentSlide ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}`}>
                 <MapPin size={14} className="text-brand-accent" /> {img.location}
               </div>
               <h1 className={`font-poppins text-4xl md:text-6xl lg:text-7xl font-bold uppercase mb-4 tracking-tight drop-shadow-2xl transition-all duration-1000 ease-out delay-500 ${index === currentSlide ? "translate-x-0 opacity-100 scale-100" : "-translate-x-24 opacity-0 scale-95"}`}>
                 {img.title}
               </h1>
               <p className={`font-montserrat text-lg md:text-xl font-medium mb-10 max-w-2xl drop-shadow-md transition-all duration-1000 ease-out delay-700 ${index === currentSlide ? "translate-x-0 opacity-100 scale-100" : "translate-x-24 opacity-0 scale-95"}`}>
                 {img.subtitle}
               </p>
               <div className={`flex flex-col sm:flex-row gap-4 items-center transition-all duration-1000 ease-out delay-[900ms] ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
                 <Link 
                   href="/tienda" 
                   className="bg-brand-accent text-soft-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-brand-accent/90 hover:-translate-y-1 transition-all flex items-center gap-2 shadow-2xl hover:shadow-brand-accent/30"
                 >
                   Explorar Catálogo <MoveRight size={20} />
                 </Link>
               </div>
            </div>
          </div>
        ))}

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3">
          {HERO_IMAGES.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === currentSlide ? "w-12 bg-brand-accent" : "w-6 bg-white/40 hover:bg-white/60"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-surface-variant py-8 border-y border-outline-variant/30">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2 text-primary group">
            <div className="bg-primary/5 p-3 rounded-full group-hover:bg-brand-accent/10 transition-colors">
              <ShieldCheck size={28} className="text-brand-accent" />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider">Autenticidad Garantizada</h3>
            <p className="text-[10px] text-on-surface-variant max-w-[150px]">Cada prenda es inspeccionada y curada</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-primary group">
            <div className="bg-primary/5 p-3 rounded-full group-hover:bg-brand-accent/10 transition-colors">
              <Leaf size={28} className="text-brand-accent" />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider">Moda Circular</h3>
            <p className="text-[10px] text-on-surface-variant max-w-[150px]">Extendiendo la vida del equipo de montaña</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-primary group">
            <div className="bg-primary/5 p-3 rounded-full group-hover:bg-brand-accent/10 transition-colors">
              <Zap size={28} className="text-brand-accent" />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider">Estado Impecable</h3>
            <p className="text-[10px] text-on-surface-variant max-w-[150px]">Solo piezas 9/10 y 10/10 seleccionadas</p>
          </div>
          <div className="flex flex-col items-center gap-2 text-primary group">
            <div className="bg-primary/5 p-3 rounded-full group-hover:bg-brand-accent/10 transition-colors">
              <MapPin size={28} className="text-brand-accent" />
            </div>
            <h3 className="font-bold text-xs uppercase tracking-wider">Envíos a Nivel Nacional</h3>
            <p className="text-[10px] text-on-surface-variant max-w-[150px]">Llegamos a toda Bolivia</p>
          </div>
        </div>
      </section>

      {/* Top Picks / Latest Additions */}
      <section className="py-20 max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold uppercase text-primary mb-2">
              Últimos Ingresos
            </h2>
            <p className="text-on-surface-variant font-medium">Las piezas más exclusivas recién añadidas al catálogo</p>
          </div>
          <Link href="/tienda" className="text-sm font-bold text-brand-accent uppercase hover:underline flex items-center gap-1">
            Ver todas las prendas <MoveRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.filter(p => !p.soldAt).slice(0, 4).map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer bg-soft-white rounded-xl overflow-hidden border border-outline-variant/30 hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface-variant">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {product.status && (
                  <div className="absolute top-4 left-4 bg-primary text-soft-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded backdrop-blur-md">
                    {product.status}
                  </div>
                )}
                
                {product.authenticityCode && (
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-brand-accent" title="Prenda Verificada">
                    <ShieldCheck size={16} />
                  </div>
                )}

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="bg-brand-accent text-soft-white px-6 py-3 rounded-lg font-bold text-sm uppercase transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-brand-accent/90"
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{product.brand}</span>
                  <span className="text-xs font-bold text-primary bg-surface-variant px-2 py-1 rounded">{product.size}</span>
                </div>
                <h3 className="font-poppins font-bold text-primary text-lg leading-tight mb-4 group-hover:text-brand-accent transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                  <p className="font-mono text-xl font-bold text-primary">
                    Bs. {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Search / Categories Prompt */}
      <section className="bg-primary text-soft-white py-24 border-t-4 border-brand-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-poppins text-3xl md:text-5xl font-bold uppercase mb-6">¿Buscas algo específico?</h2>
          <p className="font-montserrat text-lg text-soft-white/80 mb-10 max-w-2xl mx-auto">
            Explora por categorías, marcas o tallas en nuestro catálogo completo.
          </p>
          <Link 
            href="/tienda" 
            className="inline-flex items-center justify-center gap-3 bg-soft-white text-primary px-8 py-4 rounded-lg font-bold uppercase hover:bg-brand-accent hover:text-soft-white transition-all shadow-xl text-lg"
          >
            <Search size={24} /> Ir al Catálogo Completo
          </Link>
        </div>
      </section>
    </main>
  );
}
