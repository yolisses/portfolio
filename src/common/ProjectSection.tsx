/* eslint-disable react/require-default-props */
import { CSSProperties, ReactNode } from 'react';
import './ProjectSection.css';

interface ProjectSectionProps {
  name:string
  url?:string
  title:ReactNode
  extra?:ReactNode
  className?:string
  children:ReactNode
  style?:CSSProperties
  faderColor?:string
}

export function ProjectSection({
  title, name, children, extra, style, className, url, faderColor,
}:ProjectSectionProps) {
  const faderStyle = { '--fader-color': faderColor } as CSSProperties;
  return (
    <section
      className={`project-section flex gap-8 md:gap-16 flex-col text-lg md:flex-row ${className}`}
      style={{ ...style, ...faderStyle }}
    >
      <div className="p-4 flex-1">
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
        <div className="flex flex-col gap-8">
          {children}
        </div>
      </div>
      <div className="max-w-screen-sm md:max-w-none md:h-screen md:overflow-visible overflow-hidden flex flex-col center sticky top-0">
        {extra}
      </div>
    </section>
  );
}
