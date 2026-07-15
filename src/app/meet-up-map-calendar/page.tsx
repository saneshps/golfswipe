import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import TitleBanner from "@/components/ui/titleBanner";
import MeetUpMapCalendar from "@/components/sections/features/meetUpMapCalendar";

export default function MeetUpMapCalendarPage() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col">
        <TitleBanner
          title="Meet-Up Map & Calendar"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Meet-Up Map & Calendar" },
          ]}
        />
        <MeetUpMapCalendar />
      </main>
      <Footer />
    </div>
  );
}
