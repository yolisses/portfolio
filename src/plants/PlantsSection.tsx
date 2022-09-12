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
      faderColor="rgb(220 252 231)"
      url="https://suasplantas.com"
      style={{ fontFamily: "'Ubuntu', sans-serif" }}
    >
      <div className="explanation">
        <p>
          SuasPlantas is a Tinder-like web app to get plant seeds and seedlings for free.
        </p>
        <p>
          It has built-in messaging and location features.
        </p>
      </div>
      <ProjectDetails title="Motivation">
        <p>I had this idea by questioning what more the internet can give for free (beyond education, software and entertainment), and by observing a habit of people of my region of giving plant seedlings to friends</p>
        <p>I searched and this idea looks pretty good. I found Facebook groups with tens of thousands of members to do that, even without location features. Constant feed posts are looking for somebody around, in a very inefficient way.</p>
        <p>
          A custom system can:
        </p>
        <ul>
          <li>Filter by location and plant-specific attributes</li>
          <li>Notify new plants or people around</li>
          <li>Keep public lists of desired plants</li>
          <li>Have a person credibility score</li>
        </ul>
      </ProjectDetails>
      <ProjectDetails title="Technical Features">
        <ul>
          <li>Automatic IP location detection</li>
          <li>Images upload</li>
          <li>Distance results filter</li>
          <li>Geocoding and reverse geocoding</li>
          <li>Interactive map</li>
          <li>Full text search, using PostgresSQL</li>
          <li>Push notifications</li>
          <li>Progressive Web App (PWA)</li>
          <li>Available in Play Store</li>
          <li>Collaborative filtering recommendations</li>
          <li>Social login with Google and Facebook</li>
          <li>4 distinct analytics tools</li>
          <li>Landing page optimized with A/B tests</li>
          <li>Google Ads integration to maximize sign ups</li>
        </ul>
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
