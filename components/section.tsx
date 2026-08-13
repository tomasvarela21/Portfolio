import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps = {
  id: "section",
  title: "Sección",
  subtitle: undefined,
  children: null,
  className: "",
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-24", className)}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="mb-8">
          <h2 id={`${id}-title`} className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            <span className="relative inline-block">
              <span className="absolute -inset-x-1 bottom-0 top-6 rounded-full bg-primary/10 blur-sm" aria-hidden />
              {title}
            </span>
          </h2>
          {subtitle ? <p className="mt-2 text-muted-foreground">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
