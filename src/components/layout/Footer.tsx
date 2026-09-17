import React from "react";
import Link from "next/link";
import { Locale } from "@/lib/i18n";
import { siteMeta } from "@/data/academyData";
import { Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const meta = siteMeta[locale];
  const isRtl = locale === "ar";

  const footerLinks = [
    { id: "home", href: `/${locale}`, label: locale === "ar" ? "الرئيسية" : "Home" },
    { id: "about", href: `/${locale}/about`, label: locale === "ar" ? "عن الأكاديمية" : "About" },
    { id: "programs", href: `/${locale}/programs`, label: locale === "ar" ? "المسارات" : "Programs" },
    { id: "projects", href: `/${locale}/projects`, label: locale === "ar" ? "المشاريع" : "Projects" },
    { id: "contact", href: `/${locale}/contact`, label: locale === "ar" ? "تواصل معنا" : "Contact" },
  ];

  const tracksLinks = [
    { id: "prog", label: locale === "ar" ? "مسار البرمجة" : "Programming Track" },
    { id: "web", label: locale === "ar" ? "تصميم وتطوير المواقع" : "Web Development" },
    { id: "games", label: locale === "ar" ? "صناعة وتطوير الألعاب" : "Game Development" },
    { id: "ai", label: locale === "ar" ? "الذكاء الاصطناعي" : "Artificial Intelligence" },
    { id: "robot", label: locale === "ar" ? "الروبوتات والإلكترونيات" : "Robotics" },
    { id: "design", label: locale === "ar" ? "التصميم الرقمي UI/UX" : "Digital Design" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2.5 group focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                <span>TK</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">
                  TechKids <span className="text-cyan-400 font-semibold">Academy</span>
                </span>
                <span className="text-xs text-slate-400">
                  {locale === "ar" ? "أكاديمية التكنولوجيا للأطفال" : "Kids Technology Academy"}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {meta.footerDescription}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-red-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
              {locale === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tracks */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
              {locale === "ar" ? "المسارات التعليمية" : "Learning Tracks"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {tracksLinks.map((t) => (
                <li key={t.id}>
                  <Link
                    href={`/${locale}/programs`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors inline-block"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-100">
              {locale === "ar" ? "معلومات التواصل" : "Contact Information"}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:contact@techkids.dz" className="hover:text-white transition-colors">
                  contact@techkids.dz
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="bidi-isolate hover:text-white transition-colors" dir="ltr">
                  +213 555555555
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>
                  {locale === "ar"
                    ? "الرياض، المملكة العربية السعودية"
                    : "Riyadh, Saudi Arabia"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{meta.rights}</p>
          <div className="flex items-center gap-6">
            <span>{isRtl ? "تعليم المستقبل يبدأ هنا" : "Future Education Starts Here"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
