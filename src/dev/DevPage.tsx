import { useEffect } from 'react';
import { getCurrentNotes } from '../mai/getCurrentNotes';
import { notes } from '../mai/notes';

export function DevPage() {
  function doThings() {
    console.log('restart');
    getCurrentNotes(notes[2], 0, 10, 0);
  }

  useEffect(doThings, []);

  return (
    <div>
      oi
    </div>
  );
}
