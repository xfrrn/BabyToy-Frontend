import Link from "next/link"

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
]

export default function ShopSortBar({
  countryCode,
  pathname,
  searchParams,
  total,
}: {
  countryCode: string
  pathname: string
  searchParams: Record<string, string | undefined>
  total: number
}) {
  const current = searchParams.sort ?? "featured"

  const buildQuery = (value: string) => {
    const next: Record<string, string> = {}
    Object.entries(searchParams).forEach(([key, val]) => {
      if (val) next[key] = val
    })
    if (value === "featured") {
      delete next.sort
    } else {
      next.sort = value
    }
    return next
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white/90 px-4 py-3 text-sm text-black/60 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.3)]">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs uppercase tracking-[0.22em] text-black/40">
          Sort
        </span>
        <div className="flex flex-wrap gap-2">
          {SORT_OPTIONS.map((option) => (
            <Link
              key={option.value}
              href={{
                pathname: `/${countryCode}${pathname}`,
                query: buildQuery(option.value),
              }}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                current === option.value
                  ? "border-black/30 bg-black text-white"
                  : "border-black/10 text-black/60 hover:border-black/20"
              }`}
            >
              {option.label}
            </Link>
          ))}
        </div>
      </div>
      <span className="text-xs uppercase tracking-[0.22em] text-black/40">
        {total} items
      </span>
    </div>
  )
}
