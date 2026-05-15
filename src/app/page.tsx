"use client";

import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRaJgRuJ1iS1DwjZsi1s56OkCi7BBBIa1bGNuR6-PE4KBG4BNOvSlEI7m7OofvYK27wO_p0QST1lvxro-bPKXe3vpTvx1XhnfkdskZOHIVdyfT_DaIvflmOJqkVfYWyb8io6I2Q0SiUG1KkA_p6i-mFYX25GGdT7fSGMINmiNChlutAoIc-OwL4pvABU4ykommBHV6Nj8woIifSsC07Ngtz3p48olyx2SfYzdPx4Aibtma84Lc0bll2gxLqA3NUGuarWWoJdkyxh4" 
          alt="Mountain Trail" 
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full z-10">
          <div className="max-w-2xl bg-kraft-beige/40 backdrop-blur-sm p-8 md:p-12 border-l-4 border-burnt-orange">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Prendas con segunda vida para tu próxima ruta
            </h1>
            <Link href="/tienda" className="inline-block bg-primary text-soft-white font-montserrat font-bold text-sm uppercase px-8 py-4 hover:translate-y-[-2px] hover:shadow-lg transition-all duration-300">
              Ver el Drop Actual
            </Link>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-kraft-beige">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <span className="text-burnt-orange font-montserrat font-bold text-sm uppercase tracking-widest block mb-4">
            Filosofía de Selección
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl italic text-primary leading-relaxed mb-8">
            "Creemos en la durabilidad por encima de la tendencia. Cada pieza en Refugio es seleccionada una a una, evaluando su historia técnica y su potencial para seguir explorando."
          </h2>
          <div className="w-16 h-px bg-outline-variant mx-auto mb-8"></div>
          <p className="font-montserrat text-lg text-on-surface-variant">
            Nuestra curaduría con propósito rescata lo mejor del equipo outdoor mundial. Desde chaquetas técnicas de alta gama hasta capas base esenciales, garantizamos que cada hallazgo esté listo para enfrentar los senderos más exigentes de Bolivia.
          </p>
        </div>
      </section>

      {/* Hallazgos Bento Grid */}
      <section className="py-24 bg-soft-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="font-poppins text-3xl font-semibold text-primary">Hallazgos Exclusivos</h3>
              <p className="font-montserrat text-base text-on-surface-variant mt-2">Curaduría de marcas icónicas</p>
            </div>
            <div className="hidden md:block">
              <Link href="/tienda" className="font-montserrat font-bold text-sm text-burnt-orange flex items-center gap-2 hover:gap-4 transition-all uppercase">
                VER TODO EL CATÁLOGO <MoveRight size={20} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:h-[700px]">
            {/* Main Feature */}
            <div className="md:col-span-7 md:row-span-2 group relative overflow-hidden bg-kraft-beige min-h-[400px]">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1fqAz17GeCQ8n9FGwyTtNGuAtFuFGjYHweBCtZmhnIY4yzrPdmquMNmzdn3tf6ESHR3MoXkn4D9s8EgwW-F6MMi3-vc9cFp6uXSJdgWU4CvU9ylWhzlm0btBePjFUdr8pCtMDLY0PTjp8op9RXWTg4AJM3dhmqlqUhYsYKKVQHcbfapNOT-YiAPmnOy8vOQ7Kt0RisaoL4a6DZBudqXABs3wMO4pOaKOi2c9ImZ8Q5OK4NpbtQRIsfcdRgKlip1cwZW-9SwefJy4"
                alt="Patagonia Jacket"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8 text-soft-white">
                <span className="bg-burnt-orange text-[10px] font-bold uppercase tracking-tighter px-2 py-1 self-start mb-4">Sustainability Badge</span>
                <h4 className="font-poppins text-2xl font-semibold mb-1">Patagonia Torrentshell 3L</h4>
                <p className="font-montserrat text-xs opacity-90 uppercase font-medium">Estado: Como Nuevo</p>
              </div>
            </div>

            {/* Sub Features */}
            <div className="md:col-span-5 group relative overflow-hidden bg-surface-container min-h-[300px]">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc4yqJa3gSt6ScaQpI3Cq3OG8JKn2Btm3XsssFyRd7Fo2AUaNFQnaPk6URR3I3iSCDZwA_Hur66xod_TnryhmnvU_OnB7XQCiuPpkUSmNuU2JfNJHjveBrJnA8UF9HinE63W9Hq5V-7456lYR_DoQKdBsvisQjebc00j4qTOkJljmdMjA9-sTXVq3nj2sdYpvVa0D2GufG52IgN_CwE9yqJ1sL3X1cYOjd1MsoaCg9H9-7l69GXOuTbeWz-OH44SMCyYsIpC3axrM"
                alt="The North Face Boots"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-soft-white">
                <p className="font-montserrat font-bold text-sm uppercase">The North Face VECTIV</p>
                <p className="font-montserrat text-sm">Calzado de aproximación</p>
              </div>
            </div>

            <div className="md:col-span-5 group relative overflow-hidden bg-surface-container min-h-[300px]">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4xqP-wfB-nHZWT9l2LTbhF1wpOScVBwaLQAJXzThwze3uWVR5X5_DAk97uAhfWStLrf3a31NXY31xC-zg2fcjKlWcwviDH8TxkmI-CSMf_rMZZeNfCKBehAKwz9ObqH1a8bfiUOAEEGFW40WL5MykLY3PnQvVLxteCs7BodMgHoWNHR8Rv2m0Hyx1LbGBkRN1cLtgv_2g9kDudnPQCc3IfxdosGvvqV5kPxk5HM39Vt0ERwS94VyU-7J2ag5kh1cRlmeK7jojrdg"
                alt="Arc'teryx Fleece"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-soft-white">
                <p className="font-montserrat font-bold text-sm uppercase">Arc'teryx Delta LT</p>
                <p className="font-montserrat text-sm">Capa intermedia técnica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-primary text-soft-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-poppins text-3xl md:text-4xl font-semibold mb-6">Únete al Club Refugio</h2>
            <p className="font-montserrat text-lg text-primary-fixed-dim mb-8">
              Recibe acceso anticipado a nuestros drops mensuales y contenido exclusivo sobre mantenimiento de equipo y rutas sostenibles.
            </p>
            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); alert("Te has unido al Club Refugio exitosamente!"); }}>
              <input 
                type="text" 
                placeholder="Tu nombre completo" 
                required
                className="bg-transparent border-b border-outline-variant focus:border-soft-white transition-colors py-3 px-0 w-full font-montserrat text-soft-white outline-none focus:ring-0"
              />
              <input 
                type="tel" 
                placeholder="Tu número de WhatsApp" 
                required
                className="bg-transparent border-b border-outline-variant focus:border-soft-white transition-colors py-3 px-0 w-full font-montserrat text-soft-white outline-none focus:ring-0"
              />
              <div className="flex gap-4">
                <input 
                  type="text" 
                  placeholder="Talla Superior (Top)" 
                  className="bg-transparent border-b border-outline-variant focus:border-soft-white transition-colors py-3 px-0 w-1/2 font-montserrat text-soft-white outline-none focus:ring-0"
                />
                <input 
                  type="text" 
                  placeholder="Talla Inferior (Pantalón)" 
                  className="bg-transparent border-b border-outline-variant focus:border-soft-white transition-colors py-3 px-0 w-1/2 font-montserrat text-soft-white outline-none focus:ring-0"
                />
              </div>
              <button type="submit" className="bg-burnt-orange text-soft-white font-montserrat font-bold text-sm uppercase px-8 py-4 hover:bg-burnt-orange/90 transition-all mt-4">
                Unirme al Club
              </button>
            </form>
          </div>
          <div className="relative hidden md:block aspect-square overflow-hidden rounded-lg">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhPiOCJmB9VbL2Hhqej53w9jGmjQzlax0xUZtYbyKBAssUWvjQIRyaL1E5BHxDEwwp3c-dwaZuVd7mTjWjoFNs5qhJDpTCdMdD4LqVVaNBvfsyC8yWQjSMEdV5T1n5APNx6qc9Gu-D0FP3XUVXjzAsItHZyIJwq14oKTXA-IgIw_yFzcvimiGgb60-PT3dH6aGld5-ZqRhkw2pX2--eMNswn6pUdLF3NZjlkKZH7FZOhBvp6IQQjDFE7ovo2UXSjLQaGwy-3cC9qA"
              alt="Community"
              fill
              className="object-cover opacity-60"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
