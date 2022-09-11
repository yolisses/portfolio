import { Footer } from '../footer/Footer';
import { IntroSection } from './IntroSection';
import { MaiSection } from '../mai/MaiSection';
import { PlantsSection } from '../plants/PlantsSection';
import { SonhinSection } from '../sonhin/SonhinSection';
import { ProjectSection } from '../common/ProjectSection';

export function HomePage() {
  return (
    <>
      <IntroSection />
      <ProjectSection
        name="mai"
        title="Mai (Musical AI)"
      />
      <PlantsSection />
      <MaiSection />
      <SonhinSection />
      <Footer />
    </>
  );
}
