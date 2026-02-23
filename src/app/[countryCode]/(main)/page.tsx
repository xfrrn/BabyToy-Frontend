import AnnouncementBar from "../../../components/layout/announcement-bar"
import MainHeader from "../../../components/layout/main-header"
import PrimaryNav from "../../../components/layout/primary-nav"
import AgeShopGrid from "../../../components/home/age-shop-grid"
import BestSellersRow from "../../../components/home/best-sellers-row"
import BrandIntro from "../../../components/home/brand-intro"
import CategoryHighlights from "../../../components/home/category-highlights"
import FeaturedCollection from "../../../components/home/featured-collection"
import FaqMini from "../../../components/home/faq-mini"
import NewsletterStrip from "../../../components/home/newsletter-strip"
import NewArrivalsRow from "../../../components/home/new-arrivals-row"
import ScenarioPicks from "../../../components/home/scenario-picks"
import TrustStrip from "../../../components/home/trust-strip"
import VideoHero from "../../../components/home/video-hero"

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  return (
    <div className="bg-[#f9f6f1]">
      <div className="sticky top-0 z-50">
        <AnnouncementBar />
        <MainHeader />
        <PrimaryNav />
      </div>

      <VideoHero />
      <NewsletterStrip />
      <AgeShopGrid />
      <BestSellersRow countryCode={params.countryCode} />
      <BrandIntro />
      <CategoryHighlights />
      <FeaturedCollection countryCode={params.countryCode} />
      <NewArrivalsRow countryCode={params.countryCode} />
      <TrustStrip />
      <ScenarioPicks />
      <FaqMini />
    </div>
  )
}
