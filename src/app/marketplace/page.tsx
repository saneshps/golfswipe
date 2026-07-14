import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/sections/marketplace/hero";

export default function MarketplacePage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
