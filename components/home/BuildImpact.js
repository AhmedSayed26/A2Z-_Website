"use client";

import { useTranslation } from "../LanguageProvider";

export default function BuildImpact() {
  const { t } = useTranslation();
  const STEPS = t("build.steps", { returnObjects: true });
  return (
    <section className="py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">06</div>
        <div className="flex flex-col gap-14 min-w-0">
          <div className="rv flex flex-wrap justify-between items-end gap-x-12 gap-y-7">
            <div className="flex flex-col gap-5.5 flex-[1_1_520px]">
              <span className="eb">{t("build.eyebrow")}</span>
              <h2 className="h2">{t("build.title")}</h2>
            </div>
            <p className="mut flex-[1_1_320px] max-w-115 text-lg leading-[1.6]">
              {t("build.text")}
            </p>
          </div>
          <div className="rv border border-ink grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-x-9 gap-y-10 px-9 py-10">
            {STEPS.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-4.5">
                <div className="flex items-center gap-4">
                  <span className="m text-[13px] text-blue">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 h-px bg-ink opacity-35" />
                </div>
                <span className="text-[22px] font-semibold leading-[1.2] tracking-[-0.01em]">
                  {step.title}
                </span>
                <p className="mut text-[15px] leading-[1.6]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
