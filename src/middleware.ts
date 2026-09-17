import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname already starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // If root path or path without locale, redirect to default locale (/ar)
  const targetLocale = defaultLocale;
  const newUrl = new URL(`/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files, favicon, etc.)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
