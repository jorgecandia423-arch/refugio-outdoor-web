import Link from "next/link";
import { MoveLeft, PackagePlus, TableProperties, LineChart, Settings } from "lucide-react";

export default function ERPMenu() {
  return (
    <main className="flex-grow bg-surface-container py-12 min-h-screen font-montserrat">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-brand-accent transition-colors uppercase mb-8">
          <MoveLeft size={20} /> Volver a la Tienda
        </Link>
        
        <h1 className="font-poppins text-3xl font-bold text-primary mb-2">Mini-ERP Refugio</h1>
        <p className="text-sm text-on-surface-variant mb-12">
          Selecciona un módulo para gestionar tu negocio.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/admin/ingreso" className="bg-soft-white p-8 rounded-2xl shadow-md border border-outline-variant/30 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
            <div className="bg-primary/5 p-6 rounded-full mb-4 group-hover:bg-brand-accent/10 transition-colors">
              <PackagePlus size={48} className="text-brand-accent" />
            </div>
            <h2 className="font-poppins text-xl font-bold text-primary uppercase tracking-wide mb-2">1. Ingreso de Prendas</h2>
            <p className="text-sm text-on-surface-variant">Sube fotos, datos y registra los costos ocultos de compra y lavado.</p>
          </Link>

          <Link href="/admin/inventario" className="bg-soft-white p-8 rounded-2xl shadow-md border border-outline-variant/30 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
            <div className="bg-primary/5 p-6 rounded-full mb-4 group-hover:bg-brand-accent/10 transition-colors">
              <TableProperties size={48} className="text-brand-accent" />
            </div>
            <h2 className="font-poppins text-xl font-bold text-primary uppercase tracking-wide mb-2">2. Control de Inventario</h2>
            <p className="text-sm text-on-surface-variant">Revisa tu matriz de stock y marca productos como vendidos (POS).</p>
          </Link>

          <Link href="/admin/ventas" className="bg-soft-white p-8 rounded-2xl shadow-md border border-outline-variant/30 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col items-center text-center">
            <div className="bg-primary/5 p-6 rounded-full mb-4 group-hover:bg-brand-accent/10 transition-colors">
              <LineChart size={48} className="text-brand-accent" />
            </div>
            <h2 className="font-poppins text-xl font-bold text-primary uppercase tracking-wide mb-2">3. Libro de Ventas</h2>
            <p className="text-sm text-on-surface-variant">Analiza tus márgenes reales, utilidades netas e historial de facturación.</p>
          </Link>

          <div className="bg-surface-variant/50 p-8 rounded-2xl border border-outline-variant/30 flex flex-col items-center text-center opacity-60 grayscale cursor-not-allowed">
            <div className="bg-primary/5 p-6 rounded-full mb-4">
              <Settings size={48} className="text-primary" />
            </div>
            <h2 className="font-poppins text-xl font-bold text-primary uppercase tracking-wide mb-2">4. Configuraciones</h2>
            <p className="text-sm text-on-surface-variant">Gestiona listas de marcas, categorías y métodos de pago (Próximamente).</p>
          </div>
        </div>
      </div>
    </main>
  );
}
