"use client";

import { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MoveLeft, Droplet, Wind, ThermometerSnowflake, Feather, CheckCircle2, ShieldCheck } from "lucide-react";

const getFeatureIcon = (feature: string) => {
  const f = feature.toLowerCase();
  if (f.includes("agua")) return <Droplet size={20} className="text-brand-accent" />;
  if (f.includes("viento")) return <Wind size={20} className="text-brand-accent" />;
  if (f.includes("frío") || f.includes("frio")) return <ThermometerSnowflake size={20} className="text-brand-accent" />;
  if (f.includes("ligera") || f.includes("cómoda")) return <Feather size={20} className="text-brand-accent" />;
  return <CheckCircle2 size={20} className="text-brand-accent" />;
};

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id);
  const addItem = useCartStore((state) => state.addItem);

  const [activeImage, setActiveImage] = useState(0);
  const [zoomPos, setZoomPos] = useState("50% 50%");
  const [isZooming, setIsZooming] = useState(false);
  const [activeTab, setActiveTab] = useState("La Prenda");

  if (!product) {
    notFound();
  }

  const images = product.images || [product.image];
  const tabs = ["La Prenda", "Detalles & Fit", "Estado Técnico", "El Legado"];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos(`${x}% ${y}%`);
  };

  return (
    <main className="flex-grow bg-soft-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <Link href="/tienda" className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-on-surface-variant hover:text-brand-accent transition-colors uppercase tracking-wider mb-8">
          <MoveLeft size={20} /> Volver a la tienda
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Product Gallery (Amazon Style) */}
          <div className="md:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 hide-scrollbar">
              {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-24 md:w-full md:h-32 flex-shrink-0 border-2 transition-all ${
                    activeImage === idx ? 'border-brand-accent' : 'border-outline-variant/30 hover:border-brand-accent/50'
                  }`}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>

            <div 
              className="relative w-full aspect-[3/4] md:aspect-auto md:h-[700px] bg-surface-container overflow-hidden cursor-crosshair group flex-1"
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
            >
              <Image 
                src={images[activeImage]}
                alt={product.name}
                fill
                className={`object-cover transition-transform duration-200 ${isZooming ? 'scale-150' : 'scale-100'}`}
                style={{ transformOrigin: zoomPos }}
                priority
              />
              <div className="absolute top-6 left-6 bg-primary text-soft-white px-4 py-2 font-montserrat font-bold text-xs uppercase tracking-widest shadow-lg z-10">
                {product.status === "10/10" ? "NUEVA" : "SEMINUEVA"}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:col-span-5 flex flex-col pt-4 md:pt-12">
            <div className="flex gap-4 items-center mb-2">
              <span className="font-montserrat text-sm uppercase tracking-widest text-brand-accent font-bold">
                {product.brand}
              </span>
              {product.gender && (
                <span className="font-montserrat text-xs uppercase bg-surface-variant text-on-surface-variant px-2 py-1 rounded-sm">
                  {product.gender}
                </span>
              )}
            </div>
            
            <h1 className="font-poppins text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="font-montserrat font-bold text-3xl text-primary mb-6">
              Bs. {product.price}
            </p>

            {/* Specifications Box */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8 p-6 bg-kraft-beige/30 border border-outline-variant/20 rounded-md">
                <ul className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {getFeatureIcon(feature)}
                      <span className="font-montserrat text-xs text-primary font-bold uppercase">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stylish Pill Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {tabs.map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full font-montserrat font-bold text-xs uppercase transition-all duration-300 ${
                      activeTab === tab 
                        ? 'bg-primary text-soft-white shadow-md scale-105' 
                        : 'bg-surface-variant text-on-surface-variant hover:bg-outline-variant/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content Area */}
              <div className="min-h-[120px] p-6 border border-outline-variant/30 rounded-2xl bg-surface">
                {activeTab === "La Prenda" && (
                  <p className="font-montserrat text-sm leading-relaxed text-on-surface-variant">
                    {product.description || "Una pieza clásica de equipo seleccionada cuidadosamente por su historia y durabilidad. Perfecta para quienes valoran la funcionalidad por encima de todo."}
                  </p>
                )}
                
                {activeTab === "Detalles & Fit" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span className="font-montserrat text-xs uppercase font-bold text-primary">Género</span>
                      <span className="font-montserrat text-sm text-on-surface-variant">{product.gender || "Unisex"}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-outline-variant/20 pb-2">
                      <span className="font-montserrat text-xs uppercase font-bold text-primary">Talla General</span>
                      <span className="font-montserrat text-sm text-brand-accent font-bold px-2 py-1 bg-brand-accent/10 rounded">{product.size.split(' ')[0] || "M"}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-montserrat text-xs uppercase font-bold text-primary">Medidas (Axila x Largo)</span>
                      <span className="font-montserrat text-sm text-on-surface-variant">{product.size}</span>
                    </div>
                  </div>
                )}

                {activeTab === "Estado Técnico" && (
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full ${product.status === "10/10" ? 'bg-brand-accent' : 'bg-burnt-orange'}`}></div>
                      <span className="font-montserrat text-lg font-bold text-primary">Grado: {product.status}</span>
                    </div>
                    <p className="font-montserrat text-sm leading-relaxed text-on-surface-variant">
                      {product.status === "10/10" 
                        ? "La prenda está como nueva, sin ningún detalle de desgaste, manchas o rasgaduras. Todos los cierres, velcros y costuras están intactos y operativos." 
                        : "La prenda está en excelentes condiciones funcionales con signos muy leves de uso cosmético que no afectan su rendimiento técnico en absoluto."}
                    </p>
                  </div>
                )}

                {activeTab === "El Legado" && (
                  <p className="font-montserrat text-sm leading-relaxed text-on-surface-variant">
                    {product.brandInfo || `${product.brand} es una marca legendaria en el mundo del outdoor. Seleccionamos esta pieza específica por representar la cúspide de su ingeniería de materiales y diseño atemporal.`}
                  </p>
                )}
              </div>
            </div>

            {/* Authenticity Verification Box */}
            {product.authenticityCode && (
              <div className="mb-6 p-4 border-2 border-brand-accent/20 bg-brand-accent/5 rounded-xl flex items-start gap-4">
                <ShieldCheck size={28} className="text-brand-accent flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-widest text-primary mb-1">Prenda Auténtica Verificada</h4>
                  <p className="font-montserrat text-xs text-on-surface-variant mb-2">
                    Este artículo ha sido inspeccionado. Número de Serie/RN registrado: <strong className="text-primary">{product.authenticityCode}</strong>
                  </p>
                  <a href={`https://www.google.com/search?q=${product.brand}+${product.authenticityCode}`} target="_blank" rel="noopener noreferrer" className="font-montserrat text-xs font-bold text-brand-accent hover:underline flex items-center gap-1">
                    Verificar número en línea &rarr;
                  </a>
                </div>
              </div>
            )}

            <button 
              onClick={() => addItem(product)}
              className="w-full bg-primary text-soft-white font-montserrat font-bold text-sm md:text-base uppercase py-5 hover:bg-brand-accent hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/20 rounded-xl"
            >
              Añadir al carrito
            </button>
            
            <div className="mt-6 p-4 bg-transparent border border-brand-accent/30 flex gap-4 items-center rounded-xl justify-center text-center">
              <span className="material-symbols-outlined text-brand-accent text-xl">local_shipping</span>
              <p className="font-montserrat text-xs text-primary font-bold uppercase tracking-wider">Envíos a nivel nacional coordinados por WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
