"use client";

import { useTranslation } from "../LanguageProvider";

export default function Presence() {
  const { t } = useTranslation();
  const ITEMS = t("presence.items", { returnObjects: true });
  return (
    <section className="py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">04</div>
        <div className="flex flex-col gap-14 min-w-0">
          <div className="rv flex flex-wrap justify-between items-end gap-x-12 gap-y-7">
            <div className="flex flex-col gap-5.5 flex-[1.3_1_560px]">
              <span className="eb">{t("presence.eyebrow")}</span>
              <h2 className="h2">{t("presence.title")}</h2>
            </div>
            <p className="mut flex-[1_1_320px] max-w-110 text-lg leading-[1.6]">
              {t("presence.text")}
            </p>
          </div>
          <div className="cells rv grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]">
            {ITEMS.map((item, i) => (
              <div key={item.title} className="cell min-h-70 p-9!">
                <span className="spot" aria-hidden="true" />
                <div className="flex justify-between items-center">
                  <span className="m text-[13px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="rule" />
                </div>
                <span className="mt-auto text-[26px] font-semibold leading-[1.15] tracking-[-0.015em]">
                  {item.title}
                </span>
                <p className="mut text-base leading-[1.6]">{item.body}</p>
              </div>
            ))}
            <div className="cell dk min-h-70 p-9!">
              <span className="spot" aria-hidden="true" />
              <div className="flex justify-between items-center">
                <span className="m text-[13px] text-[#8C9EFF]">A → Z</span>
                <span className="rule" />
              </div>
              <span className="mt-auto text-[26px] font-semibold leading-[1.15] tracking-[-0.015em]">
                {t("common.startImpact")}
              </span>
              <a
                className="mag btn l self-start"
                href="https://wa.me/201067504693"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fill" aria-hidden="true" />
                <span className="lbl">{t("common.letsTalk")}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
