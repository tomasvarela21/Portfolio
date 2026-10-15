import path from "node:path"
import React from "react"
import { Document, Font, Link, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer"
import { writeFile } from "node:fs/promises"
import {
  person,
  freelanceExperience,
  projects,
  cvExperience,
  additionalCvProjects,
  technicalSkillGroups,
  translations,
  type Training,
} from "../lib/data"

type Lang = "es" | "en"

Font.registerHyphenationCallback((word) => [word])

const labels: Record<Lang, Record<string, string>> = {
  es: {
    profile: "Perfil Profesional",
    skills: "Habilidades Técnicas",
    experience: "Experiencia y Proyectos",
    education: "Educación",
    trainings: "Cursos y Certificaciones",
    languages: "Idiomas",
    additionalProjects: "Otros proyectos para clientes",
    stack: "Tecnologías",
  },
  en: {
    profile: "Professional Summary",
    skills: "Technical Skills",
    experience: "Experience & Projects",
    education: "Education",
    trainings: "Courses & Certifications",
    languages: "Languages",
    additionalProjects: "Additional client projects",
    stack: "Technologies",
  },
}

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#111111",
  },
  name: {
    fontSize: 20,
    fontFamily: "Helvetica-Bold",
    color: "#17485a",
  },
  title: {
    fontSize: 12,
    marginTop: 2,
    color: "#222222",
  },
  contactLine: {
    fontSize: 9,
    marginTop: 6,
    color: "#333333",
  },
  contactLink: {
    color: "#17485a",
    textDecoration: "none",
  },
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#17485a",
    paddingBottom: 2,
    color: "#17485a",
  },
  paragraph: {
    fontSize: 10.5,
    lineHeight: 1.4,
  },
  bold: {
    fontFamily: "Helvetica-Bold",
  },
  itemBlock: {
    marginBottom: 8,
  },
  itemTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  itemTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    flexGrow: 1,
    flexShrink: 1,
  },
  itemDate: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: "#17485a",
  },
  itemSubtitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Oblique",
    marginTop: 1,
  },
  itemText: {
    fontSize: 10.5,
    lineHeight: 1.35,
    marginTop: 2,
  },
  bullet: {
    flexDirection: "row",
    marginTop: 3,
    gap: 5,
  },
  bulletMarker: {
    width: 6,
    fontSize: 10.5,
    lineHeight: 1.35,
  },
  bulletText: {
    flex: 1,
    fontSize: 10.5,
    lineHeight: 1.35,
  },
  itemMeta: {
    fontSize: 9,
    marginTop: 2,
    color: "#333333",
  },
  eduBlock: {
    marginBottom: 5,
  },
  eduTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
  },
  eduSubtitle: {
    fontSize: 10,
  },
  listLine: {
    fontSize: 10,
    marginBottom: 3,
  },
  pageNumber: {
    position: "absolute",
    bottom: 18,
    right: 40,
    fontSize: 8,
    color: "#666666",
  },
})

function CVDocument({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const l = labels[lang]
  const freelance = freelanceExperience[lang]
  const contactLinks = [
    { href: `mailto:${person.email}`, text: person.email },
    { href: person.linkedin, text: stripProtocol(person.linkedin) },
    { href: person.github, text: stripProtocol(person.github) },
    { href: person.portfolio, text: stripProtocol(person.portfolio) },
  ]

  const getProject = (slug: string) => {
    const project = projects.find((entry) => entry.slug === slug)
    if (!project) throw new Error(`Proyecto no encontrado: ${slug}`)
    return project
  }

  return (
    <Document title={`${person.name} – ${t.person.title}`} author={person.name} language={lang}>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.title}>{t.person.title}</Text>
        <Text style={styles.contactLine}>{person.location}</Text>
        <Text style={styles.contactLine}>
          {contactLinks.map((contact, index) => (
            <React.Fragment key={contact.href}>
              {index > 0 ? "  |  " : null}
              <Link src={contact.href} style={styles.contactLink}>{contact.text}</Link>
            </React.Fragment>
          ))}
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={45}>{l.profile}</Text>
          <Text style={styles.paragraph}>{t.person.profile}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={45}>{l.skills}</Text>
          {technicalSkillGroups.map((group) => (
            <Text key={group.id} style={styles.listLine} wrap={false}>
              <Text style={styles.bold}>{group.label[lang]}: </Text>
              {group.items.map((item) => item === "REST APIs" && lang === "es" ? "APIs REST" : item).join(", ")}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={65}>{l.experience}</Text>
          <View style={styles.itemBlock} wrap={false}>
            <View style={styles.itemTitleRow}>
              <Text style={styles.itemTitle}>{freelance.title}</Text>
              <Text style={styles.itemDate}>{freelance.period}</Text>
            </View>
            <Text style={styles.itemSubtitle}>{freelance.location}</Text>
            <Text style={styles.itemText}>{freelance.description}</Text>
          </View>
          {cvExperience.map((experience) => {
            const project = getProject(experience.slug)
            const localized = experience[lang]
            const organization = project.orgTranslations?.[lang] ?? project.org
            return (
              <View key={project.slug} style={styles.itemBlock} wrap={false}>
                <View style={styles.itemTitleRow}>
                  <Text style={styles.itemTitle}>{localized.title}</Text>
                  {project.period ? <Text style={styles.itemDate}>{project.period[lang]}</Text> : null}
                </View>
                {organization ? (
                  <Text style={styles.itemSubtitle}>{organization}</Text>
                ) : null}
                {localized.highlights.map((highlight) => (
                  <View key={highlight} style={styles.bullet}>
                    <Text style={styles.bulletMarker}>•</Text>
                    <Text style={styles.bulletText}>{highlight}</Text>
                  </View>
                ))}
                <Text style={styles.itemMeta}>
                  {l.stack}: {experience.stack.join(", ")}
                </Text>
              </View>
            )
          })}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle} minPresenceAhead={65}>{l.additionalProjects}</Text>
          {additionalCvProjects.map((entry) => {
            const project = getProject(entry.slug)
            return (
              <View key={entry.slug} style={styles.itemBlock} wrap={false}>
                <View style={styles.itemTitleRow}>
                  <Text style={styles.itemTitle}>{project.translations[lang].title}</Text>
                  {project.period ? <Text style={styles.itemDate}>{project.period[lang]}</Text> : null}
                </View>
                <Text style={styles.itemText}>{entry[lang]}</Text>
              </View>
            )
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={55}>{l.education}</Text>
          {t.education.map((edu) => (
            <View key={edu.program} style={styles.eduBlock} wrap={false}>
              <Text style={styles.eduTitle}>{edu.program}</Text>
              <Text style={styles.eduSubtitle}>
                {edu.institution} — {edu.period}
              </Text>
              <Text style={styles.eduSubtitle}>{edu.status}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle} minPresenceAhead={50}>{l.trainings}</Text>
          {t.trainings.map((training: Training) => (
            <View key={training.title} style={styles.eduBlock} wrap={false}>
              <Text style={styles.listLine}>
                {training.title} — {training.provider}
              </Text>
              {training.details ? <Text style={styles.itemMeta}>{training.details}</Text> : null}
            </View>
          ))}
        </View>

        <View style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>{l.languages}</Text>
          {t.languages.map((lg) => (
            <Text key={lg.language} style={styles.listLine}>
              {lg.language}: {lg.level}
            </Text>
          ))}
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  )
}

async function generate(lang: Lang, fileName: string) {
  const outputPath = path.join(process.cwd(), "public", fileName)
  const buffer = await pdf(<CVDocument lang={lang} />).toBuffer()
  const chunks: Buffer[] = []
  for await (const chunk of buffer) {
    chunks.push(chunk as Buffer)
  }
  await writeFile(outputPath, Buffer.concat(chunks))
  console.log(`CV generado: ${outputPath}`)
}

async function main() {
  await generate("es", "Tomas_Varela_CV_es.pdf")
  await generate("en", "Tomas_Varela_CV_En.pdf")
}

main().catch((error) => {
  console.error("Error generando los CVs:", error)
  process.exit(1)
})
