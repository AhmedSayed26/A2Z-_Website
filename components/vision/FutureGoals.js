"use client";

import { useTranslation } from "../LanguageProvider";

export default function FutureGoals() {
  const { t } = useTranslation();
  const GOALS = t("vision.goals.items", { returnObjects: true });
  return (
    <section className="grid-bg py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">03</div>
        <div className="flex flex-col gap-14 min-w-0">
          <div className="rv flex flex-col gap-5.5">
            <span className="eb">{t("vision.goals.eyebrow")}</span>
            <h2 className="h2">{t("vision.goals.title")}</h2>
          </div>
          <div className="rv border border-ink bg-paper grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-10 p-10">
            {GOALS.map((text, i) => (
              <div key={i} className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <span className="m text-[13px] text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 h-px bg-ink opacity-35" />
                </div>
                <p className="text-[17px] leading-[1.7]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
