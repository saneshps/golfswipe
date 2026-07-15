import TitleBanner from "@/components/ui/titleBanner";

export default function Hero() {
  return (
    <TitleBanner
      title="Marketplace"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Marketplace" },
      ]}
    />
  );
}
