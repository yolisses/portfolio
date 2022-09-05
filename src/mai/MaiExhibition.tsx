/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-unknown-property */
import { useEffect, useRef, useState } from 'react';
import { PianoRoll } from './PianoRoll';
import { PlayButton } from './PlayButton';
import { PianoPicture } from './PianoPicture';

export function MaiExhibition() {
  const audioRef = useRef<any>();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const { current } = audioRef;
    if (current) {
      if (playing) current.play();
      else current.pause();
    }
  }, [playing, audioRef]);

  function handlePlay() { setPlaying(true); }
  function handlePause() { setPlaying(false); }

  return (
    <div className="flex-1">
      <div className="relative z-10">
        <PianoRoll
          playing={playing}
          audioRef={audioRef}
        />
        <div className="absolute bottom-0 left-0">
          <PlayButton
            playing={playing}
            setPlaying={setPlaying}
          />
        </div>
      </div>
      <div className="scale-[120%]">
        <PianoPicture
          playing={playing}
          audioRef={audioRef}
        />
      </div>
      <audio
        controls
        ref={audioRef}
        className="w-full"
        onPlay={handlePlay}
        onPause={handlePause}
      >
        <source src="/mai/mai.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
