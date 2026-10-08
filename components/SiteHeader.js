"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "./LanguageProvider";

const NAV = [
  { href: "/", key: "nav.home" },
  { href: "/about", key: "nav.about" },
  { href: "/vision", key: "nav.vision" },
  { href: "/#projects", key: "nav.portfolio" },
  { href: "/contact", key: "nav.contact" },
];

function Logo({ label }) {
  return (
    <Link className="lg" href="/" aria-label={label} dir="ltr">
      A2
      <span className="z">
        Z
        <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#FFFFFF"
            d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
          />
        </svg>
      </span>
    </Link>
  );
}

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t, lang, changeLanguage } = useTranslation();

  return (
    <header className="sticky top-0 z-10 bg-paper border-b border-ink">
      <div className="wrap flex items-center justify-between gap-6 h-19.5">
        <Logo label={t("header.homeLabel")} />
        <nav
          className="navlinks flex items-center gap-9"
          aria-label={t("header.mainNav")}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              className={`nl${isActive(pathname, item.href) ? " on" : ""}`}
              href={item.href}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            className="mag btn"
            href="https://wa.me/201067504693"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="fill" aria-hidden="true" />
            <span className="lbl">{t("header.letsTalk")}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
              />
            </svg>
          </a>
          <button
            type="button"
            className=" btn bg-transparent py-0! px-3.5! h-11.5 cursor-pointer"
            lang={lang === "en" ? "ar" : "en"}
            aria-label={t("header.switchLanguage")}
            onClick={() => changeLanguage(lang === "en" ? "ar" : "en")}
          >
            {t("header.languageButton")}
          </button>
          <button
            className="mbtn w-11.5 h-11.5 items-center justify-center border border-ink bg-transparent text-ink cursor-pointer"
            type="button"
            aria-label={open ? t("header.closeMenu") : t("header.openMenu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`mnav${open ? " open" : ""}`} aria-label={t("header.mobileNav")}>
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {t(item.key)}
          </Link>
        ))}
      </nav>
      <div className="prog" aria-hidden="true" />
    </header>
  );
}
