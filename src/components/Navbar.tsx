import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/data/teachers";
import { motion, AnimatePresence } from "framer-motion";

const languages: { code: Language; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "tj", label: "TJ" },
];

export const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/library", label: t.nav.library },
    { path: "/admission", label: t.nav.admission },
    { path: "/gallery", label: t.nav.gallery },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="sticky top-0 z-50 bg-navy"
      style={{ boxShadow: "var(--shadow-navbar)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "var(--gradient-gold)" }}
            >
              <GraduationCap size={22} className="text-navy-dark" />
            </div>
            <div>
              <div className="font-display font-bold text-white text-lg leading-tight">
                Ilm Markazi
              </div>
              <div className="text-xs text-white/60 leading-tight">
                Specialized School 1
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-white/80 hover:text-white ${isActive(link.path) ? "active text-white" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-white/10 rounded-lg p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`lang-btn ${language === lang.code ? "active" : ""}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-dark border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all ${isActive(link.path) ? "bg-white/10 text-white" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-1 bg-white/10 rounded-lg p-1 mt-2 sm:hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`lang-btn flex-1 ${language === lang.code ? "active" : ""}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
