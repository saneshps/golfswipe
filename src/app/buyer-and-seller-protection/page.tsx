import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import BuyerAndSellerProtection from "@/components/sections/features/buyer-and-seller-protection";
import TitleBanner from "@/components/ui/titleBanner";

export default function BuyerAndSellerProtectionPage() {
  return (
    <div>
      <Header />
      <main className="flex flex-1 flex-col">  
      <TitleBanner title="Buyer and Seller Protection"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Buyer and Seller Protection" },
          ]}
        />
        <BuyerAndSellerProtection />
      </main>
      <Footer />
    </div>
  );
}