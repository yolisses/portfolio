import { useEffect, useRef } from 'react';

export function DevPage() {
  const ref = useRef<any>();

  useEffect(() => {
    if (ref.current) {
      ref.current.contentDocument.getElementsByTagName('body')[0].setAttribute('tabindex', '-1');
    }
  }, [ref.current]);
  return (
    <div
      className="w-[50vw] h-[50vh] relative bg-red-500"
    >
      <iframe
        ref={ref}
        src="https://suasplantas.com"
        frameBorder="0"
        title="plants"
        className="w-full h-full absolute"
        tabIndex={-1}
      />
    </div>
  );
}
