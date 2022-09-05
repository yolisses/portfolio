import { pianoKeyPaths } from './pianoKeyPaths';

/* eslint-disable react/no-unknown-property */
interface PianoPictureProps {
  notes:number[]
}

export function PianoPicture({ notes }:PianoPictureProps) {
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
          <path
            fill="#22c55e"
            key={value}
            opacity={0.7}
            d={pianoKeyPaths[value]}
          />
        ))}
      </g>
    </svg>
  );
}
