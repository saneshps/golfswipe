import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import TitleBanner from "@/components/ui/titleBanner";
import BiWeeklyRulesQuiz from "@/components/sections/features/bi-weekly-rules-quiz";

export default function BiWeeklyRulesQuizPage() {
  return (
    <div>
    <Header />
    <main className="flex flex-1 flex-col">  
       <TitleBanner title="Bi-Weekly Rules Quiz"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Bi-Weekly Rules Quiz" },
          ]}
        />
        <BiWeeklyRulesQuiz />
      </main>
      <Footer />
    </div>
  );
}