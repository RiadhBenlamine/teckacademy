"use client";

import React, { useState } from "react";
import { Locale } from "@/lib/i18n";
import { siteMeta, projectItems, ProjectItem } from "@/data/academyData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProjectIllustration } from "@/components/ui/ProjectIllustration";
import { Eye, X, CheckCircle2 } from "lucide-react";

export function Projects({ locale }: { locale: Locale }) {
  const meta = siteMeta[locale];
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={locale === "ar" ? "مشاريع الطلاب" : "Student Showcase"}
          title={meta.projectsTitle}
          subtitle={meta.projectsSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectItems.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between border-slate-200/90 group hover:border-blue-400/40 p-5 sm:p-6"
            >
              <div>
                {/* Project Visual Illustration */}
                <div className="relative mb-5 rounded-2xl overflow-hidden">
                  <ProjectIllustration type={project.imageType} />
                  <div className="absolute top-3 end-3">
                    <Badge variant="primary" size="sm" className="bg-white/95 shadow-2xs backdrop-blur-xs">
                      {project.category[locale]}
                    </Badge>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title[locale]}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[44px]">
                  {project.description[locale]}
                </p>

                {/* Technologies Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="neutral" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* View Project Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 text-sm font-semibold transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>{locale === "ar" ? "معاينة تفاصيل المشروع" : "View Project Details"}</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 end-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label={locale === "ar" ? "إغلاق" : "Close"}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Illustration */}
            <div className="mb-6 rounded-2xl overflow-hidden">
              <ProjectIllustration type={selectedProject.imageType} />
            </div>

            <div className="inline-block mb-2">
              <Badge variant="primary" size="sm">
                {selectedProject.category[locale]}
              </Badge>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {selectedProject.title[locale]}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedProject.description[locale]}
            </p>

            <div className="space-y-3 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700">
              <div className="font-semibold text-slate-900">
                {locale === "ar" ? "المهارات المكتسبة في هذا المشروع:" : "Key skills acquired in this project:"}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  {locale === "ar"
                    ? "التفكير المنطقي وتحليل المشكلات خطوة بخطوة"
                    : "Logical reasoning and step-by-step problem solving"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                <span>
                  {locale === "ar"
                    ? "التطبيق العملي للتقنيات والبرمجة الحقيقية"
                    : "Hands-on execution using actual programming tools"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>
                  {locale === "ar"
                    ? "بناء منتج نهائي يمكن مشاركته وتطويره"
                    : "Building a deployable product that can be expanded"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech) => (
                <Badge key={tech} variant="neutral" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all"
            >
              {locale === "ar" ? "إغلاق المعاينة" : "Close Preview"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
