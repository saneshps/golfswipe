import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import TitleBanner from "@/components/ui/titleBanner";
import GolfTravelHub from "@/components/sections/features/GolfTravelHub";

export default function GolfTravelHubPage() {
    return (
        <div className="flex min-h-full flex-1 flex-col bg-white font-sans dark:bg-black">
            <Header />
            <main className="flex flex-1 flex-col">  
       <TitleBanner title="Golf Travel Hub" title="Golf Travel Hub"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Golf Travel Hub" },
          ]}
        />

      <GolfTravelHub />
            </main>
            <Footer />
        </div>
    );
}