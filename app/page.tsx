"use client"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Section from "@/components/section"
import Hero from "@/components/hero"
import TechnologiesSection from "@/components/technologies-section"
import ProjectCard from "@/components/project-card"
import AboutSection from "@/components/about-section"
import CertificationsLearning from "@/components/certifications-learning-section"
import ContactSection from "@/components/contact-section"
import Reveal from "@/components/reveal"
import { projects } from "@/lib/data"
import { useLanguage } from "@/contexts/language-context"

export default function Page() {
  const { t } = useLanguage()
  const projectOrder = [
    "korex-saas-training-platform",
    "de-la-rosa-white-label-korex",
    "reporteapp-multi-company-accounting",
    "consorcioapp-multisite-console",
    "chapulina-inventory-suite",
    "olivetuc-web",
    "alenort-management-system",
  ]
  const orderedProjects = projectOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project))

  return (
    <main className="portfolio-shell min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section id="presentacion" className="scroll-mt-24">
        <Hero />
      </section>

      <Section id="tecnologias" title={t("tech.title")} subtitle={t("tech.subtitle")} className="bg-transparent">
        <Reveal>
          <TechnologiesSection />
        </Reveal>
      </Section>

      <Section id="proyectos" title={t("projects.title")} subtitle={t("projects.subtitle")} className="bg-transparent">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {orderedProjects.map((p, i) => (
              <Reveal key={p.slug} delay={100 * i}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="sobre-mi" title={t("about.title")} subtitle={t("about.subtitle")} className="bg-transparent">
        <Reveal>
          <AboutSection />
        </Reveal>
      </Section>

      <Section id="certificados" title={t("cert.title")} subtitle={t("cert.subtitle")} className="bg-transparent">
        <Reveal>
          <CertificationsLearning />
        </Reveal>
      </Section>

      <Section id="contacto" title={t("contact.title")} subtitle={t("contact.subtitle")} className="bg-transparent">
        <Reveal>
          <ContactSection />
        </Reveal>
      </Section>

      <SiteFooter />
    </main>
  )
}
