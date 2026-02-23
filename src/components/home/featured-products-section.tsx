import { FEATURED_PRODUCTS } from "@lib/data/homepage"
import ProductsRow from "./products-row"

export default async function FeaturedProductsSection({
  countryCode,
}: {
  countryCode: string
}) {
  return (
    <ProductsRow
      countryCode={countryCode}
      title={FEATURED_PRODUCTS.eyebrow}
      subtitle={FEATURED_PRODUCTS.title}
      description={FEATURED_PRODUCTS.subtitle}
      strategy={FEATURED_PRODUCTS.strategy}
    />
  )
}
