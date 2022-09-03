import { StackIcon } from '../common/StackIcon';
import { Smartphone } from './Smartphone';

export function PlantsSection() {
  return (
    <div className="h-screen bg-green-100 p-4">
      <div className="flex flex-row gap-4 items-center">
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
          <h2 className="text-4xl flex flex-row gap-2">
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
      <div className="flex flex-row">
        <div className="flex-1">
          <h2>Stack</h2>

          <div
            className="grid grid-flow-col grid-rows-1 w-fit text-sm gap-2"
            style={{ gridAutoColumns: '1fr' }}
          >
            <StackIcon name="React" filename="react" />
            <StackIcon name="Next.js" filename="nextjs" />
            <StackIcon name="Node.js" filename="nodejs" />
            <StackIcon name="Express" filename="express" />
            <StackIcon name="PostgreSQL" filename="postgresql" />
            <StackIcon name="Typescript" filename="typescript" />
          </div>
        </div>
        <Smartphone>
          <iframe
            src="https://suasplantas.com"
            title="SuasPlantas.com"
            className="bg-white h-full w-full"
          />
        </Smartphone>
      </div>

    </div>
  );
}
