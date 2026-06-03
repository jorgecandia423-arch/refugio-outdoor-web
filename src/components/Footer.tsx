import Link from "next/link";
import Image from "next/image";
import { Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-soft-white mt-auto">
      <div className="w-full py-20 px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <div className="mb-6 bg-kraft-beige p-4 rounded-lg inline-block shadow-lg">
            <Image src="/logo.png" alt="Refugio Outdoor" width={180} height={60} className="object-contain" />
          </div>
          <p className="font-montserrat text-base text-on-primary-container/80 mb-6">
            Curaduría con propósito para el explorador consciente.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-montserrat font-bold text-sm uppercase text-primary-fixed-dim mb-2">Compañía</span>
          <Link href="#" className="font-montserrat text-base text-on-primary-container/80 hover:text-soft-white hover:translate-x-1 transition-all">Sustentabilidad</Link>
          <Link href="#" className="font-montserrat text-base text-on-primary-container/80 hover:text-soft-white hover:translate-x-1 transition-all">Club Refugio</Link>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-montserrat font-bold text-sm uppercase text-primary-fixed-dim mb-2">Servicio</span>
          <Link href="#" className="font-montserrat text-base text-on-primary-container/80 hover:text-soft-white hover:translate-x-1 transition-all">Envíos</Link>
          <Link href="#" className="font-montserrat text-base text-on-primary-container/80 hover:text-soft-white hover:translate-x-1 transition-all">Términos y condiciones</Link>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-montserrat font-bold text-sm uppercase text-primary-fixed-dim mb-2">Ubicación</span>
          <p className="font-montserrat text-base text-on-primary-container/80">Cochabamba, Bolivia.</p>
          <div className="flex gap-4 mt-2">
            <button className="text-soft-white hover:text-brand-accent transition-colors"><Globe size={20} /></button>
            <button className="text-soft-white hover:text-brand-accent transition-colors"><Share2 size={20} /></button>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-desktop py-8 border-t border-white/10 text-center">
        <p className="font-montserrat text-xs text-on-primary-container/60 italic">
          © 2024 Refugio Outdoor. Cochabamba, Bolivia. Curaduría con propósito.
        </p>
      </div>
    </footer>
  );
}
