"use client";

import { useTranslation } from "../LanguageProvider";

export default function OurStory() {
  const { t } = useTranslation();
  return (
    <section className="py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">01</div>
        <div className="flex flex-col gap-14 min-w-0">
          <div className="rv flex flex-col gap-5.5">
            <span className="eb">{t("about.story.eyebrow")}</span>
            <h2 className="h2 max-w-[900px]">{t("about.story.title")}</h2>
          </div>
          <div className="rv grid grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] gap-x-14 gap-y-8 text-[17px] leading-[1.75]">
            <div className="flex flex-col gap-5">
              <p>{t("about.story.p1")}</p>
              <p className="mut">{t("about.story.p2")}</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="mut">{t("about.story.p3")}</p>
              <p className="mut">{t("about.story.p4")}</p>
            </div>
          </div>
          <div className="rv bg-ink text-white p-[clamp(32px,4vw,56px)] flex flex-col gap-6">
            <span className="m text-xs tracking-[.16em] text-[#8C9EFF]">
              {t("about.story.whyLabel")}
            </span>
            <p className="text-[length:clamp(26px,2.8vw,40px)] leading-[1.2] font-semibold tracking-[-0.02em] max-w-[1000px]">
              {t("about.story.quote")}
            </p>
            <p className="text-base leading-[1.6] text-[#B6BAC6] max-w-[640px]">
              {t("about.story.quoteNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
