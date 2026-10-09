"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "../LanguageProvider";

const Arrow = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
    />
  </svg>
);

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="hero2" aria-label={t("hero.aria")}>
      <div className="bgw">
        <Image
          className="bg"
          src="/landing/landing.png"
          alt={t("hero.alt")}
          fill
          priority
          quality={100}
        />
      </div>
      <div className="wrap relative flex">
        <div className="copy flex flex-col gap-7.5">
          <div className="m fu flex flex-wrap items-center gap-4 text-[13px] tracking-[.12em]">
            <span className="w-10 h-px bg-ink" />
            <span className="text-blue">{t("hero.place")}</span>
            <span className="text-muted">24.71° N · 46.67° E</span>
          </div>
          <h1 className="h1 text-[length:clamp(42px,4.4vw,68px)]!">
            <span className="ln">
              <span className="[animation-delay:.1s]">{t("hero.l1")}</span>
            </span>
            <span className="ln">
              <span className="[animation-delay:.2s]">{t("hero.l2")}</span>
            </span>
            <span className="ln">
              <span className="[animation-delay:.3s]">
                {t("hero.l3a")}{" "}
                <span className="text-blue">
                  {t("hero.l3b")}
                </span>
              </span>
            </span>
            <span className="ln">
              <span className="[animation-delay:.4s]">{t("hero.l4")}</span>
            </span>
          </h1>
          <p className="mut fu max-w-135 text-[18px] leading-[1.6] [animation-delay:.55s]">
            {t("hero.text")}
          </p>
          <div className="fu pb-4 flex flex-wrap items-center gap-6 [animation-delay:.65s]">
            <a
              className="mag btn py-4! px-7! text-[15px]! bg-paper!"
              href="https://wa.me/201067504693"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fill" aria-hidden="true" />
              <span className="lbl">{t("common.letsTalk")}</span>
              <Arrow size={16} />
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 min-h-11.5 text-[15px] font-semibold no-underline border-b border-ink"
            >
              {t("hero.seeWork")} <Arrow size={14} />
            </Link>
          </div>
        </div>
      </div>
      <div className="hbar">
        <div className="wrap m flex flex-wrap justify-between items-center gap-x-8 gap-y-3 min-h-16 text-[11px] tracking-[.14em]">
          <a
            href="#clients"
            className="scrollcue flex items-center gap-3 no-underline min-h-11"
          >
            <span />
            {t("hero.scroll")}
          </a>
          <span>{t("hero.bar")}</span>
          <span className="ar tracking-normal text-[13px]">
            {t("common.arabicTagline")}
          </span>
        </div>
      </div>
    </section>
  );
}
