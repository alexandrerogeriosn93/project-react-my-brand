import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
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
    </div>
  );
}

export default App;
