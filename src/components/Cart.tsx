"use client";

import { useCartStore } from "@/store/useCartStore";
import { X, Trash2 } from "lucide-react";
import Image from "next/image";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeItem, getTotal, clearCart } = useCartStore();

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    let message = "Hola Refugio Outdoor, quiero comprar los siguientes artículos:\n\n";
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.brand}) - Talla: ${item.size} - Estado: ${item.status} -> Bs. ${item.price}\n`;
    });
    message += `\nTotal a pagar: Bs. ${getTotal()}`;

    const url = `https://wa.me/59179981530?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    clearCart();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-full max-w-lg bg-kraft-beige z-[70] shadow-2xl flex flex-col transform transition-transform duration-300">
        <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface">
          <h2 className="font-poppins text-2xl font-semibold text-primary">Tu Refugio (Carrito)</h2>
          <button onClick={onClose} className="p-2 text-on-surface-variant hover:text-burnt-orange transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center text-on-surface-variant mt-10 font-montserrat">
              <span className="material-symbols-outlined text-6xl mb-4 opacity-50">shopping_bag</span>
              <p>No tienes equipos en tu carrito aún.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-surface-container p-4 rounded-md">
                <div className="relative w-24 h-32 flex-shrink-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover rounded-sm" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-montserrat text-xs uppercase font-bold text-burnt-orange">{item.brand}</span>
                      <h4 className="font-poppins font-semibold text-primary text-base leading-tight mt-1">{item.name}</h4>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="text-outline hover:text-error transition-colors p-1">
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <div>
                    <p className="font-montserrat text-sm text-on-surface-variant mt-2">Talla: <span className="font-semibold">{item.size}</span></p>
                    <p className="font-montserrat text-sm text-on-surface-variant">Estado: <span className="font-semibold">{item.status}</span></p>
                  </div>
                  <p className="font-montserrat font-bold text-primary text-lg mt-2">Bs. {item.price}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 bg-surface border-t border-outline-variant/30">
            <div className="flex justify-between items-center mb-6">
              <span className="font-montserrat text-on-surface-variant uppercase text-sm font-bold">Subtotal</span>
              <span className="font-poppins text-2xl font-semibold text-primary">Bs. {getTotal()}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-primary text-soft-white font-montserrat font-bold text-sm uppercase py-4 hover:bg-burnt-orange transition-colors flex items-center justify-center gap-2"
            >
              Cerrar Compra vía WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
