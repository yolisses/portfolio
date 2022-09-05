/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef } from 'react';
import { NoteItem } from './NoteItem';
import { notes } from './notes';

export function PianoRoll() {
  const scaleX = 1.3;
  const scaleY = 7;
  const maxPitch = 89;
  const height = 120;
  const pitchOffset = 26;

  const displayRef = useRef<any>();
  const audioRef = useRef<any>();

  function step() {
    const count = audioRef.current.currentTime;
    const viewBox = `0 ${count * scaleY} ${maxPitch} ${height}`;
    displayRef.current.setAttribute('viewBox', viewBox);

    window.requestAnimationFrame(step);
  }

  function animate() {
    window.requestAnimationFrame(step);
  }

  useEffect(animate, []);

  return (
    <div>
      <audio
        controls
        ref={audioRef}
        className="w-full"
      >
        <source src="/mai/mai.mp3" type="audio/mpeg" />
      </audio>
      <svg
        direction="rtl"
        ref={displayRef}
        transform="scale(1,-1)"
        viewBox={`0 0 ${maxPitch} ${height}`}
        className="bg-slate-700 rounded-lg min-w-[20rem]"
      >
        {notes.map(
          (instrument_notes, index) => instrument_notes
            .map(
              (note) => (
                <NoteItem
                  note={note}
                  key={note.id}
                  scaleX={scaleX}
                  scaleY={scaleY}
                  instrument={index}
                  pitchOffset={pitchOffset}
                />
              ),
            ),
        )}
      </svg>
    </div>
  );
}
