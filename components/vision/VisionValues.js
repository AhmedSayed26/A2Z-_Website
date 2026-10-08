"use client";

import { useTranslation } from "../LanguageProvider";

export default function VisionValues() {
  const { t } = useTranslation();
  const VALUES = t("vision.values.items", { returnObjects: true });
  return (
    <section className="py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">02</div>
        <div className="flex flex-col gap-14 min-w-0">
          <div className="rv flex flex-col gap-5.5">
            <span className="eb">{t("vision.values.eyebrow")}</span>
            <h2 className="h2">{t("vision.values.title")}</h2>
          </div>
          <div className="cells rv grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))]">
            {VALUES.map((item, i) => (
              <div key={item.title} className="cell min-h-70">
                <span className="spot" aria-hidden="true" />
                <div className="flex justify-between items-center">
                  <span className="m text-[13px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rule" />
                </div>
                <span className="mt-auto text-[32px] font-semibold tracking-[-0.02em]">
                  {item.title}
                </span>
                <p className="mut text-base leading-[1.6]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
