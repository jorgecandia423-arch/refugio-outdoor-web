"use client";

import Image from "next/image";
import { useCartStore, Product } from "@/store/useCartStore";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface-container mb-6 transition-all duration-500 group-hover:shadow-xl">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-burnt-orange text-white px-3 py-1 font-montserrat font-bold text-[10px] uppercase tracking-widest">
          {product.brand}
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary px-3 py-1 font-montserrat font-bold text-[10px] uppercase border border-outline-variant/50">
          Status: {product.status}
        </div>
        
        {/* Hover Action Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col gap-2">
          <button 
            onClick={() => addItem(product)}
            className="w-full bg-soft-white text-primary font-montserrat font-bold text-sm uppercase py-4 hover:bg-kraft-beige transition-colors shadow-lg"
          >
            Añadir al Carrito
          </button>
        </div>
      </div>
      
      <div className="flex flex-col flex-1">
        <h3 className="font-poppins text-xl font-semibold text-primary mb-1">{product.name}</h3>
        <p className="font-montserrat text-sm text-on-surface-variant mb-4">{product.size}</p>
        <div className="mt-auto flex justify-between items-end">
          <span className="font-montserrat font-bold text-xl text-primary">Bs. {product.price}</span>
        </div>
      </div>
    </div>
  );
}
