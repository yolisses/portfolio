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
    <details onToggle={handleToggle}>
      <summary className="list-none">
        <Icon className="inline-block mr-1 mb-3" />
        <h3 className="inline-block">
          {title}
        </h3>
      </summary>
      {children}
    </details>
  );
}
