import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import TitleBanner from "@/components/ui/titleBanner";
import GolfJobsBoard from "@/components/sections/features/golf-jobs-board";

export default function GolfJobsBoardPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">  
        <TitleBanner title="Golf Jobs Board"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Golf Jobs Board" },
          ]}
        />
        <GolfJobsBoard />
      </main>
      <Footer />
    </>
  )
}