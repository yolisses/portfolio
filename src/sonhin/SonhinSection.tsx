/* eslint-disable max-len */
import { Tools } from '../common/Tools';
import { SonhinExtra } from './SonhinExtra';
import { ProjectSection } from '../common/ProjectSection';

export function SonhinSection() {
  return (
    <ProjectSection
      name="sonhin"
      title="Sonhin"
      extra={<SonhinExtra />}
      url="https://sonhin.com"
      className="bg-zinc-800 text-white"
      style={{
        fontSize: '1.25em',
        fontFamily: "'Source Sans Pro'",
      }}
    >
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
      <p>
        Something in here
      </p>
    </ProjectSection>
  );
}
