/* eslint-disable max-len */
import { Tools } from '../common/Tools';
import { PlantsExtra } from './PlantsExtra';

export function PlantsSection() {
  return (
    <div
      className="bg-green-100 p-10"
      style={{ fontFamily: "'Ubuntu', sans-serif" }}
    >
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 text-lg gap-8">
          <div className="flex flex-row gap-6 items-center">
            <img
              width={80}
              src="/plants/icon.svg"
              alt="SuasPlantas icon"
            />
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
              href="https://suasplantas.com"
            >
              <h2 className="text-4xl flex flex-row gap-1">
                <span>
                  Suas
                </span>
                <span>
                  Plantas
                </span>
                <span>
                  .com
                </span>
              </h2>
            </a>
          </div>
          <div className="flex flex-col gap-2 max-w-3xl">
            <h3>About</h3>
            <p>
              SuasPlantas is a Tinder-like app to get plant seeds and seedlings for free. I had this idea by questioning what else the internet can give without costs (beyond software, education, and entertainment) and by observing a common habit of people around me of give away plants.
            </p>
            <p>
              It looked like a great idea. I found Facebook groups with dozens of thousands of members to do so. Even without location and map features. The people are constantly asking in the feed who lives next to them in a very inefficient way.
            </p>
          </div>
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
          <PlantsExtra />
        </div>
      </div>
    </div>
  );
}
