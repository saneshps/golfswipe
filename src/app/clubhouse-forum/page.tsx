import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import TitleBanner from "@/components/ui/titleBanner";
import ClubhouseForum from "@/components/sections/features/clubhouseForum";

export default function ClubhouseForumPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">  
      <TitleBanner title="The Clubhouse Forum"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "The Clubhouse Forum" },
          ]}
        />
        <ClubhouseForum />
      </main>
      <Footer />
    </>
  )
}