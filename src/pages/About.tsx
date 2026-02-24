import { useLanguage } from "@/contexts/LanguageContext";
import { teachersData } from "@/data/teachers";
import { TeacherCard } from "@/components/TeacherCard";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  const { t, language } = useLanguage();
  const teachers = teachersData[language].teachers;
  return (
    <div>
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {t.about.pageTitle}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t.about.pageSubtitle}
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Target,
                label: "Our Mission",
                desc: t.about.missionText.slice(0, 120) + "...",
              },
              {
                icon: Eye,
                label: "Our Vision",
                desc: "To be the leading educational institution recognized for producing well-rounded, globally competitive graduates.",
              },
              {
                icon: Heart,
                label: "Our Values",
                desc: "Integrity, excellence, innovation, inclusivity, and continuous improvement in everything we do.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card-elevated p-8 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--gradient-navy)" }}
                >
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-primary text-xl mb-3">
                  {item.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: "var(--gradient-navy)" }}
          >
            <div className="absolute right-8 top-8 text-white/5 font-display text-[120px] font-bold leading-none pointer-events-none select-none">
              47
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              {t.about.missionTitle}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
              {t.about.missionText}
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">{t.about.teachersTitle}</h2>
            <p className="section-subtitle">{t.about.teachersSubtitle}</p>
            <div
              className="w-16 h-1 rounded-full mx-auto mt-4"
              style={{ background: "var(--gradient-gold)" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((teacher, i) => (
              <TeacherCard key={teacher.id} teacher={teacher} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
