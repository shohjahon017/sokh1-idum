import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { key: "statsStudents", value: "150+", icon: "🎓" },
  { key: "statsTeachers", value: "15", icon: "👨‍🏫" },
  { key: "statsYears", value: "17", icon: "🏆" },
  { key: "statsGrades", value: "11", icon: "📚" },
];
const featureIcons = [BookOpen, Users, Award, Shield];

export default function Index() {
  const { t } = useLanguage();
  const features = [
    { title: t.home.feature1Title, desc: t.home.feature1Desc },
    { title: t.home.feature2Title, desc: t.home.feature2Desc },
    { title: t.home.feature3Title, desc: t.home.feature3Desc },
    { title: t.home.feature4Title, desc: t.home.feature4Desc },
  ];

  return (
    <div>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "hsl(215 70% 15%)" }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, hsl(43 92% 50%), transparent 50%), radial-gradient(circle at 80% 20%, hsl(215 55% 40%), transparent 50%)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6 bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                Specialized School #1 · Sokh, Fergana
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {t.home.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed"
            >
              {t.home.heroSubtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/about" className="btn-gold">
                {t.home.heroBtn} <ArrowRight size={18} />
              </Link>
              <Link
                to="/admission"
                className="btn-primary border border-white/30"
              >
                {t.home.admissionBtn}
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-3xl font-display font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">
                  {(t.home as Record<string, string>)[stat.key]}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="badge-gold mb-4">Est. 2009</div>
              <h2 className="section-title mb-4">{t.home.welcomeTitle}</h2>
              <p className="section-subtitle text-base leading-relaxed mb-8">
                {t.home.welcomeText}
              </p>
              <Link to="/about" className="btn-primary inline-flex">
                {t.nav.about} <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  label: "Academic Excellence",
                  value: "98%",
                  sub: "Graduation Rate",
                },
                {
                  label: "Student Satisfaction",
                  value: "4.9/5",
                  sub: "Average Rating",
                },
                {
                  label: "Olympiad Winners",
                  value: "150+",
                  sub: "Regional & National",
                },
                {
                  label: "Years in Education",
                  value: "17+",
                  sub: "Since 2009",
                },
              ].map((item, i) => (
                <div key={i} className="card-elevated p-5 text-center">
                  <div className="text-2xl font-display font-bold text-primary">
                    {item.value}
                  </div>
                  <div className="font-semibold text-foreground text-sm mt-1">
                    {item.label}
                  </div>
                  <div className="text-muted-foreground text-xs mt-0.5">
                    {item.sub}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "hsl(215 70% 20%)" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
              {t.home.featuresTitle}
            </h2>
            <div
              className="w-16 h-1 rounded-full mx-auto"
              style={{ background: "var(--gradient-gold)" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl text-center group cursor-default transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "hsl(215 55% 28%)",
                    border: "1px solid hsl(215 50% 35%)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <Icon size={22} className="text-navy-dark" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mb-4">Ready to Join Our School?</h2>
            <p className="section-subtitle mb-8 max-w-lg mx-auto">
              Take the first step towards an excellent education. Apply online
              today and secure your child's future.
            </p>
            <Link to="/admission" className="btn-gold text-lg px-8 py-4">
              {t.home.admissionBtn} <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
