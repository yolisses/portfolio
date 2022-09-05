/* eslint-disable no-restricted-syntax */
import { Note } from './Note';

export function getCurrentNotes(notes:Note[], start:number, duration:number, guess:number) {
  let i = guess;
  while (true) {
    if (notes[i].start > start) {
      break;
    }
    console.log(i, notes[i]);
    i += 1;
  }
}
