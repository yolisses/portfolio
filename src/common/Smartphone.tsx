import { ChildrenProps } from './ChildrenProps';

export function Smartphone({ children }:ChildrenProps) {
  return (
    <div className="group w-[24rem] h-[38.5rem] flex center">
      <div className="transition-transform group-hover:scale-[80%] group-hover:rotate-0 rotate-12 scale-75 w-[23rem] h-[48rem] px-1 py-5 rounded-[2rem] bg-gradient-to-l from-black to-black via-gray-700">
        {children}
      </div>
    </div>
  );
}
