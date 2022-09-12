/* eslint-disable react/no-unknown-property */
import { ReactNode, SyntheticEvent, useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface ProjectDetailsProps {
  children:ReactNode
  title:ReactNode
}

export function ProjectDetails({ children, title }:ProjectDetailsProps) {
  const [open, setOpen] = useState(false);

  function handleToggle(e: SyntheticEvent<HTMLDetailsElement, Event>) {
    setOpen(e.currentTarget.open);
  }

  const Icon = open ? FaChevronDown : FaChevronRight;

  return (
    <>
      <details onToggle={handleToggle}>
        <summary className="list-none mt-8">
          <Icon className="inline mr-1 mb-3" />
          <h3 className="inline">
            {title}
          </h3>
        </summary>
        {children}
      </details>
      {!open && (
      <div
        className="h-20 md:h-14 overflow-hidden relative"
      >
        {children}
        <div
          className="h-8 absolute bottom-0 w-full"
          style={{ backgroundImage: 'linear-gradient(to top, var(--fader-color), transparent)' }}
        />
      </div>
      )}
    </>
  );
}
