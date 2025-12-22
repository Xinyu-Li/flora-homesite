import HomeClient from '@/components/home/HomeClient';
import { focusAreas, heroContent, metrics, newsHighlights, regionalSites } from '@/content/home';

const HomePage = () => {
  return (
    <HomeClient
      hero={heroContent}
      sites={regionalSites}
      focusAreas={focusAreas}
      stats={metrics}
      highlights={newsHighlights}
    />
  );
};

export default HomePage;
