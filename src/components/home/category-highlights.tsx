import Link from "next/link"

const CATEGORY_CARDS = [
  {
    title: "Building Toys",
    description: "Construction sets and hands-on tools that build focus and confidence.",
    ctaLabel: "Learn More",
    href: "/shop/category/building",
  },
  {
    title: "Sensory Play",
    description: "Textures, movement, and calming play experiences for curious kids.",
    ctaLabel: "Learn More",
    href: "/shop/category/sensory",
  },
  {
    title: "Puzzles",
    description: "Problem-solving activities designed to feel engaging, not overwhelming.",
    ctaLabel: "Learn More",
    href: "/shop/category/puzzles",
  },
  {
    title: "STEM Learning",
    description: "Science, engineering, and logic tools for discovery-led learning.",
    ctaLabel: "Learn More",
    href: "/shop/category/stem",
  },
  {
    title: "Pretend Play",
    description: "Role-play toys that support storytelling, empathy, and imagination.",
    ctaLabel: "Learn More",
    href: "/shop/category/pretend",
  },
  {
    title: "Travel Toys",
    description: "Compact learning toys that are easy to take on the go.",
    ctaLabel: "Learn More",
    href: "/shop/category/travel",
  },
]

export default function CategoryHighlights() {
  return (
    <section className="bg-[var(--bg-canvas)]">
      <div className="content-container py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              Category
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-black">
              Shop by category
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-black/60">
              Explore product categories and find the learning style that fits best.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              aria-label={card.ctaLabel}
              className="group relative overflow-hidden rounded-3xl border border-[color:var(--border-soft)] bg-[var(--bg-card)] p-6 shadow-[0_16px_36px_-28px_rgba(85,63,39,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[color:var(--accent)]/20 hover:shadow-[0_24px_50px_-32px_rgba(92,72,45,0.24)]"
            >
              <div className="pointer-events-none absolute left-10 top-6 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(232,241,228,0.9)_0%,rgba(232,241,228,0)_70%)] opacity-0 blur-xl transition duration-300 ease-out group-hover:opacity-100" />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--text-muted)] transition duration-300 ease-out group-hover:text-[color:var(--accent)]">
                    Category
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-black transition duration-300 ease-out group-hover:-translate-y-0.5 group-hover:text-[color:var(--accent-strong)]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-[color:var(--text-body)]">{card.description}</p>
                </div>
                <div className="ml-4 h-12 w-12 rounded-2xl bg-[rgba(255,250,242,0.72)] transition duration-300 ease-out group-hover:scale-110 group-hover:bg-[var(--accent-soft)]" />
              </div>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-soft)] bg-[rgba(255,250,242,0.72)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--text-body)] transition duration-300 ease-out group-hover:border-[color:var(--accent)] group-hover:bg-[var(--accent-soft)] group-hover:text-[color:var(--accent-strong)]">
                {card.ctaLabel}
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
