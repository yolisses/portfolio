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
        <div className="flex-1 text-2xl">
          <h2>Stack</h2>
          <img src="/stack/react.svg" alt="react" width={80} />
          <div>React</div>
          <img src="/stack/next.svg" alt="next.js" width={80} />
          <div>Next.js</div>
          <img src="/stack/node.svg" alt="next.js" width={80} />
          <div>Node.js</div>
          <img src="/stack/express.svg" className="rounded-lg" alt="next.js" width={80} />
          <div>Express.js</div>
          <img src="/stack/postgresql.svg" className="rounded-lg" alt="next.js" width={80} />
          <div>PostgreSQL</div>
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
