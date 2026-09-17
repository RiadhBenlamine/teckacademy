"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Locale, isValidLocale, defaultLocale } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Mail, Phone, MapPin, CheckCircle, Send, HelpCircle, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const params = useParams();
  const rawLocale = (params?.locale as string) || defaultLocale;
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : defaultLocale;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "8",
    track: "programming",
    parentName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q:
        locale === "ar"
          ? "هل يحتاج طفلي إلى أي معرفة سابقة بالبرمجة؟"
          : "Does my child need prior programming experience?",
      a:
        locale === "ar"
          ? "لا، جميع مساراتنا تبدأ من الصفر التام عبر جلسة تقييم تحدد المستوى المناسب لعمر الطفل وقدراته."
          : "No, all tracks accommodate beginners starting from scratch with an exploratory evaluation session to place your child appropriately.",
    },
    {
      q:
        locale === "ar"
          ? "كيف يتم تقييم مستوى الطفل وميوله؟"
          : "How is the child's level and interest assessed?",
      a:
        locale === "ar"
          ? "من خلال جلسة تفاعلية ممتعة ومبسطة تركز على الألعاب المنطقية والتفكير التتابعي لاكتشاف شغفه."
          : "Through an engaging interactive session featuring logic puzzles and computational patterns to identify curiosity and strengths.",
    },
    {
      q:
        locale === "ar"
          ? "ما هي الفئات العمرية المقبولة في الأكاديمية؟"
          : "What age groups are accepted in the academy?",
      a:
        locale === "ar"
          ? "نستقبل الأطفال والناشئين من سن 3 سنوات وحتى 17 سنة، مع مناهج مخصصة لكل مرحلة عمرية."
          : "We welcome children and youth aged 3 to 17 years old, with tailored curricula designed for each developmental phase.",
    },
    {
      q:
        locale === "ar"
          ? "هل يحصل الطفل على مشروع عملي في نهاية المسار؟"
          : "Does the child complete a real project by the end?",
      a:
        locale === "ar"
          ? "نعم، 100% من التعليم قائم على التطبيق العملي بحيث ينتهي كل مسار بمشروع حقيقي ملموس يبنيه الطفل بنفسه."
          : "Yes, 100% of our learning is hands-on; every path concludes with a tangible personal project built entirely by the student.",
    },
  ];

  return (
    <div className="py-12 md:py-20 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "تواصل معنا" : "Get In Touch"}
          title={locale === "ar" ? "ابدأ رحلة طفلك معنا اليوم" : "Start Your Child's Journey Today"}
          subtitle={
            locale === "ar"
              ? "املأ النموذج التالي لحجز جلسة استكشافية وتحديد المسار المناسب لطفلك."
              : "Fill out the form below to book an exploratory session and find the right path for your child."
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 sm:p-8 border-slate-200/90">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                {locale === "ar" ? "معلومات التواصل" : "Contact Information"}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">
                      {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                    </div>
                    <a
                      href="mailto:contact@techkids.academy"
                      className="text-sm sm:text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      contact@techkids.academy
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">
                      {locale === "ar" ? "الهاتف" : "Phone"}
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-800 bidi-isolate" dir="ltr">
                      +966 50 123 4567
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">
                      {locale === "ar" ? "الموقع" : "Location"}
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-slate-800">
                      {locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 bg-blue-50/50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-[24px]">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-900 mb-1">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>{locale === "ar" ? "جلسة تقييم مجانية" : "Free Assessment Session"}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {locale === "ar"
                    ? "نقدم جلسة استكشافية مجانية للتعرف على اهتمامات الطفل قبل بدء أي مسار."
                    : "We offer a free initial session to understand the child's curiosity prior to enrollment."}
                </p>
              </div>
            </Card>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 border-slate-200/90">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {locale === "ar" ? "تم إرسال طلبكم بنجاح!" : "Inquiry Submitted Successfully!"}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {locale === "ar"
                      ? "شكراً لاهتمامكم بأكاديمية تيك كيدز. سيتواصل معكم فريقنا لتنسيق موعد جلسة التقييم الاستكشافية."
                      : "Thank you for reaching out to TechKids Academy. Our team will contact you shortly to arrange the exploratory session."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
                  >
                    {locale === "ar" ? "إرسال طلب آخر" : "Submit Another Inquiry"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {locale === "ar" ? "حجز جلسة استكشافية" : "Book an Exploratory Session"}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {locale === "ar" ? "اسم الطفل" : "Child's Name"} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.childName}
                        onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                        placeholder={locale === "ar" ? "مثال: عبد الله" : "e.g. Alex"}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {locale === "ar" ? "عمر الطفل (3–17)" : "Child's Age (3–17)"} *
                      </label>
                      <select
                        value={formData.childAge}
                        onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 transition-colors"
                      >
                        {Array.from({ length: 15 }, (_, i) => i + 3).map((age) => (
                          <option key={age} value={age}>
                            {age} {locale === "ar" ? "سنة" : "Years"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {locale === "ar" ? "المسار التكنولوجي المفضل" : "Preferred Technology Track"}
                    </label>
                    <select
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 transition-colors"
                    >
                      <option value="programming">
                        {locale === "ar" ? "البرمجة (Python / Scratch)" : "Programming (Python / Scratch)"}
                      </option>
                      <option value="web-dev">
                        {locale === "ar" ? "تصميم وتطوير المواقع" : "Web Development"}
                      </option>
                      <option value="game-dev">
                        {locale === "ar" ? "تطوير وصناعة الألعاب" : "Game Development"}
                      </option>
                      <option value="ai">
                        {locale === "ar" ? "الذكاء الاصطناعي" : "Artificial Intelligence"}
                      </option>
                      <option value="robotics">
                        {locale === "ar" ? "الروبوتات والإلكترونيات" : "Robotics"}
                      </option>
                      <option value="digital-design">
                        {locale === "ar" ? "التصميم الرقمي UI/UX" : "Digital Design"}
                      </option>
                      <option value="not-sure">
                        {locale === "ar" ? "غير متأكد (نحتاج استشارة)" : "Not sure (Need Consultation)"}
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {locale === "ar" ? "اسم ولي الأمر" : "Parent's Name"} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder={locale === "ar" ? "الاسم الكامل" : "Full Name"}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {locale === "ar" ? "رقم الهاتف" : "Phone Number"} *
                      </label>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 5x xxx xxxx"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {locale === "ar" ? "البريد الإلكتروني" : "Email Address"} *
                    </label>
                    <input
                      type="email"
                      required
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {locale === "ar" ? "ملاحظات أو أسئلة إضافية" : "Additional Notes or Questions"}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        locale === "ar"
                          ? "شاركنا أي تفاصيل عن اهتمامات طفلك..."
                          : "Share any details regarding your child's interests..."
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:bg-white focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{locale === "ar" ? "إرسال طلب التسجيل والاستشارة" : "Submit Consultation Request"}</span>
                  </button>
                </form>
              )}
            </Card>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <span>{locale === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}</span>
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-start font-bold text-slate-800 flex items-center justify-between gap-4 hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      <span className="text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
