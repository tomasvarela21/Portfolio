import path from "node:path"
import React from "react"
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer"
import { writeFile } from "node:fs/promises"
import {
  person,
  projects,
  technicalSkills,
  translations,
  type Project,
} from "../lib/data"

type Lang = "es" | "en"

const labels: Record<Lang, Record<string, string>> = {
  es: {
    profile: "Perfil Profesional",
    skills: "Habilidades Tecnicas",
    experience: "Experiencia y Proyectos",
    education: "Educacion",
    trainings: "Cursos y Formacion",
    languages: "Idiomas",
    softSkills: "Habilidades Blandas",
    impact: "Impacto",
    stack: "Tecnologias",
    role: "Rol",
  },
  en: {
    profile: "Professional Summary",
    skills: "Technical Skills",
    experience: "Experience & Projects",
    education: "Education",
    trainings: "Courses & Training",
    languages: "Languages",
    softSkills: "Soft Skills",
    impact: "Impact",
    stack: "Technologies",
    role: "Role",
  },
}

const stripProtocol = (url: string) => url.replace(/^https?:\/\//, "")

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
  section: {
    marginTop: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: "#999999",
    paddingBottom: 2,
  },
  paragraph: {
    fontSize: 10,
    lineHeight: 1.4,
  },
  itemBlock: {
    marginBottom: 8,
  },
  itemTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemTitle: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
  },
  itemSubtitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Oblique",
    marginTop: 1,
  },
  itemText: {
    fontSize: 9.5,
    lineHeight: 1.35,
    marginTop: 2,
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
    fontSize: 9.5,
  },
  listLine: {
    fontSize: 9.5,
    marginBottom: 3,
  },
})

function CVDocument({ lang }: { lang: Lang }) {
  const t = translations[lang]
  const l = labels[lang]

  const projectRoleLabel = (project: Project) =>
    [project.role, project.org].filter(Boolean).join(" · ")

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{person.name}</Text>
        <Text style={styles.title}>{t.person.title}</Text>
        <Text style={styles.contactLine}>
          {[
            person.location,
            person.email,
            stripProtocol(person.linkedin),
            stripProtocol(person.github),
          ].join("  |  ")}
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.profile}</Text>
          <Text style={styles.paragraph}>{t.person.profile}</Text>
          <Text style={[styles.paragraph, { marginTop: 4 }]}>{t.person.objectives}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.skills}</Text>
          <Text style={styles.paragraph}>{technicalSkills.join(", ")}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.experience}</Text>
          {projects.map((project) => {
            const localized = project.translations[lang]
            return (
              <View key={project.slug} style={styles.itemBlock} wrap={false}>
                <View style={styles.itemTitleRow}>
                  <Text style={styles.itemTitle}>{localized.title}</Text>
                </View>
                {projectRoleLabel(project) ? (
                  <Text style={styles.itemSubtitle}>{projectRoleLabel(project)}</Text>
                ) : null}
                <Text style={styles.itemText}>{localized.description}</Text>
                <Text style={styles.itemText}>
                  {l.impact}: {localized.impact}
                </Text>
                <Text style={styles.itemMeta}>
                  {l.stack}: {project.stack.join(", ")}
                </Text>
              </View>
            )
          })}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.education}</Text>
          {t.education.map((edu) => (
            <View key={edu.program} style={styles.eduBlock}>
              <Text style={styles.eduTitle}>{edu.program}</Text>
              <Text style={styles.eduSubtitle}>
                {edu.institution} — {edu.status}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.trainings}</Text>
          {t.trainings.map((training) => (
            <Text key={training.title} style={styles.listLine}>
              {training.title} — {training.provider}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.languages}</Text>
          {t.languages.map((lg) => (
            <Text key={lg.language} style={styles.listLine}>
              {lg.language}: {lg.level}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{l.softSkills}</Text>
          <Text style={styles.paragraph}>{t.softSkills.join(", ")}</Text>
        </View>
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
