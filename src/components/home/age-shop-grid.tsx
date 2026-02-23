import Link from "next/link"

const AGE_CARDS = [
  {
    title: "0-12 Months",
    description: "Tactile discovery and gentle sensory play",
    ctaLabel: "Shop 0-12M",
    href: "/shop/age/0-12m",
  },
  {
    title: "1-2 Years",
    description: "Fine motor basics and early cause & effect",
    ctaLabel: "Shop 1-2",
    href: "/shop/age/1-2",
  },
  {
    title: "3-4 Years",
    description: "Imaginative play and hands-on learning",
    ctaLabel: "Shop 3-4",
    href: "/shop/age/3-4",
  },
  {
    title: "5-7 Years",
    description: "Building focus, logic, and creative confidence",
    ctaLabel: "Shop 5-7",
    href: "/shop/age/5-7",
  },
  {
    title: "8+ Years",
    description: "STEM exploration and deeper challenges",
    ctaLabel: "Shop 8-plus",
    href: "/shop/age/8-plus",
  },
  {
    title: "Family Favorites",
    description: "Parent-loved picks for shared playtime",
    ctaLabel: "Shop Favorites",
    href: "/shop/scenario/favorites",
  },
]

export default function AgeShopGrid() {
  return (
    <section className="bg-white">
      <div className="content-container py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              Shop by age
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-black">
              Start with the right stage
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-black/60">
              Clear age guidance helps parents find the right fit fast.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AGE_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-black/5 bg-[#f9f7f2] p-6 shadow-[0_18px_40px_-32px_rgba(0,0,0,0.25)]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                {card.title}
              </p>
              <p className="mt-3 text-lg font-semibold text-black">
                {card.description}
              </p>
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
