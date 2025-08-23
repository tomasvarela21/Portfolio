import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, CheckCircle } from 'lucide-react'
import type { Project } from "@/lib/data"

export default function ExperienceCards({
  items,
}: {
  items: Project[]
} = {
  items: [
    {
      slug: "example",
      title: "Example Experience",
      role: "Developer",
      description: "Did things.",
      impact: "Had impact.",
      stack: ["Next.js"],
      image: { src: "/example-text.png", alt: "Example" },
    },
  ],
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <Card key={item.slug} className="relative">
          <CardHeader>
            <CardTitle className="flex items-start justify-between gap-3">
              <span className="leading-tight">{item.title}</span>
              <Briefcase className="h-5 w-5 text-emerald-700" aria-hidden />
            </CardTitle>
            {item.role ? <p className="text-xs text-muted-foreground">{item.role}</p> : null}
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <div className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" aria-hidden />
              <p className="text-sm">
                <span className="font-medium">Impact: </span>
                <span className="text-muted-foreground">{item.impact}</span>
              </p>
            </div>
            <ul className="mt-2 grid list-disc gap-1 pl-5 text-sm text-muted-foreground">
              {item.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
