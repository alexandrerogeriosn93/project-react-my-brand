import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Menu,
  Shield,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testmonials", label: "Depoimentos" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha marca</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition hover:text-fuchsia-300"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden">
            <div className="fixed bg-black/60" onClick={() => setOpen(false)}>
              <div className="fixed top-0 right-0 h-full w-80 border-l border-white/10 bg-slate-900 p-6">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="size-5 text-fuchsia-400" />
                    <span className="font-semibold">Minha marca</span>
                  </div>
                  <button
                    className="rounded-lg p-2"
                    onClick={() => setOpen(false)}
                  >
                    <X className="size-5" />
                  </button>
                </div>
                <div className="flex w-90 flex-col gap-4 bg-slate-900 p-4">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-slate-200"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold"
          >
            Acelere sua presença online com uma landing{" "}
            <span className="bg-linear-to-r from-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
              simples e eficaz
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-4 max-w-2xl text-slate-600"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio est
            nesciunt inventore, facilis possimus magni consequatur laboriosam.
            Incidunt ut dignissimos, facilis sint, perferendis labore, corrupti
            maiores aliquam rem voluptates fuga!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-8 flex flex-row gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium transition hover:bg-fuchsia-700"
            >
              Comece Agora <ArrowRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-6 py-3 font-medium transition hover:bg-white/5"
            >
              Ver Recursos
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
