import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"

type QueryStrategy = "default" | "newest"

export default async function ProductsRow({
  countryCode,
  title,
  subtitle,
  description,
  strategy = "default",
}: {
  countryCode: string
  title: string
  subtitle: string
  description?: string
  strategy?: QueryStrategy
}) {
  const region = await getRegion(countryCode)
  if (!region) {
    return null
  }

  const {
    response: { products },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      limit: 8,
      fields:
        "id,handle,title,subtitle,thumbnail,images,metadata,created_at,updated_at,*variants.calculated_price",
    },
  })

  if (!products.length) {
    return null
  }

  const sorted = [...products]

  if (strategy === "newest") {
    sorted.sort((a, b) => {
      const aTime = new Date(a.created_at || 0).getTime()
      const bTime = new Date(b.created_at || 0).getTime()
      return bTime - aTime
    })
  }

  return (
    <section className="bg-white">
      <div className="content-container py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-black/40">
              {title}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-black">
              {subtitle}
            </h2>
            {description ? (
              <p className="mt-3 max-w-2xl text-sm text-black/60">
                {description}
              </p>
            ) : null}
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {sorted.map((product) => {
            const ageRange =
              typeof product.metadata?.age_range === "string"
                ? product.metadata.age_range
                : null

            return (
              <li key={product.id} className="relative">
                {ageRange ? (
                  <span className="absolute left-3 top-3 z-10 rounded-full border border-black/10 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/60">
                    Ages {ageRange}
                  </span>
                ) : null}
                <div className="rounded-3xl border border-black/5 bg-[#f9f7f2] p-4 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.3)]">
                  <ProductPreview
                    product={product as HttpTypes.StoreProduct}
                    region={region}
                    isFeatured
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
