"use client";

import { useTranslation } from "../LanguageProvider";

const INFO_CELL = "border-t border-ink pt-3.5 flex flex-col gap-2";
const INFO_LABEL = "m text-[11px] tracking-[.14em]";
const INFO_LINK = "text-[15px] no-underline";

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <section className="grid-bg pt-20 pb-30 border-b border-ink">
      <div className="wrap flex flex-wrap gap-x-18 gap-y-14 items-start">
        <div className="flex-[1_1_440px] min-w-0 flex flex-col gap-7.5">
          <div className="m fu flex flex-wrap items-center gap-4 text-[13px] tracking-[.12em]">
            <span>A2Z</span>
            <span className="w-10 h-px bg-ink" />
            <span className="text-blue">{t("contactPage.eyebrow")}</span>
          </div>
          <h1 className="h1 !text-8xl">
            <span className="ln">
              <span className="[animation-delay:.05s]">{t("contactPage.l1")}</span>
            </span>
            <span className="ln">
              <span className="[animation-delay:.15s]">
                {t("contactPage.l2a")} <span className="text-blue">{t("contactPage.l2b")}</span>
              </span>
            </span>
          </h1>
          <p className="mut fu text-[19px] leading-[1.6] [animation-delay:.4s]">
            {t("common.helpYou")}
          </p>
          <div className="fu grid grid-cols-[repeat(auto-fit,minmax(min(210px,100%),1fr))] gap-x-8 gap-y-7 mt-2 [animation-delay:.5s]">
            <div className={INFO_CELL}>
              <span className={INFO_LABEL}>{t("common.office")}</span>
              <span className="text-[15px] leading-normal">{t("common.address")}</span>
            </div>
            <div className={INFO_CELL}>
              <span className={INFO_LABEL}>{t("common.email")}</span>
              <a href="mailto:info@atooz.sa" className={INFO_LINK}>
                info@atooz.sa
              </a>
            </div>
            <div className={INFO_CELL}>
              <span className={INFO_LABEL}>{t("common.phone")}</span>
              <a href="tel:+1234567890" className={INFO_LINK}>
                +123 456 7890
              </a>
            </div>
            <div className={INFO_CELL}>
              <span className={INFO_LABEL}>{t("common.whatsapp")}</span>
              <a
                href="https://wa.me/201067504693"
                target="_blank"
                rel="noopener noreferrer"
                className={INFO_LINK}
              >
                {t("common.letsTalk")} ↗
              </a>
            </div>
          </div>
        </div>
        <form className="fu flex-[1.1_1_480px] min-w-0 border border-ink bg-white p-[clamp(24px,3vw,40px)] flex flex-col gap-5.5 [animation-delay:.3s]">
          <div className="m flex justify-between gap-4 pb-4 border-b border-ink text-[11px] tracking-[.14em]">
            <span>{t("form.send")}</span>
            <span className="text-blue">{t("form.brand")}</span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-5">
            <div className="fl">
              <label htmlFor="c-name">{t("form.name")}</label>
              <input className="in" id="c-name" name="name" type="text" required />
            </div>
            <div className="fl">
              <label htmlFor="c-email">{t("form.email")}</label>
              <input className="in" id="c-email" name="email" type="email" required />
            </div>
            <div className="fl">
              <label htmlFor="c-company">{t("form.company")}</label>
              <input className="in" id="c-company" name="company" type="text" />
            </div>
            <div className="fl">
              <label htmlFor="c-phone">{t("form.phone")}</label>
              <input className="in" id="c-phone" name="phone" type="tel" />
            </div>
          </div>
          <div className="fl">
            <label htmlFor="c-msg">{t("form.message")}</label>
            <textarea
              className="in resize-y"
              id="c-msg"
              name="message"
              rows={6}
              required
            />
          </div>
          <button
            className="mag btn w-full py-4! px-7! text-[15px]!"
            type="submit"
          >
            <span className="fill" aria-hidden="true" />
            <span className="lbl">{t("form.submit")}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}
