import { PlantsSection } from '../plants/PlantsSection';
import { IntroSection } from './IntroSection';

export function HomePage() {
  return (
    <div>
      <IntroSection />
      <PlantsSection />
    </div>
  );
}
