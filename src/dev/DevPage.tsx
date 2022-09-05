import { useEffect } from 'react';
import { getCurrentNotes } from '../mai/getCurrentNotes';
import { MaiExhibition } from '../mai/MaiExhibition';
import { notes } from '../mai/notes';

export function DevPage() {
  return (
    <div className="max-w-sm">
      <MaiExhibition />
    </div>
  );
}
