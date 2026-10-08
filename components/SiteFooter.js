"use client";

import Link from "next/link";
import { useTranslation } from "./LanguageProvider";

function Logo({ label }) {
  return (
    <Link
      className="lg self-start"
      href="/"
      aria-label={label}
      dir="ltr"
    >
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

export default function SiteFooter() {
  const { t } = useTranslation();
  const label = "m text-[11px] tracking-[.14em] text-blue mb-1";
  const link = "text-[15px] no-underline";
  return (
    <>
      <footer className="border-t border-ink">
        <div className="wrap pt-18 pb-8 flex flex-col gap-16">
          <div className="flex flex-wrap justify-between gap-12">
            <div className="flex-[1_1_320px] max-w-100 flex flex-col gap-5">
              <Logo label={t("header.homeLabel")} />
              <p className="mut text-[15px] leading-[1.6]">{t("common.tagline")}</p>
              <span className="m text-[11px] tracking-[.14em] text-blue">
                {t("footer.location")}
              </span>
            </div>
            <div className="flex flex-wrap gap-x-18 gap-y-14">
              <nav
                aria-label={t("footer.quickLinksLabel")}
                className="flex flex-col gap-3"
              >
                <span className={label}>{t("footer.quickLinks")}</span>
                <Link href="/about" className={link}>
                  {t("footer.about")}
                </Link>
                <Link href="/#projects" className={link}>
                  {t("footer.portfolio")}
                </Link>
                <Link href="/contact" className={link}>
                  {t("footer.contactUs")}
                </Link>
              </nav>
              <div className="flex flex-col gap-3">
                <span className={label}>{t("footer.contact")}</span>
                <a href="mailto:info@atooz.sa" className={link}>
                  info@atooz.sa
                </a>
                <a href="tel:+1234567890" className={link}>
                  +123 456 7890
                </a>
                <span className="text-[15px]">{t("common.address")}</span>
              </div>
              <div className="flex flex-col gap-3 max-w-60">
                <span className={label}>{t("footer.follow")}</span>
                <p className="mut text-sm leading-[1.6]">{t("footer.followText")}</p>
                <div className="flex gap-2">
                  <a className="soc" href="#" aria-label="LinkedIn">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6.5 8.5h-3v12h3zM5 3.5a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM20.5 13.3c0-3-1.6-4.9-4.2-4.9-1.5 0-2.5.8-3 1.6V8.5h-3v12h3v-6.3c0-1.5.6-2.6 2-2.6s1.9 1.1 1.9 2.6v6.3h3.3z" />
                    </svg>
                  </a>
                  <a className="soc" href="#" aria-label="X">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M4 4l16 16M20 4L4 20" />
                    </svg>
                  </a>
                  <a className="soc" href="#" aria-label="Instagram">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="4" y="4" width="16" height="16" rx="4.5" />
                      <circle cx="12" cy="12" r="3.6" />
                      <circle cx="16.8" cy="7.2" r=".6" fill="currentColor" />
                    </svg>
                  </a>
                  <a className="soc" href="#" aria-label="YouTube">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      aria-hidden="true"
                    >
                      <rect x="3" y="6" width="18" height="12" rx="3.5" />
                      <path d="M10.5 9.5l4 2.5-4 2.5z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mut flex flex-wrap justify-between gap-3 pt-5.5 border-t border-ink text-[13px]">
            <span>{t("footer.copyright")}</span>
            <span className="ar">{t("common.arabicTagline")}</span>
          </div>
        </div>
      </footer>
      <a className="top" href="#top" aria-label={t("footer.backToTop")}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </a>
    </>
  );
}
