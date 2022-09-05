import { PianoPicture } from './PianoPicture';
import { PianoRoll } from './PianoRoll';
import { PlayButton } from './PlayButton';

export function MaiExhibition() {
  return (
    <div className="flex-1">
      <div className="relative z-10">
        <PianoRoll />
        <div className="absolute bottom-0 left-0">
          <PlayButton />
        </div>
      </div>
      <div className="scale-[120%]">
        <PianoPicture notes={[1, 4, 5]} />
      </div>
    </div>
  );
}
