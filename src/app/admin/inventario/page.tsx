"use client";

import Link from "next/link";
import { MoveLeft, PlusCircle, DollarSign, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Product } from "@/store/useCartStore";

export default function InventoryDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Modal state
  const [saleModalOpen, setSaleModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [saleData, setSaleData] = useState({
    soldPrice: "",
    soldChannel: "Instagram",
    soldMethod: "Transferencia"
  });
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // We need to fetch from the actual API to get latest state
    const fetchProducts = async () => {
      // In a real app we'd fetch from an API route `GET /api/products`, but since we only have POST/PATCH,
      // we'll import the JSON directly. Note: hot reload might not pick up JSON changes immediately.
      // So we force a fetch trick or just require it. For simplicity we require the JSON file and force reload the page after sale.
      const data = await fetch('/api/products/all').catch(() => null);
      if(data && data.ok) {
          const json = await data.json();
          setProducts(json);
      } else {
          // fallback to import
          const mod = await import("@/data/products.json");
          setProducts(mod.default as unknown as Product[]);
      }
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const openSaleModal = (product: Product) => {
    setSelectedProduct(product);
    setSaleData({
      soldPrice: product.price.toString(),
      soldChannel: "Instagram",
      soldMethod: "Transferencia"
    });
    setSaleModalOpen(true);
  };

  const handleSaleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;
    setIsProcessing(true);

    try {
      const updates = {
        soldAt: new Date().toISOString(),
        soldPrice: Number(saleData.soldPrice),
        soldChannel: saleData.soldChannel,
        soldMethod: saleData.soldMethod
      };

      const res = await fetch(`/api/products/${selectedProduct.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });

      if (res.ok) {
        // Update local state
        setProducts(products.map(p => p.id === selectedProduct.id ? { ...p, ...updates } : p));
        setSaleModalOpen(false);
      } else {
        alert("Error al registrar la venta");
      }
    } catch (err) {
      console.error(err);
      alert("Error de red");
    } finally {
      setIsProcessing(false);
    }
  };

  // Cálculos financieros globales
  let totalInversion = 0;
  let totalVentasProyectadas = 0;

  const inventoryData = products.map((product) => {
    const cost = product.costPrice || 0;
    const wash = product.washCost || 0;
    const pack = product.packCost || 0;
    
    const costoTotal = cost + wash + pack;
    const precioVenta = product.price;
    const utilidadNeta = precioVenta - costoTotal;
    const margen = precioVenta > 0 ? (utilidadNeta / precioVenta) * 100 : 0;

    // Solo sumamos a proyectadas si no está vendido
    if (!product.soldAt) {
      totalInversion += costoTotal;
      totalVentasProyectadas += precioVenta;
    }

    return {
      ...product,
      costoTotal,
      utilidadNeta,
      margen
    };
  });

  const gananciaProyectada = totalVentasProyectadas - totalInversion;
  const margenGlobal = totalVentasProyectadas > 0 ? (gananciaProyectada / totalVentasProyectadas) * 100 : 0;

  if (loading) return <div className="p-12 text-center">Cargando inventario...</div>;

  return (
    <main className="flex-grow bg-surface-container py-12 min-h-screen font-montserrat relative">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/admin" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-brand-accent transition-colors uppercase">
            <MoveLeft size={20} /> Volver al Menú ERP
          </Link>
          <Link href="/admin/ingreso" className="inline-flex items-center gap-2 font-bold text-sm bg-brand-accent text-soft-white px-4 py-2 rounded uppercase hover:bg-brand-accent/90 transition-colors shadow-md">
            <PlusCircle size={20} /> Nuevo Ingreso
          </Link>
        </div>
        
        <h1 className="font-poppins text-3xl font-bold text-primary mb-2">Inventario Activo</h1>
        <p className="text-sm text-on-surface-variant mb-8">
          Control total de prendas no vendidas. Registra una venta para mover el dinero al Libro de Ventas.
        </p>

        {/* Global Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-soft-white p-6 rounded-2xl shadow-sm border border-outline-variant/30">
            <h3 className="text-xs uppercase font-bold text-on-surface-variant tracking-wider mb-2">Prendas Disponibles</h3>
            <p className="text-3xl font-poppins font-bold text-primary">{products.filter(p => !p.soldAt).length}</p>
          </div>
          <div className="bg-soft-white p-6 rounded-2xl shadow-sm border border-burnt-orange/30">
            <h3 className="text-xs uppercase font-bold text-burnt-orange tracking-wider mb-2">Capital Invertido</h3>
            <p className="text-3xl font-poppins font-bold text-primary">Bs. {totalInversion.toLocaleString()}</p>
          </div>
          <div className="bg-soft-white p-6 rounded-2xl shadow-sm border border-brand-accent/30 bg-brand-accent/5">
            <h3 className="text-xs uppercase font-bold text-brand-accent tracking-wider mb-2">Ganancia Proyectada</h3>
            <p className="text-3xl font-poppins font-bold text-brand-accent">Bs. {gananciaProyectada.toLocaleString()}</p>
          </div>
          <div className="bg-soft-white p-6 rounded-2xl shadow-sm border border-outline-variant/30">
            <h3 className="text-xs uppercase font-bold text-on-surface-variant tracking-wider mb-2">Margen Global</h3>
            <p className="text-3xl font-poppins font-bold text-primary">{margenGlobal.toFixed(1)}%</p>
          </div>
        </div>

        {/* Inventory Data Table */}
        <div className="bg-soft-white rounded-2xl shadow-md border border-outline-variant/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-surface-variant text-primary border-b border-outline-variant/30 font-montserrat uppercase text-xs">
                <tr>
                  <th className="p-4 font-bold">Estado</th>
                  <th className="p-4 font-bold">Código SKU</th>
                  <th className="p-4 font-bold">Marca / Prenda</th>
                  <th className="p-4 font-bold">Talla</th>
                  <th className="p-4 font-bold text-burnt-orange">Costo Total</th>
                  <th className="p-4 font-bold text-brand-accent bg-brand-accent/10">Precio de Lista</th>
                  <th className="p-4 font-bold text-center">Acción (P.O.S)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {inventoryData.map((item) => (
                  <tr key={item.id} className={`transition-colors ${item.soldAt ? 'bg-surface-variant/30 opacity-60' : 'hover:bg-surface-container/50'}`}>
                    <td className="p-4">
                      {item.soldAt ? (
                        <span className="text-[10px] font-bold bg-primary text-soft-white px-2 py-1 rounded uppercase">Vendido</span>
                      ) : (
                        <span className="text-[10px] font-bold bg-brand-accent text-soft-white px-2 py-1 rounded uppercase">En Venta</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span className="font-mono text-xs font-bold text-primary bg-surface-variant px-2 py-1 rounded">{item.sku || item.id}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary">{item.brand}</span>
                        <span className="text-on-surface-variant text-xs">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-primary font-bold">{item.size}</span>
                    </td>
                    <td className="p-4 font-mono font-bold text-burnt-orange">
                      Bs. {item.costoTotal}
                    </td>
                    <td className="p-4 font-mono font-bold text-brand-accent bg-brand-accent/5">
                      Bs. {item.price}
                    </td>
                    <td className="p-4 text-center">
                      {!item.soldAt && (
                        <button 
                          onClick={() => openSaleModal(item)}
                          className="inline-flex items-center gap-1 bg-brand-accent text-soft-white px-3 py-1.5 rounded text-xs font-bold uppercase hover:bg-brand-accent/80 transition-colors shadow-sm"
                        >
                          <DollarSign size={14} /> Vender
                        </button>
                      )}
                      {item.soldAt && (
                        <span className="text-xs text-on-surface-variant font-bold">Ver en Ventas &rarr;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sale Modal POS */}
      {saleModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-soft-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-brand-accent text-soft-white p-4 flex justify-between items-center">
              <h2 className="font-poppins font-bold text-lg flex items-center gap-2"><DollarSign /> Registrar Venta</h2>
              <button onClick={() => setSaleModalOpen(false)} className="hover:text-black/50 transition-colors"><X size={24} /></button>
            </div>
            <form onSubmit={handleSaleSubmit} className="p-6 space-y-4">
              <div className="mb-4">
                <p className="text-sm font-bold text-primary">{selectedProduct.brand} {selectedProduct.name}</p>
                <p className="text-xs text-on-surface-variant font-mono">SKU: {selectedProduct.sku || selectedProduct.id}</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase">Precio Final Pagado (Bs.)</label>
                <input required type="number" value={saleData.soldPrice} onChange={e => setSaleData({...saleData, soldPrice: e.target.value})} className="w-full p-3 border-2 border-brand-accent/50 rounded-lg text-lg font-bold bg-brand-accent/5 text-brand-accent" />
                <p className="text-[10px] text-on-surface-variant mt-1">El precio de lista era Bs. {selectedProduct.price}. Puedes modificarlo si hubo descuento.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-primary mb-1 uppercase">Canal de Venta</label>
                  <select required value={saleData.soldChannel} onChange={e => setSaleData({...saleData, soldChannel: e.target.value})} className="w-full p-2 border border-outline-variant/50 rounded text-sm">
                    <option>Instagram</option>
                    <option>WhatsApp</option>
                    <option>Tienda Física</option>
                    <option>Feria</option>
                    <option>Web</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-primary mb-1 uppercase">Método de Pago</label>
                  <select required value={saleData.soldMethod} onChange={e => setSaleData({...saleData, soldMethod: e.target.value})} className="w-full p-2 border border-outline-variant/50 rounded text-sm">
                    <option>Transferencia</option>
                    <option>Efectivo</option>
                    <option>QR</option>
                    <option>Tarjeta</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full bg-primary text-soft-white font-bold uppercase py-4 rounded-lg hover:bg-brand-accent transition-colors shadow-md mt-4 disabled:opacity-50"
              >
                {isProcessing ? "Procesando..." : "Confirmar Venta y Mover al Libro"}
              </button>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}
