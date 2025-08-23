import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Wrench, LanguagesIcon, Users } from 'lucide-react'
import { technicalSkills, softSkills, languages } from "@/lib/data"

export default function SkillsSection({}: Record<string, never> = {}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-emerald-700" />
            Languages
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {technicalSkills.map((s) => (
            <Badge key={s} variant="secondary" className="bg-emerald-50 text-emerald-800">
              {s}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-emerald-700" />
            Databases
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {technicalSkills.databases.map((s) => (
            <Badge key={s} variant="secondary" className="bg-emerald-50 text-emerald-800">
              {s}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-emerald-700" />
            Frameworks & Libraries
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {technicalSkills.frameworks.map((s) => (
            <Badge key={s} variant="secondary" className="bg-emerald-50 text-emerald-800">
              {s}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-emerald-700" />
            Tools & Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {technicalSkills.tools.map((s) => (
            <Badge key={s} variant="secondary" className="bg-emerald-50 text-emerald-800">
              {s}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-emerald-700" />
            Soft Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <Badge key={s} variant="outline" className="border-emerald-200 text-emerald-800">
              {s}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LanguagesIcon className="h-5 w-5 text-emerald-700" />
            Languages
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {languages.map((l) => (
            <Badge key={l.language} variant="secondary" className="bg-emerald-50 text-emerald-800">
              {l.language} — {l.level}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
