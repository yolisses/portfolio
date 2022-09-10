import { MaiSection } from '../mai/MaiSection';
import { PlantsSection } from '../plants/PlantsSection';
import { SonhinSection } from '../sonhin/SonhinSection';
import { IntroSection } from './IntroSection';

export function HomePage() {
  return (
    <div>
      <IntroSection />
      <PlantsSection />
      <MaiSection />
      <SonhinSection />
    </div>
  );
}
