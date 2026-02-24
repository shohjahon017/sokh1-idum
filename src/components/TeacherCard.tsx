import { Teacher } from "@/data/teachers";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Calendar, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface TeacherCardProps {
  teacher: Teacher;
  index: number;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
const avatarColors = [
  "from-blue-600 to-blue-800",
  "from-teal-600 to-teal-800",
  "from-violet-600 to-violet-800",
  "from-rose-600 to-rose-800",
  "from-amber-600 to-amber-800",
  "from-emerald-600 to-emerald-800",
  "from-cyan-600 to-cyan-800",
  "from-indigo-600 to-indigo-800",
];

export const TeacherCard = ({ teacher, index }: TeacherCardProps) => {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="card-elevated overflow-hidden group"
    >
      <div className="h-1.5" style={{ background: "var(--gradient-gold)" }} />
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-xl font-bold text-white flex-shrink-0 shadow-lg`}
          >
            {getInitials(teacher.name)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-primary text-lg leading-tight mb-1">
              {teacher.name}
            </h3>
            <span className="badge-gold inline-flex items-center gap-1 text-xs">
              <BookOpen size={11} />
              {teacher.subject}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-primary/60 flex-shrink-0" />
            <span>
              {t.about.born}: {teacher.date}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-primary/60 flex-shrink-0" />
            <span className="font-mono">{teacher.tel}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {teacher.bio}
        </p>
      </div>
    </motion.div>
  );
};
