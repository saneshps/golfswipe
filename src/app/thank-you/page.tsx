import type { Metadata } from "next";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ThankYou from "@/components/sections/thank-you/thankYou";

export const metadata: Metadata = {
  title: "Thank You | GolfSwipe",
  description:
    "Thanks for contacting GolfSwipe. We've received your message and will reply soon.",
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white font-sans">
      <Header />
      <main className="flex flex-1 flex-col">
        <ThankYou />
      </main>
      <Footer />
    </div>
  );
}
