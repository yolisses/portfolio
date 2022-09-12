/* eslint-disable max-len */
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
      tools={[
        'spring',
        'java',
        'neo4j',
        'docker',
        'react',
        'typescript',
        'tailwind',
      ]}
    >

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
    </ProjectSection>
  );
}
