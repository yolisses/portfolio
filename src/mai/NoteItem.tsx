/* eslint-disable react/no-unknown-property */
import { Note } from './Note';

interface NoteItemProps {
  note:Note
  scaleX:number
  scaleY:number
  pitchOffset:number
  instrument:number
}

export function NoteItem({
  note, scaleX, scaleY, pitchOffset, instrument,
}:NoteItemProps) {
  const instrumentColors = [
    '#3b82f6', // blue
    '#10b981', // emerald
    '#22c55e', // green
    '#6366f1', // indigo
    '#06b6d4', // cyan
  ];
  const color = instrumentColors[instrument];

  return (
    <rect
      width={scaleX}
      fill={color}
      y={note.start * scaleY}
      height={note.duration * scaleY}
      x={(note.pitch - pitchOffset) * scaleX}
    />
  );
}
