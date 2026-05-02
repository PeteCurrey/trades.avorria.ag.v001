import Hero from "@/components/home/hero";
import TrustBar from "@/components/home/trust-bar";
import TradesGrid from "@/components/home/trades-grid";
import TwoProducts from "@/components/home/two-products";
import StatsStrip from "@/components/home/stats-strip";
import HowItWorks from "@/components/home/how-it-works";
import PortfolioStrip from "@/components/home/portfolio-strip";
import Testimonials from "@/components/home/testimonials";
import HomeCTA from "@/components/home/home-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TradesGrid />
      <TwoProducts />
      <StatsStrip />
      <HowItWorks />
      <PortfolioStrip />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
