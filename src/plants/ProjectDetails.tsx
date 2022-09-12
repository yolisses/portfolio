/* eslint-disable react/no-unknown-property */
import { ReactNode, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface ProjectDetailsProps {
  children:ReactNode
  title:ReactNode
}

export function ProjectDetails({ children, title }:ProjectDetailsProps) {
  const [closed, setClosed] = useState(true);
  const Icon = closed ? FaChevronDown : FaChevronUp;
  const [ariaId, setAriaId] = useState(`${Math.random()}`);

  function handleToggle() {
    setClosed((old) => !old);
  }

  return (
    <div>
      <h3 className="inline">
        {title}
      </h3>
      <div
        id={ariaId}
        className="relative"
        style={{
          height: closed ? '5rem' : undefined,
          overflowY: closed ? 'hidden' : undefined,
        }}
      >
        {children}
        <div
          className="h-8 absolute bottom-0 w-full"
          style={{ backgroundImage: closed ? 'linear-gradient(to top, var(--fader-color), transparent)' : undefined }}
        />
      </div>
      <button
        onClick={handleToggle}
        aria-controls={ariaId}
        aria-expanded={!closed}
        className="p-2 text-sm flex flex-row center gap-1"
      >
        <Icon />
        Show
        {' '}
        {closed ? 'more' : 'less'}
      </button>
    </div>
  );
}
