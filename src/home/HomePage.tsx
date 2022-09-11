/* eslint-disable max-len */
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
        tools={[
          'tensorflow',
          'django',
          'python',
          'jupyter',
          'websocket',
          'react',
          'typescript',
          'tailwind',
        ]}
        about={(
          <>
            <p>
              AI will make the vast majority of the pieces of music. Period. Because:
            </p>
            <ul className="flex flex-col gap-2 list-disc">
              <li>
                A well-trained machine can generate music orders of magnitude faster than humans.
              </li>
              <li>
                Can analyze the feedback from people at the seconds level endless, with petabytes of data.
              </li>
              <li>
                Can learn the preferences of individual listeners and create new music, especially for them.
              </li>
              <li>
                It is all the way cheaper and can be used on demand in videos, games, or even in a real-time real-life soundtrack.
              </li>
              <li>
                And this is my attempt to embrace this change.
              </li>
            </ul>
          </>
        )}
      />
      <PlantsSection />
      <MaiSection />
      <SonhinSection />
      <Footer />
    </>
  );
}
