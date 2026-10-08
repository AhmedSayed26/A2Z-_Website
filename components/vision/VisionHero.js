"use client";

import { useTranslation } from "../LanguageProvider";

export default function VisionHero() {
  const { t } = useTranslation();
  return (
    <section className="grid-bg pt-22 pb-28 border-b border-ink">
      <div className="wrap flex flex-wrap gap-14 items-center">
        <div className="flex-[1.5_1_600px] min-w-0 flex flex-col gap-8">
          <div className="m fu flex flex-wrap items-center gap-4 text-[13px] tracking-[.12em]">
            <span>{t("vision.hero.eyebrow")}</span>
            <span className="w-10 h-px bg-ink" />
            <span className="ar text-blue tracking-normal">
              {t("vision.hero.eyebrowAlt")}
            </span>
          </div>
          <h1 className="h1">
            <span className="ln">
              <span className="[animation-delay:.05s]">{t("vision.hero.l1")}</span>
            </span>
            <span className="ln">
              <span className="[animation-delay:.15s]">{t("vision.hero.l2")}</span>
            </span>
            <span className="ln">
              <span className="[animation-delay:.25s] text-blue">
                {t("vision.hero.l3")}
              </span>
            </span>
            <span className="ln">
              <span className="[animation-delay:.35s]">{t("vision.hero.l4")}</span>
            </span>
          </h1>
        </div>
        <div
          className="dial fu flex-none relative w-90 h-90 mx-auto [animation-delay:.4s]"
          aria-hidden="true"
        >
          <svg
            className="spin r absolute inset-0"
            width="360"
            height="360"
            viewBox="0 0 360 360"
            fill="none"
          >
            <circle cx="180" cy="180" r="176" stroke="#0B0F1F" />
            <g stroke="#0B0F1F">
              <path d="M180 4v16M180 340v16M4 180h16M340 180h16" />
            </g>
            <circle
              cx="180"
              cy="180"
              r="160"
              stroke="#0B0F1F"
              strokeDasharray="1 9"
            />
          </svg>
          <svg
            className="spin absolute inset-0"
            width="360"
            height="360"
            viewBox="0 0 360 360"
          >
            <defs>
              <path
                id="vis-c"
                d="M180 180 m-130 0 a130 130 0 1 1 260 0 a130 130 0 1 1 -260 0"
              />
            </defs>
            <text
              fontFamily="IBM Plex Mono, monospace"
              fontSize="12"
              letterSpacing="5"
              fill="#0B0F1F"
            >
              <textPath href="#vis-c">
                {t("vision.hero.ring")}
              </textPath>
            </text>
          </svg>
          <svg
            className="absolute inset-0"
            width="360"
            height="360"
            viewBox="0 0 360 360"
            fill="none"
          >
            <circle
              cx="180"
              cy="180"
              r="96"
              stroke="#0B0F1F"
              strokeOpacity=".35"
            />
            <circle cx="180" cy="180" r="60" stroke="#2F49E0" />
          </svg>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11.5 h-14.5 bg-blue text-white flex items-center justify-center font-display! font-stretch-68% font-black text-[56px] leading-[.8]">
            Z
          </span>
        </div>
      </div>
    </section>
  );
}
