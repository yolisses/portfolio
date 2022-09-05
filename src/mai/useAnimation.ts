import { useState } from 'react';

export function useAnimation() {
  const [holder] = useState({ requestId: 0 });

  function animate(step: (timestemp:number)=>void) {
    const requestId = requestAnimationFrame(step);
    holder.requestId = requestId;
  }
  function cancelAnimation() {
    cancelAnimationFrame(holder.requestId);
  }

  return { animate, cancelAnimation };
}
