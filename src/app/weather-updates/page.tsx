import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import WeatherUpdates from "@/components/sections/features/weather-updates";
import TitleBanner from "@/components/ui/titleBanner";

export default function WeatherUpdatesPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col">
        <TitleBanner
          title="Weather Updates"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Weather Updates" },
          ]}
        />
        <WeatherUpdates />
      </main>
      <Footer />
    </div>
  );
}


