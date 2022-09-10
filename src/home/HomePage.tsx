import { Footer } from '../footer/Footer';
import { IntroSection } from './IntroSection';
import { MaiSection } from '../mai/MaiSection';
import { PlantsSection } from '../plants/PlantsSection';
import { SonhinSection } from '../sonhin/SonhinSection';

export function HomePage() {
  return (
    <>
      <IntroSection />
      <PlantsSection />
      <MaiSection />
      <SonhinSection />
      <Footer />
    </>
  );
}
