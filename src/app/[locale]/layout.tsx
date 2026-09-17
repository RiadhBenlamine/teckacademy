import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter } from "next/font/google";
import { Locale, defaultLocale, isValidLocale, getDirection } from "@/lib/i18n";
import { siteMeta } from "@/data/academyData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = (isValidLocale(rawLocale) ? rawLocale : defaultLocale) as Locale;
  const meta = siteMeta[locale];

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL("https://techkids.academy"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: locale === "ar" ? "ar_DZ" : "en_US",
      type: "website",
      siteName: "TechKids Academy",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (isValidLocale(rawLocale) ? rawLocale : defaultLocale) as Locale;
  const dir = getDirection(locale);
  const isRtl = dir === "rtl";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${ibmPlexArabic.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body
        className={`min-h-full flex flex-col antialiased selection:bg-blue-600 selection:text-white ${
          isRtl ? "font-(family-name:--font-arabic)" : "font-(family-name:--font-inter)"
        }`}
      >
        <Header locale={locale} />
        <main className="flex-1 w-full">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
