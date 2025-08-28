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

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200">
      <SiteHeader />

      <section id="presentacion" className="scroll-mt-24">
        <Hero />
      </section>

      <Section id="tecnologias" title={t("tech.title")} subtitle={t("tech.subtitle")} className="bg-neutral-950">
        <Reveal>
          <TechnologiesSection />
        </Reveal>
      </Section>

      <Section id="proyectos" title={t("projects.title")} subtitle={t("projects.subtitle")} className="bg-neutral-950">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={100 * i}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section id="sobre-mi" title={t("about.title")} subtitle={t("about.subtitle")} className="bg-neutral-950">
        <Reveal>
          <AboutSection />
        </Reveal>
      </Section>

      <Section id="certificados" title={t("cert.title")} subtitle={t("cert.subtitle")} className="bg-neutral-950">
        <Reveal>
          <CertificationsLearning />
        </Reveal>
      </Section>

      <Section id="contacto" title={t("contact.title")} subtitle={t("contact.subtitle")} className="bg-neutral-950">
        <Reveal>
          <ContactSection />
        </Reveal>
      </Section>

      <SiteFooter />
    </main>
  )
}