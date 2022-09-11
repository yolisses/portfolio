import { Smartphone } from '../common/Smartphone';

export function PlantsExtra() {
  return (
    <div className="relative z-0">
      <img
        alt=""
        width={256}
        src="/plants/plant.webp"
        className="absolute bottom-0 -left-16 -z-10"
      />
      <Smartphone>
        <iframe
          src="https://suasplantas.com"
          title="SuasPlantas.com"
          className="bg-white h-full w-full rounded-2xl"
        />
      </Smartphone>
    </div>
  );
}
