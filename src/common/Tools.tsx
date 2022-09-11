import { ToolIcon, ToolName } from './ToolIcon';

interface ToolsProps {
  names:ToolName[]
}

export function Tools({ names }:ToolsProps) {
  return (
    <div className="overflow-hidden">
      <h3>Tools</h3>
      <div
        className="flex flex-row text-sm gap-2 overflow-x-auto"
      >
        {names.map((name) => (
          <ToolIcon
            key={name}
            name={name}
          />
        ))}
      </div>
    </div>
  );
}
