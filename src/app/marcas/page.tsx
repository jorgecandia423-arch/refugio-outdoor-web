import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Marcas() {
  return (
    <main className="flex-grow">
      {/* Editorial Header */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-7">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
                Nuestra curaduría: <br/>Marcas con legado
              </h1>
              <p className="font-montserrat text-lg text-on-surface-variant max-w-xl">
                Seleccionamos cada pieza basándonos en su capacidad para resistir el tiempo y el clima. No solo vendemos equipo; entregamos herramientas probadas para la aventura.
              </p>
            </div>
            <div className="md:col-span-5 bg-kraft-beige p-8 border-l-4 border-brand-accent mt-8 md:mt-0">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-brand-accent text-2xl">verified</span>
                <h3 className="font-montserrat font-bold text-sm uppercase text-primary">El arte del "fishing"</h3>
              </div>
              <p className="font-montserrat text-base text-secondary">
                Nuestro equipo recorre mercados y colecciones privadas, "pescando" las piezas más icónicas. Cada chaqueta, bota o mochila es sometida a una revisión técnica exhaustiva para garantizar su autenticidad y estado premium antes de llegar a nuestro showroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Blocks */}
      <section className="py-20 space-y-32">
        {/* Patagonia */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 relative group overflow-hidden h-[500px]">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPG0DoeZmroqVWfb87VMfmyLNCTie6la-D6iwvjR44iycMQt4ujCJ8I_PxEHQYbDiUFMKVvOuOo_wuQaEPLLO_s-qGacTr-h8OOyK2SmHwDoz3qzXOqFXxiJhbtxO5XBvbIlodT5clNR3CKczCudiFD9NCi9NBIgKwHeo88kF2HkYAnOROL2we3kRFbm07GTnA3zXxNDF94co63ZhMbm-z3A9LApWBUf7scpGLkkSRdyW4d-gdKMTGsT0IhKzoiuN2un6oKvaR7dY"
                alt="Patagonia Heritage"
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all"></div>
            </div>
            <div className="md:col-span-5 md:col-start-8 mt-8 md:mt-0">
              <span className="font-montserrat text-xs uppercase tracking-widest text-on-surface-variant mb-4 block font-bold">Nuestro manifiesto</span>
              <h2 className="font-poppins text-4xl font-semibold text-primary mb-6">Patagonia</h2>
              <p className="font-montserrat text-lg text-on-surface-variant mb-8">
                Referente global en sustentabilidad. Sus prendas están diseñadas para ser reparadas, no reemplazadas. Cada fibra cuenta una historia de activismo y excelencia técnica.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-kraft-beige text-brand-accent rounded-full">
                <span className="material-symbols-outlined text-xl">eco</span>
                <span className="font-montserrat text-xs font-bold uppercase">Sustainability Badge</span>
              </div>
            </div>
          </div>
        </div>

        {/* The North Face */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center flex-col-reverse md:flex-row">
            <div className="md:col-span-5 order-2 md:order-1 mt-8 md:mt-0">
              <span className="font-montserrat text-xs uppercase tracking-widest text-burnt-orange mb-4 block font-bold">Expedición extrema</span>
              <h2 className="font-poppins text-4xl font-semibold text-primary mb-6">The North Face</h2>
              <p className="font-montserrat text-lg text-on-surface-variant mb-8">
                Desde el Everest hasta las calles de la ciudad. El equilibrio perfecto entre la innovación de materiales de alto rendimiento y una estética atemporal que define el outdoor moderno.
              </p>
              <Link href="/tienda" className="inline-block bg-primary text-soft-white px-8 py-4 font-montserrat font-bold text-sm uppercase hover:translate-y-[-2px] transition-transform duration-300">
                Ver colección
              </Link>
            </div>
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 relative h-[400px]">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSHho-BSNnerHeLH3QCcQ_6EgWDyud5fSmgBD7d5nRsGciTeSHlmoDF51dH8ImLczoQw3AVTR3CaDgUjUVNJXDMDZT7JCUCWTK1-UzJg2z1wJWjRK5E7OhUqF6H_8aGOHMSyN1MB93-jj006aQTeoCdsrbxMwLwCL6CD3kJJKCu2YOM-AX3ajRz4inBJUuuBakzXJ3cIrmWO-5uGt8Kn9ErXeVepJA1p3-XlttNhxO8qLSznDAcFUlHfqCGhuvU36g1cr7rWqKLQk"
                alt="The North Face Nuptse"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-soft-white p-6 shadow-xl hidden md:block">
                <p className="font-montserrat font-bold text-sm text-primary italic">"Never Stop Exploring"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carhartt */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 relative group overflow-hidden h-[500px]">
              <Image 
                src="/carhartt_lifestyle.png"
                alt="Carhartt Heritage"
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all"></div>
            </div>
            <div className="md:col-span-5 md:col-start-8 mt-8 md:mt-0">
              <span className="font-montserrat text-xs uppercase tracking-widest text-on-surface-variant mb-4 block font-bold">Resistencia Absoluta</span>
              <h2 className="font-poppins text-4xl font-semibold text-primary mb-6">Carhartt</h2>
              <p className="font-montserrat text-lg text-on-surface-variant mb-8">
                El estándar de oro en ropa de trabajo ultra-duradera. Desde 1889 fabricando prendas con lona reforzada que han trascendido a la cultura urbana y el outdoor. Construido para heredar.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-kraft-beige text-brand-accent rounded-full">
                <span className="font-montserrat text-xs font-bold uppercase">Workwear Legacy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Columbia */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center flex-col-reverse md:flex-row">
            <div className="md:col-span-5 order-2 md:order-1 mt-8 md:mt-0">
              <span className="font-montserrat text-xs uppercase tracking-widest text-burnt-orange mb-4 block font-bold">Innovación Activa</span>
              <h2 className="font-poppins text-4xl font-semibold text-primary mb-6">Columbia</h2>
              <p className="font-montserrat text-lg text-on-surface-variant mb-8">
                Tecnología y rendimiento para todos. Creadores de piezas emblemáticas y sistemas de protección contra el clima que han equipado a generaciones de aventureros al aire libre.
              </p>
              <Link href="/tienda" className="inline-block bg-primary text-soft-white px-8 py-4 font-montserrat font-bold text-sm uppercase hover:translate-y-[-2px] transition-transform duration-300">
                Ver colección
              </Link>
            </div>
            <div className="md:col-span-6 md:col-start-7 order-1 md:order-2 relative h-[400px]">
              <Image 
                src="/columbia_lifestyle.png"
                alt="Columbia Sportswear"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-soft-white p-6 shadow-xl hidden md:block">
                <p className="font-montserrat font-bold text-sm text-primary italic">"Tested Tough"</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
