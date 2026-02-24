# Ilm Markazi - School #47

A modern school website built with React, TypeScript, Tailwind CSS, and Vite.

## Features
- Multi-language support (Uzbek, Russian, English, Tajik)
- Responsive design
- AI Chatbot assistant
- Library catalog
- Online admission form
- Photo gallery with lightbox
- Teacher profiles

## Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- React Router DOM
- Radix UI components
- Lucide Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure
```
src/
├── components/       # Reusable components
│   ├── ui/          # UI primitives (shadcn/ui)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ChatBot.tsx
│   └── TeacherCard.tsx
├── contexts/        # React contexts
│   └── LanguageContext.tsx
├── data/            # Static data
│   ├── teachers.ts
│   ├── books.ts
│   ├── gallery.ts
│   └── translations.ts
├── hooks/           # Custom hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/             # Utilities
│   └── utils.ts
├── pages/           # Page components
│   ├── Index.tsx
│   ├── About.tsx
│   ├── Library.tsx
│   ├── Admission.tsx
│   ├── Gallery.tsx
│   └── NotFound.tsx
└── App.tsx
```

## Languages
Switch between UZ / RU / EN / TJ using the language switcher in the navbar.
