import {
  Fragment, RefObject, useEffect, useState,
} from 'react';
import { Note } from './Note';
import { useAnimation } from './useAnimation';
import { pianoKeyPaths } from './pianoKeyPaths';
import { getCurrentNotes } from './getCurrentNotes';
import './PianoPicture.css';

/* eslint-disable react/no-unknown-property */
interface PianoPictureProps {
  playing:boolean
  audioRef: RefObject<HTMLAudioElement>
}

export function PianoPicture({ audioRef, playing }:PianoPictureProps) {
  const { animate, cancelAnimation } = useAnimation();
  const [notes, setNotes] = useState([] as Note[]);
  const pitchOffset = 41;

  function step() {
    const time = audioRef.current!.currentTime;
    const currentNotes = getCurrentNotes(time);
    setNotes(currentNotes);
    animate(step);
  }

  useEffect(() => {
    if (audioRef.current && playing) {
      animate(step);
    }

    return cancelAnimation;
  }, [audioRef, playing]);

  return (
    <svg
      id="svg5"
      version="1.1"
      viewBox="0 0 215.89999 73.025002"
    >
      <g
        id="layer1"
        transform="translate(8.0644875,-76.124352)"
      >
        <image
          y="76.124352"
          x="-8.0644875"
          id="image20462"
          width="215.89999"
          height="73.025002"
          href="/mai/piano.png"
          preserveAspectRatio="none"
        />
        {notes.map((value) => (
          <Fragment key={value.id}>
            <path
              fill="#42c55e"
              className="piano-glow scale-105 origin-center -translate-y-2"
              style={{
                animationDuration: '0.5s',
              }}
              d={pianoKeyPaths[value.pitch - pitchOffset]}
            />
            <path
              fill="#42c55e"
              style={{
                animationDelay: '-0.2s',
                animationDuration: '1s',
              }}
              className="piano-glow scale-105 origin-center -translate-y-2"
              d={pianoKeyPaths[value.pitch - pitchOffset]}
            />
            <path
              fill="#22c55e"
              d={pianoKeyPaths[value.pitch - pitchOffset]}
            />
          </Fragment>
        ))}
      </g>
    </svg>
  );
}
