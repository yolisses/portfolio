const icons = {
  s3: 'S3',
  java: 'Java',
  react: 'React',
  neo4j: 'Neo4j',
  python: 'Python',
  django: 'Django',
  spring: 'Spring',
  docker: 'Docker',
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
  matplotlib: 'Matplotlib',
};

export type ToolName = keyof(typeof icons);

interface ToolIconProps {
  name:ToolName
}

export function ToolIcon({ name }:ToolIconProps) {
  return (
    <figure className="flex flex-col items-center w-[18vw] md:w-[4.5rem] flex-shrink-0">
      <img
        width={60}
        alt={`${name} icon`}
        src={`/tools/${name}.svg`}
        className="rounded-lg flex-shrink-0"
      />
      <figcaption>
        {icons[name]}
      </figcaption>
    </figure>
  );
}
