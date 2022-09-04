/* eslint-disable max-len */
import { StackIcon } from '../common/StackIcon';
import { PianoRoll } from './PianoRoll';
import { PianoPicture } from './PianoPicture';

export function MaiSection() {
  return (
    <div
      style={{ fontFamily: "'Source Sans Pro'", fontSize: '1.25em' }}
      className="bg-slate-900 text-white p-10 flex flex-col gap-8"
    >
      <div className="flex flex-row items-center gap-6">
        <img
          width={80}
          alt="MAI icon"
          src="/mai/logo.svg"
        />
        <h2 className="text-4xl">
          Mai (Musical AI)
        </h2>
        <div className="bg-purple-900 w-fit px-1 rounded-full text-base">
          Pre Release
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="flex-1">
          <div className="relative z-10">
            <PianoRoll />
          </div>
          <div className="scale-[120%]">
            <PianoPicture />
          </div>
        </div>
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
          <h3>Stack</h3>
          <div
            className="grid grid-flow-col grid-rows-1 w-fit text-sm gap-2"
            style={{ gridAutoColumns: '1fr' }}
          >
            <StackIcon name="TensorFlow" filename="tensorflow" />
            <StackIcon name="Django" filename="django" />
            <StackIcon name="Python" filename="python" />
            <StackIcon name="Jupyter" filename="jupyter" />
            <StackIcon name="Webscoket" filename="websocket" />
            <StackIcon name="React" filename="react" />
            <StackIcon name="Typescript" filename="typescript" />
            <StackIcon name="Tailwind" filename="tailwind" />
          </div>
        </div>
      </div>
    </div>
  );
}