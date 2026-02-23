import Link from "next/link"
import Image from "next/image"

import { HttpTypes } from "@medusajs/types"

import {
  getAgeRange,
  getHighlight,
  getSkills,
  getToyType,
} from "@lib/util/product-meta"

export default function ProductCard({
  product,
  countryCode,
  priceLabel,
}: {
  product: HttpTypes.StoreProduct
  countryCode: string
  priceLabel: string
}) {
  const ageRange = getAgeRange(product)
  const toyType = getToyType(product)
  const highlight = getHighlight(product)
  const skills = getSkills(product)

  return (
    <Link
      href={`/${countryCode}/products/${product.handle}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white/95 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(0,0,0,0.4)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
        {product.thumbnail ? (
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.2em] text-black/40">
            No Image
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="text-xl font-semibold text-black">{product.title}</h3>
          {product.subtitle ? (
            <p className="mt-2 text-sm text-black/60">{product.subtitle}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {ageRange ? (
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Age {ageRange}
            </span>
          ) : null}
          {toyType ? (
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              {toyType}
            </span>
          ) : null}
          {highlight ? (
            <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              {highlight}
            </span>
          ) : null}
          {skills.slice(0, 1).map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-sm text-black/70 line-clamp-2">
          {product.description ||
            "Age-appropriate play with clear guidance for parents."}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="font-semibold text-black">{priceLabel}</span>
          <span className="text-xs uppercase tracking-[0.2em] text-black/40">
            View details
          </span>
        </div>
      </div>
    </Link>
  )
}
