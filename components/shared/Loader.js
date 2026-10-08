"use client";

import { useTranslation } from "../LanguageProvider";

/**
 * Branded A2Z Loader Component
 * 
 * Supports 3 variants:
 * - "fullscreen": Full-page loading overlay with technical HUD and branded dial
 * - "block": Container / section level loader with Swiss architectural frame and corner crosses
 * - "inline" / "spinner": Compact inline loader for buttons and small UI elements
 */
export default function Loader({
  variant = "block",
  label,
  size = "md",
  className = "",
}) {
  const { t, i18n } = useTranslation();
  const isAr = i18n === "ar";

  // 1. INLINE / SPINNER VARIANT
  if (variant === "inline" || variant === "spinner") {
    const dim = size === "sm" ? "w-5 h-5" : size === "lg" ? "w-10 h-10" : "w-7 h-7";
    const zSize = size === "sm" ? "text-[10px] w-3 h-3.5" : size === "lg" ? "text-[18px] w-5.5 h-6.5" : "text-[13px] w-4 h-5";

    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`} role="status" aria-live="polite">
        <span className={`relative inline-flex items-center justify-center ${dim} flex-shrink-0`}>
          {/* Rotating outer compass ring */}
          <svg
            className="spin absolute inset-0 w-full h-full"
            viewBox="0 0 36 36"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="18" cy="18" r="16" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="#2F49E0"
              strokeWidth="2"
              strokeDasharray="24 76"
              strokeLinecap="round"
            />
          </svg>
          {/* Centered blue Z mark */}
          <span className={`bg-blue text-white flex items-center justify-center font-display font-black leading-none ${zSize}`}>
            Z
          </span>
        </span>
        {label && (
          <span className="font-mono text-xs uppercase tracking-wider text-muted">
            {label}
          </span>
        )}
      </span>
    );
  }

  // 2. BLOCK / SECTION VARIANT
  if (variant === "block") {
    return (
      <div
        className={`relative w-full min-h-[280px] p-8 bg-paper border border-ink flex flex-col items-center justify-center overflow-hidden grid-bg ${className}`}
        role="status"
        aria-live="polite"
      >
        {/* Architectural corner crosses */}
        <span className="absolute top-2 left-2 font-mono text-[11px] text-ink/40 select-none">+</span>
        <span className="absolute top-2 right-2 font-mono text-[11px] text-ink/40 select-none">+</span>
        <span className="absolute bottom-2 left-2 font-mono text-[11px] text-ink/40 select-none">+</span>
        <span className="absolute bottom-2 right-2 font-mono text-[11px] text-ink/40 select-none">+</span>

        {/* Ambient blue glow spot */}
        <span
          className="absolute w-48 h-48 rounded-full bg-blue/15 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Central Dial */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-5">
          {/* Outer reverse ring */}
          <svg
            className="spin r absolute inset-0 w-full h-full"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="60" cy="60" r="58" stroke="#0B0F1F" strokeOpacity="0.2" />
            <circle cx="60" cy="60" r="52" stroke="#0B0F1F" strokeOpacity="0.3" strokeDasharray="2 6" />
            <path d="M60 2v8M60 110v8M2 60h8M110 60h8" stroke="#0B0F1F" strokeWidth="1.5" />
          </svg>

          {/* Forward ring with blue tick */}
          <svg
            className="spin absolute inset-0 w-full h-full"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="60"
              cy="60"
              r="40"
              stroke="#2F49E0"
              strokeWidth="2"
              strokeDasharray="40 180"
              strokeLinecap="round"
            />
          </svg>

          {/* Center Z mark */}
          <span className="relative z-10 w-9 h-11 bg-blue text-white flex items-center justify-center font-display font-stretch-68% font-black text-[32px] leading-[.8] shadow-sm">
            Z
          </span>
        </div>

        {/* Status text & scanning line */}
        <div className="flex flex-col items-center gap-2 z-10 text-center">
          <div className="font-mono text-xs font-semibold tracking-[0.16em] uppercase text-ink">
            {label || (t ? t("loader.loading") : "LOADING...")}
          </div>
          <div className="w-36 h-[2px] bg-ink/15 relative overflow-hidden">
            <div className="absolute inset-y-0 w-1/2 bg-blue loader-scan" />
          </div>
          <span className="font-mono text-[10px] tracking-wider text-muted">
            {t ? t("loader.coordinates") : "24.71° N · 46.67° E"}
          </span>
        </div>
      </div>
    );
  }

  // 3. FULLSCREEN VARIANT (Can be used standalone or inside pages)
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper grid-bg overflow-hidden ${className}`}
      role="status"
      aria-live="polite"
    >
      {/* Corner crosshairs and coordinates */}
      <div className="absolute top-6 left-6 font-mono text-xs text-ink/70 flex items-center gap-2 select-none">
        <span className="text-blue font-bold">+</span>
        <span>{t ? t("loader.coordinates") : "24.71° N · 46.67° E"}</span>
      </div>
      <div className="absolute top-6 right-6 font-mono text-xs text-ink/70 flex items-center gap-2 select-none">
        <span className="inline-block w-2 h-2 rounded-full bg-blue animate-pulse" />
        <span>SYS.LOAD // 01</span>
      </div>
      <div className="absolute bottom-6 left-6 font-mono text-xs text-ink/60 hidden sm:block select-none">
        A2Z MEDIA & PRODUCTION · RIYADH
      </div>
      <div className="absolute bottom-6 right-6 font-mono text-xs text-ink/60 hidden sm:block select-none">
        EST. 2026 // ARCHIVAL
      </div>

      {/* Ambient background glow */}
      <span
        className="absolute w-96 h-96 rounded-full bg-blue/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Central Branded Dial */}
      <div className="relative w-44 h-44 flex items-center justify-center mb-8">
        <svg
          className="spin r absolute inset-0 w-full h-full"
          viewBox="0 0 180 180"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="90" cy="90" r="88" stroke="#0B0F1F" strokeOpacity="0.2" />
          <circle cx="90" cy="90" r="78" stroke="#0B0F1F" strokeOpacity="0.3" strokeDasharray="2 8" />
          <path d="M90 2v10M90 168v10M2 90h10M168 90h10" stroke="#0B0F1F" strokeWidth="1.5" />
        </svg>

        <svg
          className="spin absolute inset-0 w-full h-full"
          viewBox="0 0 180 180"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="90"
            cy="90"
            r="60"
            stroke="#2F49E0"
            strokeWidth="2.5"
            strokeDasharray="70 240"
            strokeLinecap="round"
          />
        </svg>

        {/* Center Logo Group */}
        <div className="relative z-10 flex items-center gap-1" dir="ltr">
          <span className="font-display font-black text-4xl text-ink font-stretch-68%">
            A2
          </span>
          <span className="relative w-10 h-12 bg-blue text-white flex items-center justify-center font-display font-stretch-68% font-black text-[38px] leading-[.8] shadow-sm">
            Z
            <svg
              className="absolute right-0.5 top-0.5"
              width="10"
              height="10"
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

      {/* Telemetry and Progress */}
      <div className="flex flex-col items-center gap-3 z-10 text-center px-4">
        <div className="font-mono text-sm font-semibold tracking-[0.18em] uppercase text-ink">
          {label || (t ? t("loader.assets") : "LOADING EDITORIAL ASSETS...")}
        </div>
        <div className="w-64 max-w-[80vw] h-[2px] bg-ink/15 relative overflow-hidden border-t border-b border-ink/20">
          <div className="absolute inset-y-0 w-2/5 bg-blue loader-scan" />
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px] tracking-wider text-muted mt-1">
          <span>SYS.STREAM</span>
          <span>·</span>
          <span className="text-blue">SYNCING</span>
          <span>·</span>
          <span>SAUDI ARABIA</span>
        </div>
      </div>
    </div>
  );
}
