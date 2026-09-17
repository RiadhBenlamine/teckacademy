export type Locale = "ar" | "en";

export const defaultLocale: Locale = "ar";
export const locales: Locale[] = ["ar", "en"];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function getLocalizedPath(currentPath: string, targetLocale: Locale): string {
  if (!currentPath) return `/${targetLocale}`;
  const segments = currentPath.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}`;
  }
  if (locales.includes(segments[0] as Locale)) {
    segments[0] = targetLocale;
    return `/${segments.join("/")}`;
  }
  return `/${targetLocale}/${segments.join("/")}`;
}
