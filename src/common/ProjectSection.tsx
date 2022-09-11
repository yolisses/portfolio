/* eslint-disable react/require-default-props */
import { CSSProperties, ReactNode } from 'react';
import { ToolIcon, ToolName } from './ToolIcon';

interface ProjectSectionProps {
  name:string
  title:string
  about:ReactNode
  extra:ReactNode
  tools:ToolName[]
  className?:string
  style?:CSSProperties
}

export function ProjectSection({
  title, name, about, tools, extra, style, className,
}:ProjectSectionProps) {
  return (
    <section
      className={`p-4 md:p-8 flex gap-8 flex-col md:flex-row ${className}`}
      style={style}
    >
      <div>
        <div className="flex flex-row items-center gap-4">
          <img
            alt="logo"
            width={60}
            src={`/${name}/logo.svg`}
          />
          <h2 className="text-4xl">
            {title}
          </h2>
        </div>
        <div>
          <h3 className="mt-8 mb-2">About</h3>
          {about}
          <h3 className="mt-8 mb-2">Tools</h3>
          <div className="overflow-hidden">
            <div
              className="flex flex-row text-sm gap-2 overflow-x-auto"
            >
              {tools.map((tool) => (
                <ToolIcon
                  key={name}
                  name={tool}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* {extra} */}
      </div>
    </section>
  );
}
