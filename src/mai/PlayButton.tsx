import { Dispatch, SetStateAction } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';

interface PlayButtonProps {
  playing:boolean
  setPlaying:Dispatch<SetStateAction<boolean>>
}

export function PlayButton({ playing, setPlaying }:PlayButtonProps) {
  const Icon = playing ? FaPause : FaPlay;

  function handleClick() {
    setPlaying((old) => !old);
  }

  return (
    <button
      onClick={handleClick}
      className="rounded p-2"
    >
      <Icon size={24} />
    </button>
  );
}
