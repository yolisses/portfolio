/* eslint-disable max-len */
import { Tools } from '../common/Tools';
import { SonhinExtra } from './SonhinExtra';
import { ProjectSection } from '../common/ProjectSection';
import { ProjectDetails } from '../plants/ProjectDetails';

export function SonhinSection() {
  return (
    <ProjectSection
      name="sonhin"
      title="Sonhin"
      extra={<SonhinExtra />}
      url="https://sonhin.com"
      faderColor="rgb(39 39 42)"
      className="bg-zinc-800 text-white"
      style={{
        fontSize: '1.25em',
        fontFamily: "'Source Sans Pro'",
      }}
    >
      <div className="explanation">
        <p>Sonhin is a music streaming service.</p>
        <p>It&apos;s ultimate goal is to deliver music made by Mai and collect huge amounts of feedback to train the model.</p>
      </div>
      <Tools
        names={[
          'spring',
          'java',
          'neo4j',
          'docker',
          'react',
          'typescript',
          'tailwind',
        ]}
      />
      <ProjectDetails title="Motivation">
        <p>
          It was a college assignment.
        </p>
        <p>
          I certainly would create it anyway, but not before improving Mai enough. And would not use Java if it wasn&apos;t a requisite.
        </p>
        <p>
          But it worked by a secondary motivation of decomposing a music streaming service in its fundamental and most important parts. For example, I found that the main points to be focused on are:
        </p>
        <ul>
          <li>Content</li>
          <li>Ease to use</li>
          <li>Recommendations</li>
        </ul>
        <p>
          Other aspects like appearance and interactions are secondary once the main objective is to simply have good music playing.
        </p>
      </ProjectDetails>
    </ProjectSection>
  );
}
