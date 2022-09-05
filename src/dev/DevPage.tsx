/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'react';

export function DevPage() {
  const displayRef = useRef<any>();
  const audioRef = useRef<any>();

  function animate() {
    function step() {
      const count = audioRef.current.currentTime;
      displayRef.current.style.transform = `rotate(${count}turn)`;
      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

  useEffect(animate, []);

  return (
    <div>
      <div ref={displayRef} className="bg-red-500 w-10">a</div>
      <audio
        controls
        ref={audioRef}
        className="w-full"
      >
        <source src="/mai/mai.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
