import { FaPause, FaPlay } from 'react-icons/fa';
import { useAudio } from './AudioContext';

export function PlayButton() {
  const { playing, setPlaying } = useAudio();

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
