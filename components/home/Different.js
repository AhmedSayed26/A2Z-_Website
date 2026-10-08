"use client";

import { useTranslation } from "../LanguageProvider";

export default function Different() {
  const { t } = useTranslation();
  return (
    <section className="grid-bg py-36 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">03</div>
        <div className="rv flex flex-wrap justify-between items-end gap-x-16 gap-y-10 min-w-0">
          <div className="flex flex-col gap-5.5 flex-[1.4_1_520px]">
            <span className="eb">{t("different.eyebrow")}</span>
            <h2 className="h2 text-[length:clamp(44px,5.6vw,88px)]!">
              {t("different.title")}
            </h2>
          </div>
          <p className="fillt flex-[1_1_420px] max-w-155 text-[length:clamp(26px,2.6vw,38px)] font-semibold leading-[1.25] tracking-[-0.02em]">
            {t("different.a")}{" "}<span className="text-blue">{t("different.b")}</span>{t("different.c")}
          </p>
        </div>
      </div>
    </section>
  );
}
