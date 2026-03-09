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
    <section className="bg-white">
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
            <div
              key={card.title}
              className="rounded-3xl border border-black/5 bg-[#f9f7f2] p-6 shadow-[0_16px_36px_-28px_rgba(0,0,0,0.22)]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                    Category
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-black">{card.title}</h3>
                  <p className="mt-2 text-sm text-black/60">{card.description}</p>
                </div>
                <div className="ml-4 h-12 w-12 rounded-2xl bg-white/80" />
              </div>
              <Link
                href={card.href}
                aria-label={card.ctaLabel}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/70"
              >
                {card.ctaLabel}
                <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
