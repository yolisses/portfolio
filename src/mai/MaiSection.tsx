/* eslint-disable max-len */
import { ProjectSection } from '../common/ProjectSection';
import { Tools } from '../common/Tools';
import { ProjectDetails } from '../plants/ProjectDetails';
import { MaiExtra } from './MaiExtra';

export function MaiSection() {
  return (
    <ProjectSection
      name="mai"
      extra={<MaiExtra />}
      title="Musical AI (Mai)"
      faderColor="rgb(15 23 42)"
      className="bg-slate-900 text-white md:flex-row-reverse"
      style={{
        fontSize: '1.25em',
        fontFamily: "'Source Sans Pro'",
      }}
    >
      <div className="explanation">
        <p>
          Mai is an automatic music creation tool.
        </p>
        <p>
          It&apos;s mostly based on this
          {' '}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline decoration-1"
            href="https://openai.com/blog/deep-reinforcement-learning-from-human-preferences/"
          >
            Open AI research
          </a>
        </p>
        <p>
          Currently, it can export MIDI&apos;s, audios and TikTok simple videos
        </p>
      </div>
      <Tools names={[
        'tensorflow',
        'django',
        'python',
        'jupyter',
        'websocket',
        'react',
        'typescript',
        'tailwind',
      ]}
      />
      <ProjectDetails title="Motivation">
        <p>
          AI will make the vast majority of the music. Here&apos;s why:
        </p>
        <ul>
          <li>
            A machine can create music orders of magnitude faster than humans.
          </li>
          <li>
            It can analyze the feedback from millions of people, at the seconds level, endless, with petabytes of data.
          </li>
          <li>
            Can learn the preferences of individual listeners and create new music, specifically for them.
          </li>
          <li>
            It is all the way cheaper.
          </li>
          <li>
            It can create in real-time for videos, games, or even for a personal soundtrack.
          </li>
          <li>
            It can do A/B tests
          </li>
        </ul>
      </ProjectDetails>
    </ProjectSection>
  );
}
