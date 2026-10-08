"use client";

import { useTranslation } from "../LanguageProvider";

const INFO_CELL = "border-t border-ink pt-3.5 flex flex-col gap-2";
const INFO_LABEL = "m text-[11px] tracking-[.14em]";
const INFO_LINK = "text-[15px] no-underline";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-32">
      <div className="wrap sec">
        <div className="idx rv">08</div>
        <div className="flex flex-wrap gap-x-16 gap-y-14 min-w-0">
          <div className="rv flex-[1_1_380px] flex flex-col gap-7">
            <span className="eb">{t("homeContact.eyebrow")}</span>
            <h2 className="h2">
              {t("homeContact.a")} <span className="text-blue">{t("homeContact.b")}</span>
            </h2>
            <p className="mut text-lg leading-[1.6]">{t("common.helpYou")}</p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-x-8 gap-y-7 mt-2">
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
          <form className="rv flex-[1.2_1_480px] min-w-0 border border-ink bg-white p-[clamp(24px,3vw,40px)] flex flex-col gap-5.5">
            <div className="m flex justify-between gap-4 pb-4 border-b border-ink text-[11px] tracking-[.14em]">
              <span>{t("form.send")}</span>
              <span className="text-blue">{t("form.brand")}</span>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(200px,100%),1fr))] gap-5">
              <div className="fl">
                <label htmlFor="h-name">{t("form.name")}</label>
                <input className="in" id="h-name" name="name" type="text" required />
              </div>
              <div className="fl">
                <label htmlFor="h-email">{t("form.email")}</label>
                <input className="in" id="h-email" name="email" type="email" required />
              </div>
              <div className="fl">
                <label htmlFor="h-company">{t("form.company")}</label>
                <input className="in" id="h-company" name="company" type="text" />
              </div>
              <div className="fl">
                <label htmlFor="h-phone">{t("form.phone")}</label>
                <input className="in" id="h-phone" name="phone" type="tel" />
              </div>
            </div>
            <div className="fl">
              <label htmlFor="h-msg">{t("form.message")}</label>
              <textarea
                className="in resize-y"
                id="h-msg"
                name="message"
                rows={5}
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
      </div>
    </section>
  );
}
