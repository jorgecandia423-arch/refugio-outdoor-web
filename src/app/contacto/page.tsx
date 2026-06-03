import Image from "next/image";

export default function Contacto() {
  return (
    <main className="flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-gutter items-center mb-20">
        <div className="md:w-1/2">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-6">
            Visita el refugio de tu próxima aventura.
          </h1>
          <p className="font-montserrat text-lg text-on-surface-variant mb-8 max-w-lg">
            Visítanos en nuestro showroom en Cochabamba para una experiencia personalizada. Un espacio diseñado para inspirar, donde cada material cuenta una historia de durabilidad y respeto por la montaña.
          </p>
          <a 
            href="https://wa.me/59179981530?text=Hola,%20quisiera%20agendar%20una%20visita%20al%20showroom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-soft-white font-montserrat font-bold text-sm uppercase tracking-wider hover:bg-brand-accent transition-all duration-300 shadow-md"
          >
            <span className="material-symbols-outlined mr-2">calendar_today</span>
            Reserva showroom
          </a>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
            <span className="font-montserrat text-xs text-brand-accent uppercase font-bold">Atención prioritaria vía WhatsApp</span>
          </div>
        </div>
        <div className="md:w-1/2 aspect-square relative overflow-hidden shadow-xl rounded-lg mt-8 md:mt-0 w-full">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrXC0tzQ_uKniOrVO8fXJUpKWv6A7_QDtzB8QYPK1GQuGdskm9t34nhTqbasVrmboJSpJW4G2nDduTWyZVaE_Nt-3ayOEt3yfpSQ4vMyqcQfWxQO97gij4m4rfEAhk82C1LYtbVJWex5dkfmiSI7CkiY395Bo7W3TE7hT7fsA9ab-2r5dnpbl7Kuva_DPhDMccud2obB_dnyE9s9lJehIgGqOuMDWPGVIbl73xrZYL_p6HCEBau8kNMBNlmzgXGMF3Cf_6FbjXFJg"
            alt="Interior Showroom Refugio Outdoor"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 h-[400px] bg-surface-variant overflow-hidden shadow-sm relative group">
          <iframe 
            src="https://maps.google.com/maps?q=Manchaypuito%2C%20esquina%20Juan%20de%20la%20Rosa%2C%20Cochabamba&t=&z=16&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="md:col-span-4 bg-primary p-8 flex flex-col justify-center text-soft-white shadow-lg">
          <h2 className="font-poppins text-2xl font-semibold mb-6 border-b border-primary-fixed-dim pb-4">Ubicación</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-brand-accent">location_on</span>
              <div>
                <p className="font-montserrat font-bold text-sm">Showroom Cochabamba</p>
                <p className="font-montserrat text-base opacity-80 mt-1">Manchaypuito, esquina Juan de la Rosa</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-brand-accent">schedule</span>
              <div>
                <p className="font-montserrat font-bold text-sm">Horarios</p>
                <p className="font-montserrat text-base opacity-80 mt-1">Lun - Vie: 10:00 - 19:30<br/>Sáb: 10:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
