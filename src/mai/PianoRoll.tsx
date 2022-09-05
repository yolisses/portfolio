/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-unknown-property */
import { MutableRefObject, useEffect, useRef } from 'react';
import { notes } from './notes';
import { NoteItem } from './NoteItem';
import { useAnimation } from './useAnimation';

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
  const displayRef = useRef<any>();
  const { animate, cancelAnimation } = useAnimation();

  function step() {
    const time = audioRef.current.currentTime;
    const viewBox = `0 ${time * scaleY} ${maxPitch} ${height}`;
    displayRef.current.setAttribute('viewBox', viewBox);
    animate(step);
  }

  useEffect(() => {
    if (playing) {
      animate(step);
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
