"use client";

import { Suspense } from "react";
import CountUp from "../shared/CountUp";
import LogoSlider from "../shared/LogoSlider";
import { CLIENT_LOGOS, STATS } from "../../lib/content";
import { useTranslation } from "../LanguageProvider";

export default function Clients() {
  const { t } = useTranslation();
  const statLabels = t("clients.stats", { returnObjects: true });
  return (
    <section id="clients" className="py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">01</div>
        <div className="flex flex-col gap-14 min-w-0">
          <div className="rv flex flex-col gap-5.5">
            <span className="eb">{t("clients.eyebrow")}</span>
            <h2 className="h2">{t("clients.title")}</h2>
          </div>
          <div className="rv grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-10">
            {STATS.map((stat, i) => (
              <div
                key={stat.value}
                className="border-t border-ink pt-7 flex flex-col gap-3.5"
              >
                <span className="text-[length:clamp(72px,8vw,120px)] font-semibold tracking-[-0.05em] leading-[.85]">
                  <CountUp value={stat.value} />
                </span>
                <span className="text-base">{statLabels[i]}</span>
              </div>
            ))}
          </div>
          <div className="rv min-w-0">
            <Suspense fallback={<div className="h-31" />}>
              <LogoSlider logos={CLIENT_LOGOS} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
