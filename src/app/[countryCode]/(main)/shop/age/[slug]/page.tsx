import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"

import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ShopLandingPage from "@components/shop/shop-landing-page"
import { matchesAgeRange, matchesCategoryKey } from "@lib/util/product-meta"
import { sortProducts } from "@lib/util/shop-sort"
import ShopSortBar from "@components/shop/shop-sort-bar"

const AGE_PAGES: Record<string, { title: string; description: string }> = {
  "0-24-months": {
    title: "0-24 Months",
    description: "Gentle sensory discovery and early developmental play.",
  },
  "2-4-years": {
    title: "2-4 Years",
    description: "Early imagination, movement, and hands-on exploration.",
  },
  "5-7-years": {
    title: "5-7 Years",
    description: "Building focus, confidence, and creative problem solving.",
  },
  "8-10-years": {
    title: "8-10 Years",
    description: "Independent learning tools for growing curious minds.",
  },
  "11-13-years": {
    title: "11-13 Years",
    description: "More advanced challenges for deeper thinking and practice.",
  },
  "14-plus-years": {
    title: "14+ Years",
    description: "Advanced picks for teens and older learners.",
  },
}

const CATEGORY_FILTERS = [
  { label: "All", value: "all" },
  { label: "Building", value: "building" },
  { label: "Sensory", value: "sensory" },
  { label: "Puzzles", value: "puzzles" },
  { label: "STEM", value: "stem" },
  { label: "Pretend", value: "pretend" },
  { label: "Travel", value: "travel" },
]

type Props = {
  params: Promise<{ countryCode: string; slug: string }>
  searchParams: Promise<{ sort?: string; cat?: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const page = AGE_PAGES[params.slug]
  if (!page) return { title: "Age Collection" }

  return {
    title: `Ages ${page.title} | Shop by Age`,
    description: page.description,
  }
}

export default async function AgeLandingPage(props: Props) {
  const params = await props.params
  const searchParams = await props.searchParams
  const page = AGE_PAGES[params.slug]

  if (!page) {
    notFound()
  }

  const region = await getRegion(params.countryCode)
  if (!region) {
    notFound()
  }

  const {
    response: { products },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      limit: 24,
      fields: "*variants.calculated_price,+metadata,created_at",
    },
  })

  const ageFiltered = products.filter((product) =>
    matchesAgeRange(product, params.slug)
  )

  const category = searchParams.cat ?? "all"
  const categoryFiltered =
    category === "all"
      ? ageFiltered
      : ageFiltered.filter((product) => matchesCategoryKey(product, category))

  const sorted = sortProducts(categoryFiltered, searchParams.sort)

  return (
    <ShopLandingPage
      eyebrow="Shop by age"
      title={`Ages ${page.title}`}
      description={page.description}
      emptyMessage="No products tagged for this age yet. Add metadata.age_range to match this age group."
      products={sorted}
      region={region}
      homeHref={`/${params.countryCode}`}
      actions={
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((filter) => (
              <Link
                key={filter.value}
                href={{
                  pathname: `/${params.countryCode}/shop/age/${params.slug}`,
                  query: {
                    ...searchParams,
                    cat: filter.value === "all" ? undefined : filter.value,
                  },
                }}
                className={`rounded-full border px-3 py-1 text-xs transition ${
                  category === filter.value
                    ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                    : "border-black/10 text-black/60 hover:border-black/20"
                }`}
              >
                {filter.label}
              </Link>
            ))}
          </div>
          <ShopSortBar
            countryCode={params.countryCode}
            pathname={`/shop/age/${params.slug}`}
            searchParams={{ sort: searchParams.sort, cat: searchParams.cat }}
            total={sorted.length}
          />
        </div>
      }
    />
  )
}
