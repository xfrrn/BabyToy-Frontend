type SectionHeaderProps = {
  eyebrow: string
  title: string
  subtitle?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-black/40">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-black">{title}</h2>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-sm text-black/60">{subtitle}</p>
        ) : null}
      </div>
    </div>
  )
}
