"use client";

import { useTranslation } from "../LanguageProvider";

export default function VisionStatement() {
  const { t } = useTranslation();
  return (
    <section className="py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">01</div>
        <div className="rv flex flex-wrap justify-between items-end gap-x-16 gap-y-10 min-w-0">
          <div className="flex flex-col gap-5.5 flex-[1.5_1_560px]">
            <span className="eb">{t("vision.statement.eyebrow")}</span>
            <p className="text-[length:clamp(32px,3.6vw,54px)] font-semibold leading-[1.08] tracking-[-0.03em] text-pretty">
              {t("vision.statement.a")} <span className="text-blue">{t("vision.statement.b")}</span>
            </p>
          </div>
          <p className="mut flex-[1_1_320px] max-w-110 text-lg leading-[1.65]">
            {t("vision.statement.text")}
          </p>
        </div>
      </div>
    </section>
  );
}
