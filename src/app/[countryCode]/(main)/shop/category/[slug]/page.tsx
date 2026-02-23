import { Metadata } from "next"

import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ShopLandingPage from "@components/shop/shop-landing-page"
import { matchesCategoryKey } from "@lib/util/product-meta"
import { sortProducts } from "@lib/util/shop-sort"
import ShopSortBar from "@components/shop/shop-sort-bar"

type Props = {
  params: Promise<{ countryCode: string; slug: string }>
  searchParams: Promise<{ sort?: string }>
}

const CATEGORY_PAGES: Record<string, { title: string; description: string }> = {
  building: {
    title: "Building Toys",
    description: "Construction toys that build confidence and focus.",
  },
  sensory: {
    title: "Sensory Play",
    description: "Textures and motion for calm discovery.",
  },
  puzzles: {
    title: "Puzzles",
    description: "Problem solving that feels fun, not frustrating.",
  },
  stem: {
    title: "STEM Learning",
    description: "Curiosity-led science and engineering play.",
  },
  pretend: {
    title: "Pretend Play",
    description: "Role play for storytelling and empathy.",
  },
  travel: {
    title: "Travel Toys",
    description: "Compact play for on-the-go moments.",
  },
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const page = CATEGORY_PAGES[params.slug]

  return {
    title: page ? `${page.title} | Categories` : "Category",
    description: page?.description,
  }
}

export default async function CategoryLandingPage(props: Props) {
  const params = await props.params
  const searchParams = await props.searchParams
  const page = CATEGORY_PAGES[params.slug]

  const region = await getRegion(params.countryCode)
  if (!region) {
    return null
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

  const filtered = products.filter((product) =>
    matchesCategoryKey(product, params.slug)
  )

  const sorted = sortProducts(filtered, searchParams.sort)

  return (
    <ShopLandingPage
      eyebrow="Category"
      title={page?.title ?? "Category"}
      description={page?.description ?? "More curated play styles coming soon."}
      emptyMessage="No products tagged for this category yet. Add metadata.category_key to match this category."
      products={sorted}
      region={region}
      homeHref={`/${params.countryCode}`}
      actions={
        <ShopSortBar
          countryCode={params.countryCode}
          pathname={`/shop/category/${params.slug}`}
          searchParams={{ sort: searchParams.sort }}
          total={sorted.length}
        />
      }
    />
  )
}
