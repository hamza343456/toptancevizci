"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/config";
import { WhatsAppButton } from "./WhatsAppButton";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 text-walnut-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-leaf-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-walnut-900 text-cream-50"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3C7.5 3 4.5 6.8 4.5 11.5C4.5 16.5 7.8 20.5 12 21C16.2 20.5 19.5 16.5 19.5 11.5C19.5 6.8 16.5 3 12 3Z" />
              <path d="M12 3V21" />
              <path d="M8.5 8.5C9.7 9.2 10.8 9.5 12 9.5C13.2 9.5 14.3 9.2 15.5 8.5" />
              <path d="M8 14.5C9.3 15.2 10.6 15.5 12 15.5C13.4 15.5 14.7 15.2 16 14.5" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-tight text-walnut-950">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-walnut-600">
              İstanbul Ceviz Tedariki
            </span>
          </span>
        </Link>

        {/* Masaüstü Menü */}
        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  "rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-cream-100 text-walnut-950"
                    : "text-walnut-700 hover:bg-cream-100/70 hover:text-walnut-950",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Masaüstü Arama ve WhatsApp Teklif Butonları */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={SITE_CONFIG.contact.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-lg border border-cream-300 bg-white px-3 py-2 text-sm font-medium text-walnut-900 transition-colors hover:bg-cream-100"
            aria-label={`Direkt ara: ${SITE_CONFIG.contact.phoneDisplay}`}
          >
            <Phone className="h-3.5 w-3.5 text-leaf-700" aria-hidden="true" />
            <span>{SITE_CONFIG.contact.phoneDisplay}</span>
          </a>
          <WhatsAppButton label="Teklif Al" size="sm" />
        </div>

        {/* Mobil Menü Butonu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={SITE_CONFIG.contact.phoneHref}
            className="inline-flex items-center justify-center rounded-lg border border-cream-300 bg-white p-2 text-walnut-800 transition-colors hover:bg-cream-100"
            aria-label={`Direkt ara: ${SITE_CONFIG.contact.phoneDisplay}`}
          >
            <Phone className="h-5 w-5 text-leaf-700" aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg border border-cream-300 bg-white p-2 text-walnut-800 transition-colors hover:bg-cream-100"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobil Menü Paneli */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobil menü"
          className="border-t border-cream-200 bg-cream-50 px-4 pb-5 pt-3 lg:hidden"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={[
                      "block rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                      isActive
                        ? "bg-cream-100 text-walnut-950"
                        : "text-walnut-700 hover:bg-cream-100/70 hover:text-walnut-950",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 space-y-2.5 border-t border-cream-200 pt-4">
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-walnut-300 bg-white px-4 py-2.5 text-sm font-medium text-walnut-900 transition-colors hover:bg-cream-100"
            >
              <Phone className="h-4 w-4 text-leaf-700" aria-hidden="true" />
              <span>Hemen Ara: {SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <WhatsAppButton
              label="WhatsApp'tan Teklif Al"
              size="md"
              fullWidth
            />
          </div>
        </nav>
      )}
    </header>
  );
}
