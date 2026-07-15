import Header from "@/components/ui/header";
import TitleBanner from "@/components/ui/titleBanner";
import Footer from "@/components/ui/footer";
import PricingAndBundles from "@/components/sections/pricing/pricingAndBundles";

export default function PricingPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col">
        <TitleBanner title="Pricing" breadcrumbs={[{ label: "Pricing", href: "/pricing" }]} />
        <PricingAndBundles />
      </main>
      <Footer />
    </div>
  );
}