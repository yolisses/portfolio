import { useEffect } from 'react';
import { getCurrentNotes } from '../mai/getCurrentNotes';
import { MaiExtra } from '../mai/MaiExtra';
import { notes } from '../mai/notes';

export function DevPage() {
  return (
    <div className="max-w-sm">
      <MaiExtra />
    </div>
  );
}
