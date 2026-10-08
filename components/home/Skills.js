"use client";

import { useTranslation } from "../LanguageProvider";

function Arrow() {
  return (
    <svg className="go" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
      />
    </svg>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const SKILLS = t("skills.items", { returnObjects: true });
  return (
    <section className="py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">05</div>
        <div className="flex flex-col gap-14 min-w-0">
          <div className="rv flex flex-wrap justify-between items-end gap-x-12 gap-y-7">
            <div className="flex flex-col gap-5.5 flex-[1_1_520px]">
              <span className="eb">{t("skills.eyebrow")}</span>
              <h2 className="h2">{t("skills.title")}</h2>
            </div>
            <p className="mut flex-[1_1_320px] max-w-110 text-lg leading-[1.6]">
              {t("skills.text")}
            </p>
          </div>
          <div className="rv flex flex-col border-b border-ink">
            {SKILLS.map((skill, i) => (
              <div
                key={skill.title}
                className="row grid grid-cols-[64px_minmax(0,1.1fr)_minmax(0,1fr)_32px] gap-x-8 gap-y-4 items-center py-7.5 px-2 border-t border-ink"
              >
                <span className="m text-[13px] text-blue">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[length:clamp(26px,2.6vw,38px)] font-semibold tracking-[-0.02em] leading-[1.05]">
                  {skill.title}
                </span>
                <span className="mut text-base leading-normal">{skill.desc}</span>
                <Arrow />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
