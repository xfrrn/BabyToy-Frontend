import Link from "next/link"

import { SORT_OPTIONS } from "./constants"

type SearchParams = {
  age?: string
  type?: string
  price?: string
  skill?: string
  sort?: string
}

function buildQuery(searchParams: SearchParams, value?: string) {
  const next = { ...searchParams }
  if (!value || value === "recommended") {
    delete next.sort
  } else {
    next.sort = value
  }
  return next
}

export default function SortBar({
  countryCode,
  searchParams,
  total,
}: {
  countryCode: string
  searchParams: SearchParams
  total: number
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white/90 px-4 py-3 text-sm text-black/60 shadow-[0_12px_30px_-24px_rgba(0,0,0,0.3)]">
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-[0.22em] text-black/40">
          Sort
        </span>
        <div className="flex flex-wrap gap-2">
          {SORT_OPTIONS.map((option) => (
            <Link
              key={option.value}
              href={{
                pathname: `/${countryCode}/products`,
                query: buildQuery(searchParams, option.value),
              }}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                (searchParams.sort ?? "recommended") === option.value
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
