/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/media-has-caption */
import {
  createContext, Dispatch, SetStateAction, useContext, useEffect, useRef, useState,
} from 'react';
import { ChildrenProps } from '../common/ChildrenProps';

interface AudioContext {
  playing:boolean
  setPlaying:Dispatch<SetStateAction<boolean>>
}

const audioContext = createContext({} as AudioContext);

export function AudioContextProvider({ children }:ChildrenProps) {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<any>();

  useEffect(() => {
    if (ref.current) {
      if (playing) ref.current.play();
      else ref.current.pause();
    }
  }, [ref, playing]);

  function handlePlay() {
    setPlaying(true);
  }
  function handlePause() {
    setPlaying(false);
  }

  return (
    <audioContext.Provider value={{
      playing,
      setPlaying,
    }}
    >
      {children}
      <audio
        // controls
        ref={ref}
        onPlay={handlePlay}
        onPause={handlePause}
        className="w-full"
      >
        <source src="/mai/mai.mp3" type="audio/mpeg" />
      </audio>
    </audioContext.Provider>
  );
}

export function useAudio() {
  return useContext(audioContext);
}
