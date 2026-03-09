import MainHeader from "../../../components/layout/main-header"
import PrimaryNav from "../../../components/layout/primary-nav"
import AgeShopGrid from "../../../components/home/age-shop-grid"
import CategoryHighlights from "../../../components/home/category-highlights"
import FeaturedProductsSection from "../../../components/home/featured-products-section"
import HeroIntro from "../../../components/home/hero-intro"

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  return (
    <div className="bg-[var(--bg-canvas)]">
      <div className="sticky top-0 z-50">
        <MainHeader />
        <PrimaryNav />
      </div>

      <main>
        <HeroIntro />
        <FeaturedProductsSection countryCode={params.countryCode} />
        <CategoryHighlights />
        <AgeShopGrid />
      </main>
    </div>
  )
}
