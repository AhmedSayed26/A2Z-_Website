"use client";

import { useTranslation } from "../LanguageProvider";

export default function HowImpact() {
  const { t } = useTranslation();
  const SERVICES = t("services.items", { returnObjects: true });
  return (
    <section className="py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">02</div>
        <div className="flex flex-col gap-14 min-w-0">
          <div className="rv flex flex-wrap justify-between items-end gap-x-12 gap-y-7">
            <div className="flex flex-col gap-5.5 flex-[1_1_520px]">
              <span className="eb">{t("services.eyebrow")}</span>
              <h2 className="h2">{t("services.title")}</h2>
            </div>
            <p className="mut flex-[1_1_320px] max-w-110 text-lg leading-[1.6]">
              {t("services.text")}
            </p>
          </div>
          <div className="cells rv grid-cols-[repeat(auto-fit,minmax(min(220px,100%),1fr))]">
            {SERVICES.map((title, i) => (
              <div key={title} className="cell min-h-52.5">
                <span className="spot" aria-hidden="true" />
                <div className="flex justify-between items-center">
                  <span className="m text-[13px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rule" />
                </div>
                <span className="mt-auto text-[22px] font-semibold leading-[1.2] tracking-[-0.01em]">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
