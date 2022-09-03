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
        <div className="flex-1">a</div>
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
