/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
import { Note } from './Note';
import { notes as instrumentNotes } from './notes';

function isCurrent(note:Note, time:number) {
  const { start, duration } = note;
  const end = start + duration;
  return start <= time && time <= end;
}

export function getCurrentNotes(time:number) {
  const notes = instrumentNotes[1];
  const currentNotes = [] as Note[];

  for (let i = 0; i < notes.length; i++) {
    if (notes[i] === undefined) console.log(i);
    if (notes[i].start > time) break;
    if (isCurrent(notes[i], time)) {
      currentNotes.push(notes[i]);
    }
  }

  return currentNotes;
}
