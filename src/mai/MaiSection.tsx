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
      faderColor="rgb(15 23 42)"
      className="bg-slate-900 text-white md:flex-row-reverse"
      style={{
        fontSize: '1.25em',
        fontFamily: "'Source Sans Pro'",
      }}
      title={(
        <>
          Musical AI (
          <abbr>Mai</abbr>
          )
        </>
)}
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
      <ProjectDetails title="Technical Features">
        <p>
          I tried many models. Mainly because of the lack of data (due to Copywrite) and the fact that
          <div className="bg-white bg-opacity-5 rounded-lg p-2 m-2 indent-2 w-fit">
            <blockquote
              className="inline"
              cite="https://www.brainyquote.com/quotes/jeff_hawkins_501601"
            >
              The key to artificial intelligence has always been the representation.
            </blockquote>
            {' '}
            — Jeff Hawkings
          </div>
        </p>
        <p>
          Including:
        </p>
        <ul>
          <li>Feed forward</li>
          <li>
            Convilotional Neural Network (
            <abbr>CNN</abbr>
            )
          </li>
          <li>
            Long Short Term Memory (
            <abbr>LSTM</abbr>
            )
          </li>
          <li>
            Nested LSTM&apos;s in a while loop
          </li>
          <li>
            Recursive Neural Networks (
            <abbr>RvNN</abbr>
            )
          </li>
          <li>
            Hidden Markov Model (
            <abbr>HMM</abbr>
            )
          </li>
        </ul>
        <p className="mt-4">
          And I created a basic front end to adjust human preferences, that includes:
        </p>
        <ul>
          <li>
            Websocket integration to receive real-time updates
          </li>
          <li>
            Custom SVG generation to display a piano roll
          </li>
          <li>
            Web MIDI API integration to use optimized audio generation
          </li>
        </ul>
      </ProjectDetails>
      <Tools names={[
        'tensorflow',
        'django',
        'python',
        'jupyter',
        'matplotlib',
        'websocket',
        'react',
        'typescript',
      ]}
      />
    </ProjectSection>
  );
}
