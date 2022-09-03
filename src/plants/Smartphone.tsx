import { ChildrenProps } from '../common/ChildrenProps';

export function Smartphone({ children }:ChildrenProps) {
  return (
    <div className="group w-[24rem] h-[38.5rem] flex center">
      <div className="transition-transform group-hover:rotate-0 rotate-12 scale-75 w-[23rem] h-[48rem] px-2 py-8 rounded-3xl bg-gradient-to-l from-black to-black via-gray-700">
        {children}
      </div>
    </div>
  );
}
