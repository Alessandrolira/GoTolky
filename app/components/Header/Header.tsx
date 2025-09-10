import { easeInOut, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

export default function Header() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Bloqueia o scroll do body quando o menu está aberto
  useEffect(() => {
    if (open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Fecha com ESC e foca no primeiro link ao abrir
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open && firstLinkRef.current) firstLinkRef.current.focus();
  }, [open]);

  const links = [
    { href: "#produto", label: "Produto" },
    { href: "#missao", label: "Missão" },
    { href: "#quemsomos", label: "Quem Somos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50 items-center flex justify-center"
    >
      <div className="w-8/9">
        <div className="-mt-1 lg:mt-2 flex h-14 lg:h-16 items-center justify-between bg-[#7C7C7C]/40 backdrop-blur-lg border border-[#7E7E7E] shadow-lg rounded-b-xl lg:rounded-full px-3 lg:px-4">
          <Link href="/" className="shrink-0 -ml-1" aria-label="Ir para a home">
            <Image
              src="/GoTolkyLogo.png"
              alt="Logo GoTolky"
              width={90}
              height={32}
              priority
              className="-ml-2 lg:-ml-3"
            />
          </Link>

          {/* Navegação Desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex gap-8 xl:gap-16 xl:text-lg font-medium">
              {links.map((l) => (
                <li key={l.href} className="hover:text-[#008CFF] hover:transform-[scale(1.1)] duration-150">
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botão Mobile */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-controls="mobile-drawer"
            aria-expanded={open}
            className="lg:hidden p-1"
          >
            <IoIosMenu className="text-4xl" />
          </button>

          <Link
            href="/forms"
            className="hidden lg:inline-block bg-[#D9D9D9] text-black px-3 py-2 xl:px-4 xl:py-2 lg:rounded-[30px] xl:rounded-[20px] hover:bg-linear-to-r hover:from-[#008CFF] hover:to-[#0D1847] hover:text-white hover:transform-[scale(1.05)] duration-150 active:transform-[scale(0.9)]"
          >
            Assine Já
          </Link>
        </div>
      </div>

      {/* Overlay + Drawer Mobile */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              key="drawer"
              id="mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="fixed right-0 top-0 z-50 h-screen w-80 max-w-[85%] bg-[#747474] border-l border-[#8E8E8E] shadow-lg lg:hidden flex flex-col"
              initial={{ x: 320 }}
              animate={{ x: 0 }}
              exit={{ x: 320 }}
              transition={{ ease: easeInOut, duration: 0.5 }}
            >
              <div className="h-14 flex items-center justify-end px-2 border-b">
                <button className="p-2" onClick={() => setOpen(false)} aria-label="Fechar menu">
                  <IoIosClose className="text-4xl" />
                </button>
              </div>

              <nav className="p-4">
                <ul className="flex flex-col gap-3">
                  {links.map((l, i) => (
                    <li key={l.href} className="border-b text-lg">
                      <a
                        ref={i === 0 ? firstLinkRef : undefined}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block py-3 active:text-black active:bg-white duration-150"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                  <li className="border-b text-lg">
                    <Link href="/forms" onClick={() => setOpen(false)} className="block py-3">
                      Assine Já
                    </Link>
                  </li>
                </ul>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
