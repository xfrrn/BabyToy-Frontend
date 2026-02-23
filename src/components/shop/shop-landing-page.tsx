import Link from "next/link"
import { ReactNode } from "react"

import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"

export default function ShopLandingPage({
  eyebrow,
  title,
  description,
  emptyMessage,
  products,
  region,
  actions,
  homeHref,
}: {
  eyebrow: string
  title: string
  description: string
  emptyMessage: string
  products: HttpTypes.StoreProduct[]
  region: HttpTypes.StoreRegion
  actions?: ReactNode
  homeHref: string
}) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8f4ed_0%,#f3efe6_55%,#efe9df_100%)]">
      <div className="content-container py-12">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href={homeHref}
            className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-black/60 hover:border-black/20"
          >
            Home
          </Link>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white/90 p-8 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.35)]">
          <p className="text-xs uppercase tracking-[0.3em] text-black/40">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-black">{title}</h1>
          <p className="mt-3 text-sm text-black/60">{description}</p>
        </div>

        {actions ? <div className="mt-6">{actions}</div> : null}

        <div className="mt-10">
          {products.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-black/20 bg-white/70 p-12 text-center text-sm text-black/60">
              {emptyMessage}
            </div>
          ) : (
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {products.map((product) => (
                <li
                  key={product.id}
                  className="rounded-3xl border border-black/5 bg-white p-4 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.3)]"
                >
                  <ProductPreview product={product} region={region} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
