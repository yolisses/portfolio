import { StackIcon } from '../common/StackIcon';

export function MaiSection() {
  return (
    <div
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
        <div className="bg-purple-900 w-fit p-2 rounded-full">
          Pre Release
        </div>
      </div>
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
  );
}
