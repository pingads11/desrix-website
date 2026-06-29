"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/case-studies/", label: "Case Studies" },
  { href: "/about/", label: "About" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (headerRef.current?.contains(target)) return;
      setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="fixed top-2 z-50 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl border border-gray-300 bg-white px-3 shadow-lg shadow-black/10">
          <div className="flex flex-1 items-center gap-3">
            <Logo />
            <span className="hidden text-sm font-bold text-gray-900 sm:block">
              DesRIX
            </span>
          </div>

          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ul className="hidden flex-1 items-center justify-end gap-3 xl:flex">
            <li>
              <Link
                href="/contact/"
                className="btn-sm border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact/#consultation"
                className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
              >
                Get Started
              </Link>
            </li>
          </ul>

          <button
            ref={toggleRef}
            type="button"
            aria-label="Toggle main menu"
            aria-expanded={open}
            aria-controls="main-mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
          >
            {open ? (
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="main-mobile-nav"
          className={open ? "mt-2 rounded-2xl border border-gray-200 bg-white/98 p-3 shadow-lg shadow-black/10 md:hidden" : "hidden"}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100 hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="mt-2 btn-sm border border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50"
            >
              Contact Us
            </Link>
            <Link
              href="/contact/#consultation"
              onClick={() => setOpen(false)}
              className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
