import {
  Archivo,
  IBM_Plex_Mono,
  IBM_Plex_Sans_Arabic,
  Schibsted_Grotesk,
} from "next/font/google";
import LanguageProvider from "../components/LanguageProvider";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["800", "900"],
});

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-plex-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "A2Z Media",
    template: "%s · A2Z Media",
  },
  description:
    "A2Z Media, Production & Strategic Communication provides integrated media and marketing solutions that help companies build a strong presence and achieve real impact.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${schibsted.variable} ${plexMono.variable} ${plexArabic.variable}`}
    >
      <body>
        <div id="top" className="w-full overflow-x-clip bg-paper">
          <LanguageProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
