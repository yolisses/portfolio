/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-unknown-property */
import {
  ChangeEvent, useEffect, useRef, useState,
} from 'react';
import { PianoRoll } from './PianoRoll';
import { PlayButton } from './PlayButton';
import { PianoPicture } from './PianoPicture';

export function MaiExtra() {
  const [elapsed, setElapsed] = useState(0);
  const [maxTime, setMaxTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [handling, setHandling] = useState(false);
  const ref = useRef<HTMLAudioElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      if (playing) current.play();
      else current.pause();
    }
  }, [playing, ref]);

  function handlePlay() { setPlaying(true); }
  function handlePause() { setPlaying(false); }
  function handleMouseUp() { setHandling(false); }
  function handleMouseDown() { setHandling(true); }
  function handlePreloadMetadata(e:Event) {
    const { duration } = e.currentTarget as HTMLAudioElement;
    setMaxTime(duration);
  }
  function handleTimeUpdate(e:Event) {
    const { currentTime } = e.currentTarget as HTMLAudioElement;
    setElapsed(currentTime);
  }
  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    if (ref.current) {
      const time = parseFloat(e.target.value);
      ref.current.currentTime = time;
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('timeupdate', handleTimeUpdate);
      ref.current.addEventListener('loadedmetadata', handlePreloadMetadata);
    }
    return () => {
      if (ref.current) {
        ref.current.removeEventListener('timeupdate', handleTimeUpdate);
        ref.current.removeEventListener('loadedmetadata', handlePreloadMetadata);
      }
    };
  }, [ref]);

  return (
    <div className="flex-1 relative">
      <div className="relative z-10">
        <PianoRoll
          playing={playing || handling}
          audioRef={ref}
        />
        <div className="absolute bottom-0 left-0">
          <PlayButton
            playing={playing}
            setPlaying={setPlaying}
          />
        </div>
        <div className="absolute w-full z-20 flex center h-2">
          <input
            type="range"
            max={maxTime}
            ref={inputRef}
            value={elapsed}
            className="w-full"
            onChange={handleChange}
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>
      <div className="scale-[120%] translate-y-1">
        <PianoPicture
          playing={playing || handling}
          audioRef={ref}
        />
      </div>
      <audio
        // controls
        ref={ref}
        preload="metadata"
        className="w-full"
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src="/mai/mai.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
