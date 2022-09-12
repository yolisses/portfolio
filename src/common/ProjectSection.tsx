/* eslint-disable react/require-default-props */
import { CSSProperties, ReactNode } from 'react';
import { ToolIcon, ToolName } from './ToolIcon';
import { Tools } from './Tools';

interface ProjectSectionProps {
  name:string
  url?:string
  title:string
  about:ReactNode
  extra?:ReactNode
  tools:ToolName[]
  className?:string
  style?:CSSProperties
}

export function ProjectSection({
  title, name, about, tools, extra, style, className, url,
}:ProjectSectionProps) {
  return (
    <section
      className={`flex gap-8 flex-col text-lg md:flex-row ${className}`}
      style={style}
    >
      <div className="p-4">
        <div className="flex flex-row items-center gap-4 text-4xl">
          <img
            alt="logo"
            width={60}
            src={`/${name}/logo.svg`}
          />
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              <h2>{title}</h2>
            </a>
          ) : (
            <h2>{title}</h2>
          )}
        </div>
        <div>
          <h3 className="mt-8 mb-2">About</h3>
          {about}
          <Tools names={tools} />
        </div>
      </div>
      <div className="max-w-screen-sm md:max-w-none md:h-screen md:overflow-visible overflow-hidden flex flex-col center sticky top-0">
        {extra}
      </div>
    </section>
  );
}
