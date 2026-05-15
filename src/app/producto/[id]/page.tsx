"use client";

import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { PRODUCTS } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id);
  const addItem = useCartStore((state) => state.addItem);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex-grow bg-soft-white">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <Link href="/tienda" className="inline-flex items-center gap-2 font-montserrat font-bold text-sm text-on-surface-variant hover:text-burnt-orange transition-colors uppercase tracking-wider mb-8">
          <MoveLeft size={20} /> Volver a la tienda
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          {/* Product Image */}
          <div className="relative aspect-[3/4] md:aspect-auto md:h-[700px] w-full bg-surface-container overflow-hidden shadow-sm">
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-6 left-6 bg-burnt-orange text-white px-4 py-2 font-montserrat font-bold text-xs uppercase tracking-widest shadow-lg">
              {product.brand}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-4 md:pt-12 md:sticky md:top-32">
            <span className="font-montserrat text-sm uppercase tracking-widest text-on-surface-variant mb-2">
              {product.category}
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="font-montserrat font-bold text-3xl text-primary mb-8">
              Bs. {product.price}
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex flex-col border-b border-outline-variant/30 pb-6">
                <span className="font-montserrat text-xs uppercase font-bold text-on-surface-variant tracking-wider mb-2">Estado</span>
                <span className="font-montserrat text-lg text-primary">{product.status} {product.status === "10/10" ? "- Como Nuevo" : product.status === "9/10" ? "- Excelente" : "- Muy Bueno"}</span>
              </div>
              <div className="flex flex-col border-b border-outline-variant/30 pb-6">
                <span className="font-montserrat text-xs uppercase font-bold text-on-surface-variant tracking-wider mb-2">Talla / Medidas</span>
                <span className="font-montserrat text-lg text-primary">{product.size}</span>
                <p className="font-montserrat text-xs text-on-surface-variant mt-2 italic">Recomendamos comparar estas medidas con una prenda tuya para asegurar el calce ideal.</p>
              </div>
            </div>

            <button 
              onClick={() => addItem(product)}
              className="w-full bg-primary text-soft-white font-montserrat font-bold text-sm md:text-base uppercase py-5 hover:bg-burnt-orange hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Añadir al Carrito
            </button>
            
            <div className="mt-8 p-6 bg-kraft-beige/30 border border-outline-variant/20 flex gap-4 items-start">
              <span className="material-symbols-outlined text-burnt-orange text-2xl">local_shipping</span>
              <div>
                <h4 className="font-montserrat font-bold text-sm text-primary mb-1">Envíos a toda Bolivia</h4>
                <p className="font-montserrat text-sm text-on-surface-variant">Coordinamos los envíos directamente al cerrar tu compra por WhatsApp. El costo de envío se calcula según tu ciudad.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
