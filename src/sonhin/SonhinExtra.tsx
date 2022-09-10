import { Smartphone } from '../common/Smartphone';

export function SonhinExtra() {
  return (
    <div className="relative z-0 pr-14">
      <img
        src="/sonhin/headphone.png"
        alt=""
        width={180}
        className="absolute bottom-0 right-0 -z-10 brightness-75 -rotate-12"
      />
      <Smartphone>
        <iframe
          src="https://sonhin.com"
          title="SuasPlantas.com"
          className="bg-zinc-900 h-full w-full rounded-2xl"
        />
      </Smartphone>
    </div>
  );
}
