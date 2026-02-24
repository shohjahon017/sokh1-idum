import { useState, useMemo, useRef } from "react";
// import { useLanguage } from "@/contexts/LanguageContext";
import { books, bookCategories, grades, Book } from "@/data/books";
import {
  Search,
  BookOpen,
  CheckCircle,
  XCircle,
  Filter,
  Download,
  Send,
  Star,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BookMarked,
  ExternalLink,
  Heart,
  SortAsc,
  SortDesc,
  Grid,
  List,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ViewMode = "grid" | "list";
type SortMode = "title" | "rating" | "downloads" | "grade";

export default function Library() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [gradeFilter, setGradeFilter] = useState<number | "">("");
  const [availFilter, setAvailFilter] = useState<
    "all" | "available" | "unavailable"
  >("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [sortMode, setSortMode] = useState<SortMode>("rating");
  const [sortDesc, setSortDesc] = useState(true);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [showFavOnly, setShowFavOnly] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    let result = books.filter((book) => {
      const q = search.toLowerCase();
      const matchSearch =
        !search ||
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.subject.toLowerCase().includes(q);
      const matchCategory = !category || book.category === category;
      const matchGrade = gradeFilter === "" || book.grade === gradeFilter;
      const matchAvail =
        availFilter === "all"
          ? true
          : availFilter === "available"
            ? book.available
            : !book.available;
      const matchFav = !showFavOnly || favorites.has(book.id);
      return (
        matchSearch && matchCategory && matchGrade && matchAvail && matchFav
      );
    });

    result.sort((a, b) => {
      let val = 0;
      if (sortMode === "title") val = a.title.localeCompare(b.title);
      else if (sortMode === "rating") val = (a.rating || 0) - (b.rating || 0);
      else if (sortMode === "downloads")
        val = (a.downloadCount || 0) - (b.downloadCount || 0);
      else if (sortMode === "grade") val = a.grade - b.grade;
      return sortDesc ? -val : val;
    });
    return result;
  }, [
    search,
    category,
    gradeFilter,
    availFilter,
    sortMode,
    sortDesc,
    showFavOnly,
    favorites,
  ]);

  const toggleFav = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const stats = {
    total: books.length,
    available: books.filter((b) => b.available).length,
    totalDownloads: books.reduce((s, b) => s + (b.downloadCount || 0), 0),
    subjects: bookCategories.length,
  };

  const topBooks = [...books]
    .sort((a, b) => (b.downloadCount || 0) - (a.downloadCount || 0))
    .slice(0, 5);

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setGradeFilter("");
    setAvailFilter("all");
    setShowFavOnly(false);
    searchRef.current?.focus();
  };

  const hasFilters =
    search ||
    category ||
    gradeFilter !== "" ||
    availFilter !== "all" ||
    showFavOnly;

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(215 80% 12%), hsl(215 55% 22%))",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${80 + i * 60}px`,
                height: `${80 + i * 60}px`,
                left: `${5 + i * 16}%`,
                top: `${10 + (i % 3) * 30}%`,
                background: i % 2 === 0 ? "hsl(43 92% 50%)" : "white",
              }}
              animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 6 + i, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5 text-sm font-semibold bg-white/10 border border-white/20 text-white backdrop-blur-sm">
              <BookMarked size={16} className="text-yellow-400" />
              Telegram orqali bepul yuklab oling
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Maktab{" "}
              <span
                style={{
                  background: "var(--gradient-gold)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Kutubxonasi
              </span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              1–11 sinf darsliklari. Barcha kitoblar{" "}
              <strong className="text-yellow-400">@Maktab_darslik_uz</strong>{" "}
              Telegram kanalida bepul mavjud!
            </p>
            {/* Big search */}
            <div className="max-w-2xl mx-auto relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              />
              <input
                ref={searchRef}
                className="w-full rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm px-5 pl-12 py-4 text-white placeholder-white/40 text-lg outline-none focus:border-yellow-400 transition-all"
                placeholder="Darslik qidirish... (masalan: Matematika 9)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                icon: BookOpen,
                label: "Jami kitoblar",
                value: stats.total,
                color: "text-yellow-400",
              },
              {
                icon: CheckCircle,
                label: "Mavjud",
                value: stats.available,
                color: "text-emerald-400",
              },
              {
                icon: Download,
                label: "Yuklashlar",
                value: `${(stats.totalDownloads / 1000).toFixed(0)}K+`,
                color: "text-blue-400",
              },
              {
                icon: GraduationCap,
                label: "Fanlar",
                value: stats.subjects,
                color: "text-pink-400",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-4 text-center bg-white/10 backdrop-blur-sm border border-white/15"
              >
                <s.icon size={24} className={`mx-auto mb-2 ${s.color}`} />
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Top Downloads ── */}
      <section className="py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={18} className="text-yellow-500" />
            <span className="font-semibold text-foreground">
              Eng ko'p yuklanganlar
            </span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {topBooks.map((book, i) => (
              <motion.button
                key={book.id}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedBook(book)}
                className="flex-shrink-0 flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-left hover:border-yellow-400 transition-colors group"
              >
                <span className="text-2xl font-display font-bold text-muted-foreground/40 w-6">
                  #{i + 1}
                </span>
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${book.color} flex items-center justify-center flex-shrink-0`}
                >
                  <BookOpen size={14} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary truncate max-w-[140px]">
                    {book.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {book.downloadCount?.toLocaleString()} yuklab olindi
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="py-5 bg-card border-b border-border sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4 space-y-3">
          {/* Row 1: grade filter pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
            <button
              onClick={() => setGradeFilter("")}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${gradeFilter === "" ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/50"}`}
            >
              Barcha sinflar
            </button>
            {grades.map((g) => (
              <button
                key={g}
                onClick={() => setGradeFilter(g === gradeFilter ? "" : g)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${gradeFilter === g ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/50"}`}
              >
                {g}-sinf
              </button>
            ))}
          </div>

          {/* Row 2: category + sort + view */}
          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <Filter
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <select
                className="input-field pl-8 pr-3 py-2 text-sm min-w-40 h-auto"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Barcha fanlar</option>
                {bookCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {(["all", "available", "unavailable"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setAvailFilter(f)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border ${availFilter === f ? "border-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/50"}`}
                style={
                  availFilter === f
                    ? { background: "var(--gradient-navy)" }
                    : {}
                }
              >
                {f === "all"
                  ? "Barchasi"
                  : f === "available"
                    ? "✓ Mavjud"
                    : "✗ Berilgan"}
              </button>
            ))}

            <button
              onClick={() => setShowFavOnly(!showFavOnly)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all border flex items-center gap-1.5 ${showFavOnly ? "border-rose-400 bg-rose-50 text-rose-600" : "border-border bg-background text-foreground hover:border-rose-300"}`}
            >
              <Heart
                size={14}
                className={showFavOnly ? "fill-rose-500 text-rose-500" : ""}
              />
              Sevimlilar {favorites.size > 0 && `(${favorites.size})`}
            </button>

            <div className="ml-auto flex items-center gap-2">
              {/* Sort */}
              <select
                className="input-field py-2 text-sm h-auto"
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
              >
                <option value="rating">Reyting</option>
                <option value="downloads">Yuklab olish</option>
                <option value="title">Nom</option>
                <option value="grade">Sinf</option>
              </select>
              <button
                onClick={() => setSortDesc(!sortDesc)}
                className="p-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors"
              >
                {sortDesc ? <SortDesc size={16} /> : <SortAsc size={16} />}
              </button>
              {/* View toggle */}
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg border transition-colors ${viewMode === "grid" ? "border-primary bg-primary text-white" : "border-border bg-background hover:bg-muted"}`}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg border transition-colors ${viewMode === "list" ? "border-primary bg-primary text-white" : "border-border bg-background hover:bg-muted"}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>

          {/* Results count + clear */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              <span className="font-bold text-primary text-base">
                {filtered.length}
              </span>{" "}
              ta kitob topildi
            </span>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-muted-foreground hover:text-destructive flex items-center gap-1 transition-colors"
              >
                <X size={14} /> Filtrlarni tozalash
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Books Grid/List ── */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <BookOpen
                size={56}
                className="mx-auto mb-4 text-muted-foreground/30"
              />
              <p className="text-xl text-muted-foreground mb-2">
                Kitob topilmadi
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Filtrlarni o'zgartirib ko'ring
              </p>
              <button onClick={clearFilters} className="btn-primary px-6">
                Barcha kitoblar
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <AnimatePresence>
                {filtered.map((book, i) => (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: Math.min(i * 0.03, 0.3) }}
                    className="book-card flex flex-col cursor-pointer group"
                    onClick={() => setSelectedBook(book)}
                  >
                    {/* Cover */}
                    <div
                      className={`relative book-cover h-40 bg-gradient-to-br ${book.color} flex items-end justify-between p-3 overflow-hidden`}
                    >
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 8px)",
                        }}
                      />
                      <div>
                        <div className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">
                          {book.grade}-sinf
                        </div>
                        <div className="text-white font-bold text-sm leading-tight drop-shadow">
                          {book.subject}
                        </div>
                      </div>
                      {/* Fav button */}
                      <button
                        onClick={(e) => toggleFav(book.id, e)}
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors z-10"
                      >
                        <Heart
                          size={14}
                          className={
                            favorites.has(book.id)
                              ? "fill-rose-400 text-rose-400"
                              : "text-white"
                          }
                        />
                      </button>
                      {/* Download badge */}
                      {book.downloadCount && book.downloadCount > 1000 && (
                        <div className="absolute top-2 left-2 bg-yellow-400 text-navy-dark text-xs font-bold px-2 py-0.5 rounded-full">
                          HOT 🔥
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div className="p-3 flex flex-col flex-1">
                      <h3 className="font-semibold text-foreground text-sm leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-muted-foreground text-xs mb-2">
                        {book.author}
                      </p>
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={10}
                            className={
                              j < Math.floor(book.rating || 0)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground/30"
                            }
                          />
                        ))}
                        <span className="text-xs text-muted-foreground ml-1">
                          {book.rating}
                        </span>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 ${book.available ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}
                        >
                          {book.available ? (
                            <>
                              <CheckCircle size={10} /> Mavjud
                            </>
                          ) : (
                            <>
                              <XCircle size={10} /> Berilgan
                            </>
                          )}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {book.downloadCount?.toLocaleString()} 📥
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            /* List view */
            <div className="space-y-2">
              <AnimatePresence>
                {filtered.map((book, i) => (
                  <motion.div
                    key={book.id}
                    layout
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: Math.min(i * 0.02, 0.2) }}
                    className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 cursor-pointer hover:border-primary/40 hover:shadow-md transition-all group"
                    onClick={() => setSelectedBook(book)}
                  >
                    <div
                      className={`w-12 h-14 rounded-lg bg-gradient-to-br ${book.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <BookOpen size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {book.title}
                        </h3>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={10}
                              className={
                                j < Math.floor(book.rating || 0)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-muted-foreground/20"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-0.5">
                        {book.author} · {book.grade}-sinf · {book.pages} bet
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 ${book.available ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}
                      >
                        {book.available ? "Mavjud" : "Berilgan"}
                      </span>
                      <button
                        onClick={(e) => toggleFav(book.id, e)}
                        className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                      >
                        <Heart
                          size={16}
                          className={
                            favorites.has(book.id)
                              ? "fill-rose-400 text-rose-400"
                              : "text-muted-foreground"
                          }
                        />
                      </button>
                      <a
                        href={book.telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-gold px-3 py-2 text-xs flex items-center gap-1.5"
                      >
                        <Send size={13} /> Telegram
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* ── Telegram CTA Banner ── */}
      <section className="py-12" style={{ background: "var(--gradient-navy)" }}>
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4">📚</div>
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Barcha darsliklar Telegramda!
            </h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              1-sinfdan 11-sinfgacha barcha darsliklarni{" "}
              <strong className="text-yellow-400">@Maktab_darslik_uz</strong>{" "}
              kanalimizdan bepul yuklab oling
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://t.me/Maktab_darslik_uz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2 text-lg px-8 py-4"
              >
                <Send size={20} /> Telegram kanalga o'tish
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="text-white/40 text-sm mt-4">
              Kanal: @Maktab_darslik_uz · Bepul · Reklamsiz
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Book Detail Modal ── */}
      <AnimatePresence>
        {selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedBook(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-br ${selectedBook.color} p-8 relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 10px)",
                  }}
                />
                <button
                  onClick={() => setSelectedBook(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="relative z-10">
                  <div className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">
                    {selectedBook.grade}-sinf · {selectedBook.subject}
                  </div>
                  <h2 className="font-display text-2xl font-bold text-white mb-1">
                    {selectedBook.title}
                  </h2>
                  <p className="text-white/70 text-sm">{selectedBook.author}</p>
                </div>
              </div>
              {/* Body */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(selectedBook.rating || 0)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/20"
                        }
                      />
                    ))}
                  </div>
                  <span className="font-bold text-lg text-foreground">
                    {selectedBook.rating}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    · {selectedBook.downloadCount?.toLocaleString()} yuklab
                    olindi
                  </span>
                </div>
                {/* Description */}
                {selectedBook.description && (
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {selectedBook.description}
                  </p>
                )}
                {/* Meta */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Yil", value: selectedBook.year },
                    { label: "Betlar", value: `${selectedBook.pages} bet` },
                    {
                      label: "Holat",
                      value: selectedBook.available ? "✓ Mavjud" : "✗ Yo'q",
                    },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-muted/50 p-3 text-center"
                    >
                      <div className="text-xs text-muted-foreground mb-1">
                        {m.label}
                      </div>
                      <div className="font-semibold text-foreground text-sm">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Navigation between books */}
                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => {
                      const idx = filtered.findIndex(
                        (b) => b.id === selectedBook.id,
                      );
                      if (idx > 0) setSelectedBook(filtered[idx - 1]);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:bg-muted transition-colors disabled:opacity-30"
                    disabled={
                      filtered.findIndex((b) => b.id === selectedBook.id) === 0
                    }
                  >
                    <ChevronLeft size={16} /> Oldingi
                  </button>
                  <button
                    onClick={() => {
                      const idx = filtered.findIndex(
                        (b) => b.id === selectedBook.id,
                      );
                      if (idx < filtered.length - 1)
                        setSelectedBook(filtered[idx + 1]);
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:bg-muted transition-colors disabled:opacity-30"
                    disabled={
                      filtered.findIndex((b) => b.id === selectedBook.id) ===
                      filtered.length - 1
                    }
                  >
                    Keyingi <ChevronRight size={16} />
                  </button>
                </div>
                {/* Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={(e) => toggleFav(selectedBook.id, e as any)}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${favorites.has(selectedBook.id) ? "border-rose-300 bg-rose-50 text-rose-600" : "border-border bg-background hover:bg-muted text-foreground"}`}
                  >
                    <Heart
                      size={16}
                      className={
                        favorites.has(selectedBook.id) ? "fill-rose-500" : ""
                      }
                    />
                    {favorites.has(selectedBook.id)
                      ? "Sevimlilarda"
                      : "Sevimli"}
                  </button>
                  <a
                    href={selectedBook.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
                  >
                    <Send size={16} />
                    Telegramdan yuklab olish
                    <ExternalLink size={14} />
                  </a>
                </div>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Telegram kanal: <strong>@Maktab_darslik_uz</strong>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
