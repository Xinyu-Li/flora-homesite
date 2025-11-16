import MainLayout from "@/components/layout/MainLayout";
import HomeClient from "@/components/home/HomeClient";
import { focusAreas, heroContent, metrics, newsHighlights, regionalSites } from "@/content/home";

export default function HomePage() {
  return (
    <MainLayout>
      <HomeClient
        hero={heroContent}
        sites={regionalSites}
        focusAreas={focusAreas}
        stats={metrics}
        highlights={newsHighlights}
      />
    </MainLayout>
  );
}
