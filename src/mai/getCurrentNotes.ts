/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
import { Note } from './Note';
import { notes as instrumentNotes } from './notes';

function isCurrent(note:Note, time:number) {
  const { start, duration } = note;
  const end = start + duration;
  return start <= time && time <= end;
}

export function getCurrentNotes(time:number, guess:number) {
  const maxDuration = 4;
  const notes = instrumentNotes[1];
  const currentNotes = [] as Note[];

  for (let i = guess; notes[i].start <= time; i++) {
    if (isCurrent(notes[i], time)) {
      currentNotes.push(notes[i]);
    }
  }

  for (let i = guess; i >= 0 && notes[i].start >= time - maxDuration; i--) {
    if (isCurrent(notes[i], time)) {
      currentNotes.push(notes[i]);
    }
  }

  return currentNotes;
}
