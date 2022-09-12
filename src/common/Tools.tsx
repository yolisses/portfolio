import { ToolIcon, ToolName } from './ToolIcon';

interface ToolsProps {
  names:ToolName[]
}

export function Tools({ names }:ToolsProps) {
  return (
    <>
      <h3 className="mt-8 mb-2">Tools</h3>
      <div className="overflow-hidden">
        <div
          className="flex flex-row text-sm gap-2 overflow-x-auto scrollbar-hide"
        >
          {names.map((name) => (
            <ToolIcon
              key={name}
              name={name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
