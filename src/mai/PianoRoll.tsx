/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-unknown-property */
import {
  MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { NoteItem } from './NoteItem';
import { notes } from './notes';

interface PianoRollProps {
  audioRef: MutableRefObject<any>
  playing: boolean
}

export function PianoRoll({ audioRef, playing }:PianoRollProps) {
  const scaleY = 7;
  const scaleX = 1.3;
  const height = 120;
  const maxPitch = 89;
  const pitchOffset = 26;
  const [holder] = useState({ requestId: 0 });

  const displayRef = useRef<any>();

  function displayTimestep(timestep:number) {
    if (Math.floor(timestep / 100) % 10 === 0) {
      console.log(timestep);
    }
  }

  function animate() {
    const requestId = requestAnimationFrame(step);
    holder.requestId = requestId;
  }

  function cancelAnimation() {
    cancelAnimationFrame(holder.requestId);
  }

  function step(timestep:number) {
    displayTimestep(timestep);
    const count = audioRef.current.currentTime;
    const viewBox = `0 ${count * scaleY} ${maxPitch} ${height}`;
    displayRef.current.setAttribute('viewBox', viewBox);

    animate();
  }

  useEffect(() => {
    if (playing) {
      animate();
    }
    return cancelAnimation;
  }, [audioRef, playing]);

  return (
    <div>
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
