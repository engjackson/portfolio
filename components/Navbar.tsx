"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Featured Work" },
  { href: "#acquired-taste", label: "Acquired Taste" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-30 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-zinc-200"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-0">
        <Link href="#top" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-zinc-900">
              Jackson Eng
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
              Product & AI Leader
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-zinc-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Jax-Eng-Resume.pdf"
            className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 md:hidden"
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col space-y-1 px-4 py-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-2 py-1.5 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Jax-Eng-Resume.pdf"
              className="mt-2 inline-flex justify-center rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-zinc-800 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}