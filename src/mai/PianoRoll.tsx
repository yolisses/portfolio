/* eslint-disable react/no-unknown-property */
import { Note } from './Note';
import { notes } from './notes';

interface NoteItemProps {
  note:Note
}

function NoteItem({ note }:NoteItemProps) {
  const scaleX = 1.5;
  const scaleY = 7;
  const pitchOffset = 25;

  return (
    <rect
      width={scaleX}
      fill="#22c55e"
      x={(note.pitch - pitchOffset) * scaleX}
      y={note.start * scaleY}
      height={note.duration * scaleY}
    />
  );
}

export function PianoRoll() {
  return (
    <svg
      viewBox="0 0 89 120"
      className="bg-slate-700 rounded-lg min-w-[20rem]"
    >
      {notes.map(
        (instrument) => instrument
          .map(
            (note) => (
              <NoteItem
                note={note}
                key={note.id}
              />
            ),
          ),
      )}
    </svg>
  );
}
