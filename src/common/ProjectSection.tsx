/* eslint-disable react/require-default-props */
import { CSSProperties, ReactNode } from 'react';
import { ToolName } from './ToolIcon';
import { Tools } from './Tools';

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
      className={`p-8 flex flex-row ${className}`}
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
          <h3>About</h3>
          {about}
        </div>
        <Tools names={tools} />
        <div />
      </div>
      <div>
        {extra}
      </div>
    </section>
  );
}
