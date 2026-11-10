import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock,
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-14 grid grid-cols-3 gap-4"
          >
            {["Velocidade", "Segurança", "Conversão"].map((label, i) => (
              <div
                className="bg-white[0.02] rounded-2xl border border-white/10 p-6"
                key={label}
              >
                <div className="flex items-center gap-3">
                  {i == 0 && <Zap className="size-5 text-emerald-400" />}
                  {i == 1 && <Shield className="size-5 text-sky-400" />}
                  {i == 2 && <Star className="size-5 text-amber-400" />}
                  <div className="font-semibold">{label}</div>
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Incidunt est odit assumenda quo quasi saepe cumque hic error,
                  ipsa aliquid, sequi laboriosam excepturi sit rerum! Sit
                  maiores eius deleniti eaque.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Tudo o que você precisa</h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laborum
          dolorum, voluptatum expedita accusantium, hic obcaecati reiciendis
          dolorem adipisci, earum recusandae eaque eos cumque mollitia quia
          provident quod harum esse.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Star className="size-5 text-amber-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Zap className="size-5 text-emerald-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Shield className="size-5 text-sky-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Star className="size-5 text-amber-400" />,
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/2 p-6"
            >
              <div className="flex items-center gap-3">
                {f.icon}
                <p className="font-semibold">{f.title}</p>
              </div>
              <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Quem usou, aprovou</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center gap-2 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-slate-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum non nisi soluta sequi perspiciatis inventore. In,
                libero ipsam nostrum earum adipisci ipsa laudantium eveniet a
                magni natus facere odio minima.
              </p>
              <footer className="mt-3 text-sm text-slate-400">
                - Nome do Cliente
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Plano único, Sem Complicação</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              dolores, iste itaque, cumque unde ab recusandae asperiores
              perferendis officiis incidunt delectus ratione corrupti optio non
              possimus. Doloribus soluta voluptas qui.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Benefício 1
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Benefício 2
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> Benefício 3
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/2 p-8">
            <div className="text-sm text-slate-400">A partir de</div>
            <div className="mt-2 text-5xl font-extrabold">R$199,90</div>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-300">
              <Clock className="size-4 text-amber-400" />
              <p>Somente hoje!</p>
            </div>
            <button
              href="#"
              className="mt-6 cursor-pointer rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium transition hover:bg-fuchsia-800"
            >
              Comprar agora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
