/* eslint-disable max-len */
import { Footer } from '../footer/Footer';
import { IntroSection } from './IntroSection';
import { MaiSection } from '../mai/MaiSection';
import { PlantsSection } from '../plants/PlantsSection';
import { SonhinSection } from '../sonhin/SonhinSection';
import { ContactButton } from '../contact/ContactButton';

export function HomePage() {
  return (
    <>
      <IntroSection />
      <ContactButton />
      <PlantsSection />
      <MaiSection />
      <SonhinSection />
      <Footer />
    </>
  );
}
