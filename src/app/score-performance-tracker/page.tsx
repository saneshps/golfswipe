import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import TitleBanner from "@/components/ui/titleBanner";
import ScorePerformanceTracker from '@/components/sections/features/Score-Performance-Tracker';

export default function ScorePerformanceTrackerPage() {
  return (
    <div>
            <Header />
            <main className="flex flex-1 flex-col">  
       <TitleBanner title="Score Performance Tracker"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Score Performance Tracker" },
          ]}
        />

      <ScorePerformanceTracker />
            </main>
            <Footer />
        </div>
    );
}