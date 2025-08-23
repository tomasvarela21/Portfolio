import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from 'lucide-react'
import { trainings, education } from "@/lib/data"

export default function CertificationsSection({}: Record<string, never> = {}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-emerald-700" />
            Certifications & Training
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {trainings.map((t) => (
              <li key={t.title} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" aria-hidden />
                <div>
                  <p className="font-medium">{t.title}</p>
                  <p className="text-sm text-muted-foreground">{t.provider}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-emerald-700" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={e.program} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-600" aria-hidden />
                <div>
                  <p className="font-medium">{e.program}</p>
                  <p className="text-sm text-muted-foreground">
                    {e.institution} • {e.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
