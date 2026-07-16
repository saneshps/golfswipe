import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import TitleBanner from '@/components/ui/titleBanner'
import GpsCourseMapsShotPlanner from '@/components/sections/features/gpsCourseMapsShotPlanner'

export default function GpsCourseMapsShotPlannerPage() {
  return (
    <div>
      <Header />
      <main className="flex flex-1 flex-col">  
       <TitleBanner title="GPS Course Maps & Shot Planner"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "GPS Course Maps & Shot Planner" },
          ]}
        /> 
      <GpsCourseMapsShotPlanner />
      </main>
      <Footer />
    </div>
  )
}
