"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useTranslation } from "../LanguageProvider";

/**
 * SitePreloader:
 * Architectural Swiss-Brutalist preloader strictly aligned with the A2Z Design System.
 * 
 * Features:
 * - Grid background & ambient blue flare
 * - Archivo bold logo with blue arrow badge
 * - Rotating orbital compass dial with IBM Plex Mono text path
 * - Non-linear high-precision numeric progress counter (00% -> 100%)
 * - Dynamic phased status readouts (EN / AR)
 * - Dual shutter aperture exit transition revealing the page
 * - Keyboard (ESC) & click-to-skip support
 * - Session memory with dispatchable replay event
 */
export default function SitePreloader({ showOnce = false, minDuration = 800 }) {
  const { t, i18n } = useTranslation();
  const isAr = i18n === "ar";

  const [mounted, setMounted] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusKey, setStatusKey] = useState("sysInit");
  const animRef = useRef(null);
  const startTimeRef = useRef(null);

  const finish = useCallback(() => {
    setProgress(100);
    setStatusKey("ready");
    setExiting(true);
    // Release the scroll lock as soon as the exit starts
    document.body.style.overflow = "";
    if (typeof window !== "undefined" && showOnce) {
      try {
        sessionStorage.setItem("a2z_preloader_viewed", "true");
      } catch {}
    }
    const timer = setTimeout(() => {
      setMounted(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, [showOnce]);

  useEffect(() => {
    // Check if already viewed in this session (if showOnce is enabled)
    if (showOnce && typeof window !== "undefined") {
      try {
        if (sessionStorage.getItem("a2z_preloader_viewed") === "true") {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setMounted(false);
          return;
        }
      } catch {}
    }

    // Lock body scroll during preload
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Non-linear realistic progress simulation
    const duration = minDuration;
    startTimeRef.current = performance.now();

    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const rawPct = Math.min(elapsed / duration, 1);
      
      // Architectural ease-out curve
      const easedPct = 1 - Math.pow(1 - rawPct, 2.6);
      const currentVal = Math.floor(easedPct * 100);
      setProgress(currentVal);

      if (currentVal < 28) {
        setStatusKey("sysInit");
      } else if (currentVal < 65) {
        setStatusKey("assets");
      } else if (currentVal < 92) {
        setStatusKey("calibrating");
      } else {
        setStatusKey("ready");
      }

      if (rawPct < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        // Brief pause at 100% for impact
        setTimeout(() => {
          finish();
        }, 120);
      }
    };

    animRef.current = requestAnimationFrame(tick);

    // Keyboard listener (Escape to skip)
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (animRef.current) cancelAnimationFrame(animRef.current);
        finish();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Custom event to replay preloader on demand
    const handleReplay = () => {
      document.body.style.overflow = "hidden";
      setMounted(true);
      setExiting(false);
      setProgress(0);
      setStatusKey("sysInit");
      startTimeRef.current = performance.now();
      animRef.current = requestAnimationFrame(tick);
    };
    window.addEventListener("a2z:replay-loader", handleReplay);

    return () => {
      document.body.style.overflow = originalOverflow;
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("a2z:replay-loader", handleReplay);
    };
  }, [finish, minDuration, showOnce]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] select-none pointer-events-auto ${
        exiting ? "loader-exit-up pointer-events-none" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="A2Z Media Loading Screen"
    >
      {/* Panel: the whole loader slides bottom -> top on exit */}
      <div className="absolute inset-0 bg-paper grid-bg z-10" />

      {/* CENTRAL HUD / CONTENT LAYER */}
      <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 md:p-12 pb-10 md:pb-12">
        {/* HEADER BAR: Telemetry & Skip */}
        <div className="flex items-center justify-between font-mono text-xs text-ink/80">
          <div className="flex items-center gap-3">
            <span className="text-blue font-bold text-sm select-none">+</span>
            <span className="tracking-[0.14em]">
              {t ? t("loader.coordinates") : "24.71° N · 46.67° E"}
            </span>
            <span className="hidden sm:inline-block w-8 h-px bg-ink/30" />
            <span className="hidden sm:inline text-muted uppercase">
              {t ? t("loader.location") : "RIYADH · AL OLAYA"}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue" />
              </span>
              <span className="tracking-wider">
                {t ? t("loader.status") : "SYS.STATUS"}: [{progress === 100 ? "READY" : "LOADING"}]
              </span>
            </div>

            {/* Skip Button */}
            <button
              type="button"
              onClick={finish}
              className="px-2.5 py-1 text-[11px] font-mono border border-ink/30 hover:border-ink hover:bg-ink hover:text-white transition-colors cursor-pointer"
              title="Skip animation (Esc)"
            >
              {t ? t("loader.skip") : "SKIP [ESC]"}
            </button>
          </div>
        </div>

        {/* CENTER CONTENT: Dial, Logo, Progress */}
        <div className="relative my-auto flex flex-col items-center justify-center text-center">
          {/* Ambient Blue Pulse Glow */}
          <span
            className="loader-pulse-glow absolute left-1/2 top-1/2 w-[340px] md:w-[460px] h-[340px] md:h-[460px] rounded-full bg-blue/15 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Architectural Compass / Dial */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Solid circular background mask so horizon laser line doesn't slice through logo */}
            <div className="absolute inset-4 rounded-full bg-paper border border-ink/15 shadow-sm" />

            {/* Outer Reverse Dashed Ring with Crosshairs */}
            <svg
              className="spin r absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="160" cy="160" r="156" stroke="#0B0F1F" strokeOpacity="0.25" strokeWidth="1" />
              <circle
                cx="160"
                cy="160"
                r="144"
                stroke="#0B0F1F"
                strokeOpacity="0.3"
                strokeDasharray="2 8"
                strokeWidth="1"
              />
              <g stroke="#0B0F1F" strokeWidth="1.5">
                <path d="M160 4v16M160 300v16M4 160h16M300 160h16" />
              </g>
            </svg>

            {/* Orbiting Text Circle */}
            <svg
              className="spin absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="loader-circle"
                  d="M160 160 m-118 0 a118 118 0 1 1 236 0 a118 118 0 1 1 -236 0"
                />
              </defs>
              <text
                direction={isAr ? "rtl" : "ltr"}
                fontFamily={isAr ? "IBM Plex Sans Arabic, sans-serif" : "IBM Plex Mono, monospace"}
                fontSize={isAr ? "10.5" : "9.5"}
                letterSpacing={isAr ? "2" : "4"}
                fill="#0B0F1F"
                fontWeight="500"
              >
                <textPath href="#loader-circle">
                  {isAr
                    ? "A2Z · إعلام وإنتاج · تواصل استراتيجي · الرياض ·"
                    : "A2Z · MEDIA & PRODUCTION · STRATEGIC COMMUNICATION · RIYADH ·"}
                </textPath>
              </text>
            </svg>

            {/* Inner Electric Blue Accent Ring */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 320 320"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="160"
                cy="160"
                r="86"
                stroke="#0B0F1F"
                strokeOpacity="0.15"
                strokeWidth="1"
              />
              <circle
                cx="160"
                cy="160"
                r="86"
                stroke="#2F49E0"
                strokeWidth="2"
                strokeDasharray="540"
                strokeDashoffset={540 - (540 * progress) / 100}
                strokeLinecap="round"
                className="transition-all duration-150 ease-out"
                transform="rotate(-90 160 160)"
              />
            </svg>

            {/* Central A2Z Logo Lockup */}
            <div
              className="relative z-10 flex items-center gap-1.5 transform hover:scale-105 transition-transform"
              dir="ltr"
            >
              <span className="font-display font-black text-5xl md:text-6xl text-ink tracking-tight font-stretch-68%">
                A2
              </span>
              <span className="relative w-11 h-14 md:w-13 md:h-16 bg-blue text-white flex items-center justify-center font-display font-stretch-68% font-black text-[44px] md:text-[52px] leading-[.8] shadow-md">
                Z
                <svg
                  className="absolute right-1 top-1"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#FFFFFF"
                    d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* TELEMETRY & NUMERIC COUNTER */}
          <div className="mt-6 flex flex-col items-center gap-3">
            {/* Percentage Display */}
            <div className="flex items-baseline gap-1 font-mono text-ink">
              <span className="text-4xl md:text-6xl font-bold tracking-tight tabular-nums">
                {String(progress).padStart(2, "0")}
              </span>
              <span className="text-lg md:text-2xl text-blue font-bold">%</span>
            </div>

            {/* Precision Progress Bar */}
            <div className="w-64 md:w-80 h-[4px] bg-ink/10 relative overflow-hidden border border-ink/20">
              <div
                className="h-full bg-blue transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Phased Status Readout */}
            <div className="h-6 flex items-center justify-center font-mono text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-ink">
              <span>{t ? t(`loader.${statusKey}`) : "INITIALIZING..."}</span>
              <span className="inline-block w-1.5 h-3 bg-blue ml-1 animate-pulse" />
            </div>
          </div>
        </div>

        {/* FOOTER BAR: Sub-telemetry & Brand details */}
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-muted mb-2 sm:mb-0">
          <div className="flex items-center gap-3 pl-10 sm:pl-0">
            <span className="text-ink font-semibold uppercase">
              {t ? t("loader.tagline") : "MEDIA & PRODUCTION · STRATEGIC COMMUNICATION"}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">2026 // KINGDOM OF SAUDI ARABIA</span>
            <span>·</span>
            <span className="text-blue font-semibold">A2Z · MEDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
