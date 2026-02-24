import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const getBotResponse = (input: string, lang: string): string => {
  const q = input.toLowerCase();
  const responses: Record<string, Record<string, string>> = {
    schedule: {
      en: "School hours are Monday–Saturday, 8:00 AM to 2:00 PM. Each lesson is 45 minutes with 10-minute breaks.",
      uz: "Maktab ish vaqti dushanba–shanba, 8:00 dan 14:00 gacha. Har bir dars 45 daqiqa, tanaffus 10 daqiqa.",
      ru: "Школа работает с понедельника по субботу, с 8:00 до 14:00. Каждый урок 45 минут с 10-минутным перерывом.",
      tj: "Мактаб аз душанбе то шанбе, аз 8:00 то 14:00 кор мекунад. Ҳар дарс 45 дақиқа аст.",
    },
    admission: {
      en: "To apply, fill out the online admission form or call +998 99-616-44-56.",
      uz: "Ariza topshirish uchun onlayn shaklni to'ldiring yoki +998 99-616-44-56 ga qo'ng'iroq qiling.",
      ru: "Для поступления заполните форму или позвоните +998 99-616-44-56.",
      tj: "Барои дархост формаи онлайниро пур кунед ё ба +998 99-616-44-56 занг занед.",
    },
    contact: {
      en: "Call us at +998 99-616-44-56 or email info@school.edu.uz.",
      uz: "+998 99-616-44-56 ga qo'ng'iroq qiling yoki info@school.edu.uz ga yozing.",
      ru: "Звоните: +998 99-616-44-56 или пишите info@school.edu.uz.",
      tj: "+998 99-616-44-56 занг занед ё info@school.edu.uz нависед.",
    },
  };
  const defaults: Record<string, string> = {
    en: "I'm here to help! You can ask about: schedule, admission, or contact information.",
    uz: "Yordam beraman! So'rashingiz mumkin: dars jadvali, qabul, aloqa.",
    ru: "Я здесь, чтобы помочь! Спросите о расписании, поступлении или контактах.",
    tj: "Ман барои кӯмак омодаам! Дар бораи ҷадвал, қабул ё тамос бипурсед.",
  };
  if (
    q.includes("schedule") ||
    q.includes("time") ||
    q.includes("vaqt") ||
    q.includes("dars") ||
    q.includes("расписани") ||
    q.includes("ҷадвал")
  )
    return responses.schedule[lang] || responses.schedule.en;
  if (
    q.includes("admission") ||
    q.includes("apply") ||
    q.includes("qabul") ||
    q.includes("ariza") ||
    q.includes("приём") ||
    q.includes("қабул")
  )
    return responses.admission[lang] || responses.admission.en;
  if (
    q.includes("contact") ||
    q.includes("phone") ||
    q.includes("aloqa") ||
    q.includes("контакт") ||
    q.includes("тамос")
  )
    return responses.contact[lang] || responses.contact.en;
  return defaults[lang] || defaults.en;
};

export const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (open && messages.length === 0)
      setMessages([{ id: 1, text: t.chat.welcome, isBot: true }]);
  }, [open, t.chat.welcome]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input, isBot: false };
    const botMsg: Message = {
      id: Date.now() + 1,
      text: getBotResponse(input, language),
      isBot: true,
    };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="chat-widget mb-4 w-80 rounded-2xl overflow-hidden bg-card border border-border"
          >
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "var(--gradient-navy)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Bot size={16} className="text-navy-dark" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {t.chat.title}
                  </div>
                  <div className="text-white/60 text-xs">Online</div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <div className="h-72 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-thin bg-background/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2 ${msg.isBot ? "" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${msg.isBot ? "bg-primary" : "bg-yellow-400"}`}
                  >
                    {msg.isBot ? (
                      <Bot size={14} className="text-white" />
                    ) : (
                      <User size={14} className="text-navy-dark" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${msg.isBot ? "bg-card border border-border text-foreground rounded-tl-none" : "text-white rounded-tr-none"}`}
                    style={
                      !msg.isBot ? { background: "var(--gradient-navy)" } : {}
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex items-center gap-2 p-3 border-t border-border bg-card">
              <input
                className="input-field py-2 text-sm flex-1 min-w-0"
                placeholder={t.chat.placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110"
                style={{ background: "var(--gradient-navy)" }}
              >
                <Send size={15} className="text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white animate-pulse-gold"
        style={{
          background: "var(--gradient-navy)",
          boxShadow: "var(--shadow-gold)",
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
