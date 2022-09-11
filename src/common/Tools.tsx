import { StackIcon, ToolName } from './StackIcon';

interface ToolsProps {
  names:ToolName[]
}

export function Tools({ names }:ToolsProps) {
  return (
    <div>
      <h3>Tools</h3>
      <div
        className="grid grid-flow-col grid-rows-1 w-fit text-sm gap-2"
        style={{ gridAutoColumns: '1fr' }}
      >
        {names.map((name) => (
          <StackIcon
            key={name}
            name={name}
          />
        ))}
      </div>
    </div>
  );
}
