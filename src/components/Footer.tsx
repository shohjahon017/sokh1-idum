import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: "var(--gradient-gold)" }}
              >
                <GraduationCap size={22} className="text-navy-dark" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">
                  Ilm Markazi
                </div>
                <div className="text-xs text-white/50">
                  Specialized School #1
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Providing quality education and shaping the future of our
              community through academic excellence and character development.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { path: "/", label: t.nav.home },
                { path: "/about", label: t.nav.about },
                { path: "/library", label: t.nav.library },
                { path: "/admission", label: t.nav.admission },
                { path: "/gallery", label: t.nav.gallery },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-white/60 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-yellow-400 mt-0.5 flex-shrink-0"
                />
                <span className="text-sm text-white/60">
                  {t.footer.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-white/60">{t.footer.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-400 flex-shrink-0" />
                <span className="text-sm text-white/60">{t.footer.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Ilm Markazi Specialized School #1.{" "}
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};
