"use client";

import Image from "next/image";
import { useTranslation } from "../LanguageProvider";

export default function AboutHero() {
  const { t } = useTranslation();
  return (
    <section className="grid-bg pt-[72px] pb-[96px] border-b border-ink">
      <div className="wrap flex flex-wrap gap-14 items-stretch">
        <div className="flex-[1.3_1_560px] min-w-0 flex flex-col gap-8 justify-center">
          <div className="m fu flex flex-wrap items-center gap-4 text-[13px] tracking-[.12em]">
            <span>{t("about.hero.eyebrow")}</span>
            <span className="w-10 h-px bg-ink" />
            <span className="text-blue">{t("about.hero.eyebrowAlt")}</span>
          </div>
          <h1 className="h1">
            <span className="ln">
              <span className="[animation-delay:.05s]">{t("about.hero.l1")}</span>
            </span>
            <span className="ln">
              <span className="[animation-delay:.15s]">{t("about.hero.l2")}</span>
            </span>
            <span className="ln">
              <span className="[animation-delay:.25s]">
                {t("about.hero.l3a")}{" "}<span className="text-blue">{t("about.hero.branding")}</span>{" "}{t("about.hero.l3b")}
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
