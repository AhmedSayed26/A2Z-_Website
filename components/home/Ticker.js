"use client";

import { useTranslation } from "../LanguageProvider";

function Dot() {
  return <span className="w-[7px] h-[7px] bg-accent-light" />;
}

const ARABIC = /[؀-ۿ]/;

function Track({ hidden, items }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex items-center gap-11 pr-11"
    >
      {items.map((item, i) => (
        <span key={i} className="contents">
          {ARABIC.test(item) ? (
            <span className="ar text-base tracking-[0]" lang="ar">
              {item}
            </span>
          ) : (
            <span>{item}</span>
          )}
          <Dot />
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  const { t , i18n } = useTranslation();
  const items = t("ticker.items", { returnObjects: true });
  return (
    <section
      className="mqbox bg-ink text-white overflow-hidden border-t border-ink"
      aria-label={t("ticker.aria")}
    >
      <div dir={i18n==="ar" ? "rtl" : "ltr"} className="mq m h-[68px] items-center text-[15px] font-medium tracking-[.16em] uppercase whitespace-nowrap">
        <Track items={items} />
        <Track items={items} hidden />
      </div>
    </section>
  );
}
