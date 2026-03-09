import MainHeader from "../../../components/layout/main-header"
import PrimaryNav from "../../../components/layout/primary-nav"
import AgeShopGrid from "../../../components/home/age-shop-grid"
import FeaturedProductsSection from "../../../components/home/featured-products-section"
import HeroIntro from "../../../components/home/hero-intro"
import LearningToolsSpotlight from "../../../components/home/learning-tools-spotlight"

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  return (
    <div className="bg-[#f9f6f1]">
      <div className="sticky top-0 z-50">
        <MainHeader />
        <PrimaryNav />
      </div>

      <main>
        <HeroIntro />
        <FeaturedProductsSection countryCode={params.countryCode} />
        <LearningToolsSpotlight />
        <AgeShopGrid />
      </main>
    </div>
  )
}
