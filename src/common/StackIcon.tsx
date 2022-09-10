const icons = {
  react: 'React',
  python: 'Python',
  django: 'Django',
  nodejs: 'Node.js',
  nextjs: 'Next.js',
  express: 'Express',
  jupyter: 'Jupyter',
  tailwind: 'Tailwind',
  socketio: 'Socket.IO',
  websocket: 'Websocket',
  typescript: 'Typescript',
  postgresql: 'PostgreSQL',
  tensorflow: 'Tensorflow',
};

interface StackIconProps {
  name:keyof(typeof icons)
}

export function StackIcon({ name }:StackIconProps) {
  return (
    <figure className="flex flex-col items-center">
      <img
        width={56}
        alt="icon"
        className="rounded-lg"
        src={`/stack/${name}.svg`}
      />
      <figcaption>{icons[name]}</figcaption>
    </figure>
  );
}
