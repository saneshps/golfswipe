import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/sections/marketplace/hero";
import AboutGolfswipe from "@/components/sections/marketplace/aboutGolfswipe";
import MarketplacePricing from "@/components/sections/marketplace/marketplace_pricing";

export default function Marketplace() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <AboutGolfswipe />
        <MarketplacePricing />
      </main>
      <Footer />
    </div>
  );
}
