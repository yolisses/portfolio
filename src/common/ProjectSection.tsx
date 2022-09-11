import { ReactNode } from 'react';
import { ToolName } from './ToolIcon';
import { Tools } from './Tools';

interface ProjectSectionProps {
  name:string
  title:string
  about:ReactNode
  extra:ReactNode
  tools:ToolName[]
}

export function ProjectSection({
  title, name, about, tools, extra,
}:ProjectSectionProps) {
  return (
    <section className="p-8">
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
      {extra}
    </section>
  );
}
