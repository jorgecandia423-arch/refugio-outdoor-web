"use client";

import Link from "next/link";
import { MoveLeft, TrendingUp } from "lucide-react";
import productsData from "@/data/products.json";
import { Product } from "@/store/useCartStore";

export default function SalesDashboard() {
  const products = productsData as Product[];
  const soldProducts = products.filter(p => p.soldAt);

  let totalRevenue = 0;
  let totalCost = 0;

  const salesData = soldProducts.map((product) => {
    const cost = product.costPrice || 0;
    const wash = product.washCost || 0;
    const pack = product.packCost || 0;
    
    const costoTotal = cost + wash + pack;
    const precioVendido = product.soldPrice || product.price;
    const utilidadNeta = precioVendido - costoTotal;
    const margen = precioVendido > 0 ? (utilidadNeta / precioVendido) * 100 : 0;

    totalRevenue += precioVendido;
    totalCost += costoTotal;

    return {
      ...product,
      costoTotal,
      precioVendido,
      utilidadNeta,
      margen
    };
  });

  const totalUtilidad = totalRevenue - totalCost;
  const margenPromedio = totalRevenue > 0 ? (totalUtilidad / totalRevenue) * 100 : 0;

  return (
    <main className="flex-grow bg-surface-container py-12 min-h-screen font-montserrat">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <Link href="/admin" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-brand-accent transition-colors uppercase mb-8">
          <MoveLeft size={20} /> Volver al Menú ERP
        </Link>
        
        <h1 className="font-poppins text-3xl font-bold text-primary mb-2">Libro de Ventas</h1>
        <p className="text-sm text-on-surface-variant mb-8">
          Registro histórico de transacciones y cálculo de utilidad real ("Registro_Ventas" de tu Excel).
        </p>

        {/* Global Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-soft-white p-6 rounded-2xl shadow-sm border border-outline-variant/30">
            <h3 className="text-xs uppercase font-bold text-on-surface-variant tracking-wider mb-2">Prendas Vendidas</h3>
            <p className="text-3xl font-poppins font-bold text-primary">{soldProducts.length}</p>
          </div>
          <div className="bg-soft-white p-6 rounded-2xl shadow-sm border border-brand-accent/30 bg-brand-accent/5">
            <h3 className="text-xs uppercase font-bold text-brand-accent tracking-wider mb-2">Ingresos Totales</h3>
            <p className="text-3xl font-poppins font-bold text-brand-accent">Bs. {totalRevenue.toLocaleString()}</p>
          </div>
          <div className="bg-soft-white p-6 rounded-2xl shadow-sm border border-primary/30 bg-primary/5">
            <h3 className="text-xs uppercase font-bold text-primary tracking-wider mb-2">Utilidad Neta Pura</h3>
            <p className="text-3xl font-poppins font-bold text-primary">Bs. {totalUtilidad.toLocaleString()}</p>
          </div>
          <div className="bg-soft-white p-6 rounded-2xl shadow-sm border border-outline-variant/30">
            <h3 className="text-xs uppercase font-bold text-on-surface-variant tracking-wider mb-2">Margen Promedio</h3>
            <div className="flex items-center gap-2">
              <p className="text-3xl font-poppins font-bold text-primary">{margenPromedio.toFixed(1)}%</p>
              <TrendingUp size={24} className={margenPromedio >= 40 ? "text-brand-accent" : "text-burnt-orange"} />
            </div>
          </div>
        </div>

        {/* Sales Data Table */}
        <div className="bg-soft-white rounded-2xl shadow-md border border-outline-variant/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-surface-variant text-primary border-b border-outline-variant/30 font-montserrat uppercase text-xs">
                <tr>
                  <th className="p-4 font-bold">Fecha / Canal</th>
                  <th className="p-4 font-bold">Código SKU</th>
                  <th className="p-4 font-bold">Prenda</th>
                  <th className="p-4 font-bold text-burnt-orange">Costo Total</th>
                  <th className="p-4 font-bold text-brand-accent bg-brand-accent/10">Precio Final</th>
                  <th className="p-4 font-bold">Método Pago</th>
                  <th className="p-4 font-bold bg-primary/5 text-primary">Utilidad Neta</th>
                  <th className="p-4 font-bold">Margen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {salesData.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-container/50 transition-colors">
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-primary">{new Date(item.soldAt!).toLocaleDateString()}</span>
                        <span className="text-on-surface-variant text-xs">{item.soldChannel || "Desconocido"}</span>
                      </div>
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
                    <td className="p-4 font-mono font-bold text-burnt-orange">
                      Bs. {item.costoTotal}
                    </td>
                    <td className="p-4 font-mono font-bold text-brand-accent bg-brand-accent/5">
                      Bs. {item.precioVendido}
                    </td>
                    <td className="p-4">
                      <span className="text-xs font-bold px-2 py-1 bg-surface-variant rounded text-on-surface-variant">
                        {item.soldMethod || "Efectivo"}
                      </span>
                    </td>
                    <td className="p-4 font-mono font-bold text-primary bg-primary/5">
                      Bs. {item.utilidadNeta}
                    </td>
                    <td className="p-4">
                      <span className={`font-mono font-bold px-2 py-1 rounded-full text-xs ${item.margen >= 40 ? 'bg-brand-accent/20 text-brand-accent' : item.margen > 0 ? 'bg-primary/10 text-primary' : 'bg-burnt-orange/20 text-burnt-orange'}`}>
                        {item.margen.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
                {salesData.length === 0 && (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-on-surface-variant">No has registrado ventas todavía.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
