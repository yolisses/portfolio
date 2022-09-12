/* eslint-disable react/require-default-props */
import { CSSProperties, ReactNode } from 'react';
import { ToolIcon, ToolName } from './ToolIcon';

interface ProjectSectionProps {
  name:string
  title:string
  about:ReactNode
  extra?:ReactNode
  tools:ToolName[]
  className?:string
  style?:CSSProperties
}

export function ProjectSection({
  title, name, about, tools, extra, style, className,
}:ProjectSectionProps) {
  return (
    <section
      className={`flex gap-8 flex-col text-lg md:flex-row ${className}`}
      style={style}
    >
      <div className="p-4">
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
              className="flex flex-row text-sm gap-2 overflow-x-auto scrollbar-hide"
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
      <div className="max-w-screen-sm md:max-w-none md:h-screen md:overflow-visible overflow-hidden flex flex-col center sticky top-0">
        {extra}
      </div>
    </section>
  );
}
