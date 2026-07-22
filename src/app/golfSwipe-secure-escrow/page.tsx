import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import BuyerAndSellerProtection from "@/components/sections/golfSwipe-secure-escrow/golfSwipe-secure-escrow";
import TitleBanner from "@/components/ui/titleBanner";

export default function BuyerAndSellerProtectionPage() {
  return (
    <div>
      <Header />
      <main className="flex flex-1 flex-col">  
      <TitleBanner title="GolfSwipe Secure Escrow"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "GolfSwipe Secure Escrow" },
          ]}
        />
        <BuyerAndSellerProtection />
      </main>
      <Footer />
    </div>
  );
}