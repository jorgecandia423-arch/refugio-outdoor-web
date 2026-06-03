"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import Cart from "./Cart";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const cartItems = useCartStore((state) => state.items);

  return (
    <>
      <header className="bg-kraft-beige/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-20">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Refugio Outdoor" width={180} height={60} className="object-contain" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-montserrat font-bold text-sm uppercase text-on-surface-variant hover:text-brand-accent transition-colors duration-200">
            Lo nuevo
          </Link>
          <Link href="/tienda" className="font-montserrat font-bold text-sm uppercase text-on-surface-variant hover:text-brand-accent transition-colors duration-200">
            Tienda
          </Link>
          <Link href="/marcas" className="font-montserrat font-bold text-sm uppercase text-on-surface-variant hover:text-brand-accent transition-colors duration-200">
            Marcas
          </Link>
          <Link href="/contacto" className="font-montserrat font-bold text-sm uppercase text-on-surface-variant hover:text-brand-accent transition-colors duration-200">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            className="p-2 text-primary hover:text-brand-accent transition-all duration-300 relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={24} />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-brand-accent text-soft-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItems.length}
              </span>
            )}
          </button>
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-kraft-beige border-b border-outline-variant/30 px-margin-mobile py-4 flex flex-col gap-4 shadow-lg">
          <Link href="/" className="font-montserrat font-bold text-base uppercase text-primary border-b border-outline-variant/20 pb-2">Lo nuevo</Link>
          <Link href="/tienda" className="font-montserrat font-bold text-base uppercase text-primary border-b border-outline-variant/20 pb-2">Tienda</Link>
          <Link href="/marcas" className="font-montserrat font-bold text-base uppercase text-primary border-b border-outline-variant/20 pb-2">Marcas</Link>
          <Link href="/contacto" className="font-montserrat font-bold text-base uppercase text-primary pb-2">Contacto</Link>
        </div>
      )}
      </header>

      {/* Cart Slide-over */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
