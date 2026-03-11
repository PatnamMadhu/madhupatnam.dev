import { HeroSection } from "@/components/HeroSection";
import { SiteShell } from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell activeSection="index">
      <HeroSection />
    </SiteShell>
  );
}
