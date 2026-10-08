"use client";

import Image from "next/image";
import { useTranslation } from "../LanguageProvider";

const PROJECTS = [
  {

    image: "/OurProjects/socialmedia1.png",
    bg: "bg-white",
  },
  {

    image: "/OurProjects/socialmedia2.png",
    bg: "grid-bg",
  },
];

export default function Projects() {
  const { t } = useTranslation();
  const texts = t("projects.items", { returnObjects: true });
  return (
    <section id="projects" className="py-32 border-b border-ink">
      <div className="wrap sec">
        <div className="idx rv">07</div>
        <div className="flex flex-col gap-14 min-w-0">
          <div className="rv flex flex-wrap justify-between items-end gap-x-12 gap-y-7">
            <div className="flex flex-col gap-5.5 flex-[1_1_520px]">
              <span className="eb">{t("projects.eyebrow")}</span>
              <h2 className="h2">{t("projects.title")}</h2>
            </div>
            <a className="mag btn" href="#projects">
              <span className="fill" aria-hidden="true" />
              <span className="lbl">{t("projects.viewAll")}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
                />
              </svg>
            </a>
          </div>
          <div className="m flex items-center gap-3.5 text-[11px] tracking-[.14em] -mb-7">
            <span>{t("projects.swipe")}</span>
            <span className="w-16 h-px bg-ink" />
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M4 11h12.17l-5.59-5.59L12 4l8 8-8 8-1.41-1.41L16.17 13H4z"
              />
            </svg>
          </div>
          <div
            className="strip"
            tabIndex={0}
            aria-label={t("projects.aria")}
          >
            {PROJECTS.map((media, i) => {
              const project = { ...media, ...texts[i] };
              return (
                <a
                  key={project.name}
                  className="card-p rv flex flex-col gap-5"
                  href="#projects"
                >
                  <div
                    className={` ${project.bg} aspect-[16/10] overflow-hidden border border-ink relative`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 900px) 86vw, 600px"
                      className="object-cover" 
                    />
                  </div>
                  <div className="flex justify-between gap-6 items-start border-t border-ink pt-4.5">
                    <div className="flex flex-col gap-2.5">
                      <span className="m text-xs tracking-[.14em] uppercase text-blue">
                        {project.tag}
                      </span>
                      <span className="text-[28px] font-semibold tracking-[-0.02em]">
                        {project.name}
                      </span>
                    </div>
                    <svg
                      className="go flex-none"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
                      />
                    </svg>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
