import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/sections/home/hero";
import About from "@/components/sections/home/about";

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-white font-sans dark:bg-black">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}
