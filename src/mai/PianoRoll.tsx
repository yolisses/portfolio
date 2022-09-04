/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';

interface NoteItemProps {
  note:Note
}

function NoteItem({ note }:NoteItemProps) {
  return (
    <rect
      width={1}
      fill="#22c55e"
      x={note.pitch}
      y={note.start}
      height={note.duration}
    />
  );
}

interface Note {
  id:number
  start: number
  pitch: number
  duration: number
}

function randomInt(max:number) {
  return Math.floor(Math.random() * (max + 1));
}

export function PianoRoll() {
  const [notes, setNotes] = useState<Note[]>();

  function getNotes() {
    const randomNotes = [...Array(100)]
      .map((_, index) => ({
        id: index,
        start: randomInt(200),
        pitch: randomInt(88),
        duration: 2 ** randomInt(3),
      }));
    setNotes(randomNotes);
  }

  useEffect(getNotes, []);

  return (
    <svg
      viewBox="0 0 89 120"
      className="bg-slate-700 rounded-lg min-w-[20rem]"
    >
      {notes?.map((note) => <NoteItem note={note} key={note.id} />)}
    </svg>
  );
}
