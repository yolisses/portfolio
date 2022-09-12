/* eslint-disable max-len */
import { ProjectSection } from '../common/ProjectSection';
import { Tools } from '../common/Tools';
import { PlantsExtra } from './PlantsExtra';
import { ProjectDetails } from './ProjectDetails';

export function PlantsSection() {
  return (
    <ProjectSection
      name="plants"
      title="SuasPlantas"
      extra={<PlantsExtra />}
      className="bg-green-100"
      url="https://suasplantas.com"
      style={{ fontFamily: "'Ubuntu', sans-serif" }}
    >
      <h3>About</h3>
      <p>
        SuasPlantas is a Tinder-like app to get plant seeds and seedlings for free. I had this idea by questioning what else the internet can give without costs (beyond software, education, and entertainment) and by observing a common habit of people around me of giving away plants.
      </p>
      <p>
        It looked like a great idea. I found Facebook groups with dozens of thousands of members to do so. Even without location and map features. The people are constantly asking in the feed who lives next to them in a very inefficient way.
      </p>

      <ProjectDetails title="Motivation">
        a
      </ProjectDetails>

      <Tools names={[
        'nextjs',
        'react',
        'express',
        'nodejs',
        'typescript',
        'postgresql',
        's3',
        'socketio',
      ]}
      />
    </ProjectSection>
  );
}
