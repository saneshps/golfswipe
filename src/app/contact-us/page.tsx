import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import TitleBanner from "@/components/ui/titleBanner";
import ContactUs from "@/components/sections/contact/contact";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="flex flex-1 flex-col">
        <TitleBanner
          title="Contact Us"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
        />

        <ContactUs />
      </main>

      <Footer />
    </>
  );
}
