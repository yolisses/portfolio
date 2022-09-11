/* eslint-disable max-len */
import { SonhinExtra } from './SonhinExtra';
import { ToolIcon } from '../common/ToolIcon';
import { Tools } from '../common/Tools';

export function SonhinSection() {
  return (
    <div
      style={{ fontFamily: "'Source Sans Pro'", fontSize: '1.25em' }}
      className="bg-zinc-800 text-white p-10 flex flex-col gap-8"
    >
      <div className="flex flex-row items-center gap-6">
        <img
          width={80}
          alt="Sonhin icon"
          src="/sonhin/logo.svg"
        />
        <h2 className="text-4xl">
          Sonhin
        </h2>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col gap-8">
          <h3>About</h3>
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
          <Tools names={[
            'spring',
            'java',
            'neo4j',
            'docker',
            'react',
            'typescript',
            'tailwind',
          ]}
          />
        </div>
        <SonhinExtra />
      </div>
    </div>
  );
}
