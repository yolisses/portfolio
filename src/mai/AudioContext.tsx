/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/media-has-caption */
import {
  createContext, Dispatch, SetStateAction, useContext, useState,
} from 'react';
import { ChildrenProps } from '../common/ChildrenProps';

interface AudioContext {
  playing:boolean
  setPlaying:Dispatch<SetStateAction<boolean>>
}

const audioContext = createContext({} as AudioContext);

export function AudioContextProvider({ children }:ChildrenProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <audioContext.Provider value={{
      playing,
      setPlaying,
    }}
    >
      {children}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <audio controls>
        <source src="/mai/mai.mp3" type="audio/mpeg" />
      </audio>
    </audioContext.Provider>
  );
}

export function useAudio() {
  return useContext(audioContext);
}
