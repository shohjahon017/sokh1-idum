import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { galleryImages, GalleryImage } from "@/data/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

type Category =
  | "all"
  | "events"
  | "sports"
  | "celebrations"
  | "science"
  | "arts";

export default function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const categories: Category[] = [
    "all",
    "events",
    "sports",
    "celebrations",
    "science",
    "arts",
  ];
  const filtered =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);
  const currentIndex = lightbox
    ? filtered.findIndex((img) => img.id === lightbox.id)
    : -1;
  const navigate = (dir: 1 | -1) => {
    if (currentIndex === -1) return;
    setLightbox(
      filtered[(currentIndex + dir + filtered.length) % filtered.length],
    );
  };
  const catLabel = (c: Category) =>
    (t.gallery as Record<string, string>)[c] ?? c;

  return (
    <div>
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Camera size={26} className="text-navy-dark" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {t.gallery.pageTitle}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t.gallery.pageSubtitle}
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-6 bg-card border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${activeCategory === cat ? "text-navy-dark shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
                style={
                  activeCategory === cat
                    ? { background: "var(--gradient-gold)" }
                    : {}
                }
              >
                {catLabel(cat)}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                  style={{ boxShadow: "var(--shadow-card)" }}
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-display font-semibold text-white text-lg">
                      {img.title}
                    </p>
                    <span className="badge-gold text-xs mt-1">
                      {catLabel(img.category as Category)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[80vh] object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <p className="font-display font-bold text-white text-xl">
                  {lightbox.title}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <X size={18} />
              </button>
              <button
                onClick={() => navigate(-1)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <ChevronRight size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
