import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Send,
  User,
  Phone,
  BookOpen,
  MessageSquare,
  Calendar,
} from "lucide-react";

interface FormData {
  name: string;
  age: string;
  grade: string;
  phone: string;
  message: string;
}
interface FormErrors {
  name?: string;
  age?: string;
  grade?: string;
  phone?: string;
}

const grades = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

export default function Admission() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>({
    name: "",
    age: "",
    grade: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = t.admission.required;
    if (!form.age.trim()) e.age = t.admission.required;
    if (!form.grade) e.grade = t.admission.required;
    if (!form.phone.trim()) e.phone = t.admission.required;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="card-elevated p-12 text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-emerald-600" />
          </div>
          <h2 className="font-display text-2xl font-bold text-primary mb-3">
            {t.admission.successTitle}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {t.admission.successText}
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ name: "", age: "", grade: "", phone: "", message: "" });
            }}
            className="btn-primary mt-8 mx-auto"
          >
            Back to Form
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              {t.admission.pageTitle}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t.admission.pageSubtitle}
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="card-elevated p-8 md:p-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {[
                  {
                    key: "name" as keyof FormData,
                    label: t.admission.studentName,
                    icon: User,
                    placeholder: t.admission.namePlaceholder,
                    type: "text",
                  },
                  {
                    key: "age" as keyof FormData,
                    label: t.admission.studentAge,
                    icon: Calendar,
                    placeholder: t.admission.agePlaceholder,
                    type: "number",
                  },
                  {
                    key: "phone" as keyof FormData,
                    label: t.admission.parentPhone,
                    icon: Phone,
                    placeholder: t.admission.phonePlaceholder,
                    type: "tel",
                  },
                ].map((f) => (
                  <div
                    key={f.key}
                    className={f.key === "phone" ? "sm:col-span-2" : ""}
                  >
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      {f.label}
                    </label>
                    <div className="relative">
                      <f.icon
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, [f.key]: e.target.value }))
                        }
                        className={`input-field pl-9 ${errors[f.key as keyof FormErrors] ? "border-destructive" : ""}`}
                      />
                    </div>
                    {errors[f.key as keyof FormErrors] && (
                      <p className="text-destructive text-xs mt-1">
                        {errors[f.key as keyof FormErrors]}
                      </p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    {t.admission.grade}
                  </label>
                  <div className="relative">
                    <BookOpen
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                    <select
                      value={form.grade}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, grade: e.target.value }))
                      }
                      className={`input-field pl-9 appearance-none cursor-pointer ${errors.grade ? "border-destructive" : ""}`}
                    >
                      <option value="">{t.admission.gradePlaceholder}</option>
                      {grades.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.grade && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.grade}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  {t.admission.message}
                </label>
                <div className="relative">
                  <MessageSquare
                    size={16}
                    className="absolute left-3 top-3 text-muted-foreground"
                  />
                  <textarea
                    rows={4}
                    placeholder={t.admission.messagePlaceholder}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="input-field pl-9 resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn-gold w-full text-base py-4 flex items-center justify-center gap-2"
              >
                <Send size={18} /> {t.admission.submit}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
