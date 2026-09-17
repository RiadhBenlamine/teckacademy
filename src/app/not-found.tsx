import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
        <div className="max-w-md w-full text-center bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto text-2xl font-black">
            404
          </div>
          <h1 className="text-2xl font-bold text-slate-900">
            الصفحة غير موجودة / Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            عذراً، الصفحة التي تبحث عنها غير متوفرة أو تم نقلها.
            <br />
            Sorry, the page you are looking for does not exist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/ar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>العودة للرئيسية (عربي)</span>
            </Link>
            <Link
              href="/en"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
            >
              <span>Back Home (English)</span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
