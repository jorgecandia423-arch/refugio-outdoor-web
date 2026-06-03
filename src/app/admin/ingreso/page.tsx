"use client";

import { useState } from "react";
import Link from "next/link";
import { MoveLeft, Camera, Sparkles, ShieldCheck, UploadCloud, CheckCircle, Calculator } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: Date.now().toString(),
    sku: "",
    name: "",
    brand: "",
    price: "",
    costPrice: "",
    washCost: "",
    packCost: "",
    status: "10/10",
    size: "",
    category: "Refugio Essentials",
    gender: "Unisex",
    description: "",
    brandInfo: "",
    features: "",
    authenticityCode: ""
  });

  const [mainFile, setMainFile] = useState<File | null>(null);
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  
  const [isScanning, setIsScanning] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [published, setPublished] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMainFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMainFile(e.target.files[0]);
    }
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGalleryFiles(Array.from(e.target.files));
    }
  };

  const uploadFile = async (file: File) => {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: fd });
    const data = await res.json();
    if (!data.success) throw new Error(data.error);
    return data.url;
  };

  const handleSimulateAIScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setFormData({
        ...formData,
        id: Date.now().toString(),
        sku: "SKU-CHA-005",
        name: "Torrentshell 3L Jacket",
        brand: "Patagonia",
        price: "1200",
        costPrice: "600",
        washCost: "15",
        packCost: "5",
        status: "9/10",
        size: "M | 54x72cm",
        category: "Refugio Trekking",
        gender: "Mujer",
        description: "Encontramos esta belleza en estado impecable. La chaqueta Torrentshell 3L de Patagonia usa tecnología H2No Performance Standard para un rendimiento excepcional a prueba de agua y transpirable.",
        brandInfo: "Patagonia lidera la revolución sostenible. Sus prendas están diseñadas para durar décadas, con reparaciones garantizadas por la marca.",
        features: "Resistente al agua, Cortaviento, Ligera y cómoda",
        authenticityCode: "RN51884-AUTH"
      });
      setIsScanning(false);
    }, 3000);
  };

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mainFile && isScanning === false) {
      alert("Por favor sube al menos una imagen principal.");
      return;
    }

    setIsPublishing(true);
    
    try {
      let finalMainImage = "https://via.placeholder.com/600x800"; // Fallback placeholder
      if (mainFile) {
        finalMainImage = await uploadFile(mainFile);
      }

      let finalGalleryImages: string[] = [];
      for (const file of galleryFiles) {
        const url = await uploadFile(file);
        finalGalleryImages.push(url);
      }

      const featuresArray = formData.features.split(",").map(s => s.trim()).filter(s => s !== "");
      const finalImagesArray = finalGalleryImages.length > 0 ? [finalMainImage, ...finalGalleryImages] : [finalMainImage];

      const newProduct = {
        id: formData.id,
        sku: formData.sku,
        name: formData.name,
        brand: formData.brand,
        price: Number(formData.price),
        costPrice: Number(formData.costPrice || 0),
        washCost: Number(formData.washCost || 0),
        packCost: Number(formData.packCost || 0),
        image: finalMainImage,
        status: formData.status,
        size: formData.size,
        category: formData.category,
        images: finalImagesArray,
        features: featuresArray,
        gender: formData.gender,
        description: formData.description,
        brandInfo: formData.brandInfo,
        ...(formData.authenticityCode ? { authenticityCode: formData.authenticityCode } : {})
      };

      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });

      if (res.ok) {
        setPublished(true);
        setTimeout(() => {
          setPublished(false);
          router.push('/admin/inventario');
        }, 3000);
      } else {
        alert("Hubo un error al guardar el producto.");
      }
    } catch (error) {
      console.error(error);
      alert("Error en la subida de archivos.");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <main className="flex-grow bg-surface-container py-12 min-h-screen font-montserrat">
      <div className="max-w-4xl mx-auto px-margin-mobile">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-sm text-primary hover:text-brand-accent transition-colors uppercase">
            <MoveLeft size={20} /> Volver a la Tienda
          </Link>
          <Link href="/admin/inventario" className="inline-flex items-center gap-2 font-bold text-sm bg-primary text-soft-white px-4 py-2 rounded uppercase hover:bg-primary/90 transition-colors">
            Ver Inventario (Excel)
          </Link>
        </div>
        
        <h1 className="font-poppins text-3xl font-bold text-primary mb-2">Refugio Admin Panel</h1>
        <p className="text-sm text-on-surface-variant mb-8">
          Sube tu inventario directamente. Las fotos se guardarán en tu servidor y los datos se publicarán automáticamente en la tienda.
        </p>

        {published ? (
          <div className="bg-brand-accent text-soft-white p-12 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center animate-pulse">
            <CheckCircle size={64} className="mb-4" />
            <h2 className="font-poppins font-bold text-2xl mb-2">¡Producto Publicado!</h2>
            <p className="font-montserrat">Redirigiendo a tu control de inventario...</p>
          </div>
        ) : (
          <form onSubmit={handlePublish} className="bg-soft-white p-6 md:p-8 rounded-2xl shadow-md space-y-6 border border-outline-variant/30">
            
            {/* Botón de Escaneo IA */}
            <div className="p-6 bg-primary rounded-xl text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-soft-white font-bold mb-2 flex justify-center items-center gap-2">
                  <Sparkles size={20} className="text-brand-accent" /> Autocompletar con IA
                </h3>
                <label 
                  className={`bg-brand-accent text-soft-white px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-brand-accent/90 transition-all flex items-center gap-2 mx-auto cursor-pointer ${isScanning || isPublishing ? "opacity-50 pointer-events-none" : ""}`}
                >
                  {isScanning ? "Analizando..." : <><Camera size={20} /> Cámara / Galería</>}
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleMainFileChange(e);
                        handleSimulateAIScan();
                      }
                    }} 
                  />
                </label>
              </div>
            </div>

            <h2 className="font-bold text-primary border-b border-outline-variant/30 pb-2 mt-6">Costos Ocultos (Finanzas Internas)</h2>
            <div className="bg-surface-variant p-4 rounded border border-outline-variant/50 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase">Código SKU</label>
                <input required name="sku" value={formData.sku} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm bg-soft-white" placeholder="SKU-..." />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase text-burnt-orange">Costo Compra (Bs)</label>
                <input type="number" required name="costPrice" value={formData.costPrice} onChange={handleChange} className="w-full p-2 border border-burnt-orange/30 rounded text-sm bg-soft-white" placeholder="0" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase text-burnt-orange">Costo Lavado (Bs)</label>
                <input type="number" name="washCost" value={formData.washCost} onChange={handleChange} className="w-full p-2 border border-burnt-orange/30 rounded text-sm bg-soft-white" placeholder="0" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase text-burnt-orange">Costo Empaque (Bs)</label>
                <input type="number" name="packCost" value={formData.packCost} onChange={handleChange} className="w-full p-2 border border-burnt-orange/30 rounded text-sm bg-soft-white" placeholder="0" />
              </div>
              <p className="col-span-2 md:col-span-4 text-[10px] text-on-surface-variant flex items-center gap-1 mt-1">
                <Calculator size={12}/> Estos datos NUNCA se mostrarán al cliente. Solo se usan para calcular tu margen de utilidad en el Excel interno.
              </p>
            </div>

            <h2 className="font-bold text-primary border-b border-outline-variant/30 pb-2 mt-6">Datos Públicos</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase">Nombre de la Prenda</label>
                <input required name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm" placeholder="Ej. Nuptse 700" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase">Marca</label>
                <input required name="brand" value={formData.brand} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm" placeholder="Ej. The North Face" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-accent mb-1 uppercase">Precio Venta (Bs.)</label>
                <input required type="number" name="price" value={formData.price} onChange={handleChange} className="w-full p-2 border-2 border-brand-accent/50 rounded text-sm font-bold" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase">Categoría</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm">
                  <option>Refugio Essentials</option>
                  <option>Refugio Trekking</option>
                  <option>Refugio Workwear</option>
                </select>
              </div>
            </div>

            <h2 className="font-bold text-primary border-b border-outline-variant/30 pb-2 mt-6">Detalles Técnicos</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase">Género</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm">
                  <option>Unisex</option>
                  <option>Hombre</option>
                  <option>Mujer</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase">Talla & Medidas</label>
                <input required name="size" value={formData.size} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm" placeholder="L | 58x70cm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase">Estado</label>
                <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm">
                  <option>10/10</option>
                  <option>9/10</option>
                  <option>8/10</option>
                </select>
              </div>
            </div>

            <div className="bg-surface-variant p-4 rounded border border-outline-variant/50">
              <label className="flex items-center gap-2 text-xs font-bold text-primary mb-2 uppercase">
                <ShieldCheck size={16} className="text-brand-accent"/> Código de Serie / RN
              </label>
              <input name="authenticityCode" value={formData.authenticityCode} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm bg-soft-white" placeholder="Ej. RN51884" />
            </div>

            <div>
              <label className="block text-xs font-bold text-primary mb-1 uppercase">Descripción y Legado</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm h-16 mb-2" placeholder="Descripción de la prenda" />
              <textarea required name="brandInfo" value={formData.brandInfo} onChange={handleChange} className="w-full p-2 border border-outline-variant/50 rounded text-sm h-16" placeholder="Legado de la marca" />
            </div>

            <h2 className="font-bold text-primary border-b border-outline-variant/30 pb-2">Archivos (Local)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-brand-accent/50 p-6 rounded-xl flex flex-col items-center justify-center text-center bg-brand-accent/5">
                <UploadCloud size={32} className="text-brand-accent mb-2" />
                <label className="cursor-pointer">
                  <span className="block text-xs font-bold text-primary uppercase hover:underline">Subir Imagen Principal</span>
                  <input type="file" accept="image/*" onChange={handleMainFileChange} className="hidden" />
                </label>
                {mainFile && <span className="text-xs text-brand-accent mt-2 font-bold">{mainFile.name}</span>}
              </div>

              <div className="border-2 border-dashed border-outline-variant p-6 rounded-xl flex flex-col items-center justify-center text-center">
                <UploadCloud size={32} className="text-on-surface-variant mb-2" />
                <label className="cursor-pointer">
                  <span className="block text-xs font-bold text-on-surface-variant uppercase hover:underline">Subir Galería Adicional</span>
                  <input type="file" accept="image/*" multiple onChange={handleGalleryChange} className="hidden" />
                </label>
                {galleryFiles.length > 0 && <span className="text-xs text-on-surface-variant mt-2">{galleryFiles.length} imágenes seleccionadas</span>}
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isPublishing || isScanning}
              className="w-full bg-primary text-soft-white font-bold uppercase py-5 rounded-lg hover:bg-brand-accent transition-all shadow-lg mt-8 disabled:opacity-50 text-lg flex justify-center items-center gap-2"
            >
              {isPublishing ? (
                <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Publicando...</>
              ) : (
                "🚀 Publicar Producto en la Tienda"
              )}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
