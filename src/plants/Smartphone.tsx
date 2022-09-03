import { ChildrenProps } from '../common/ChildrenProps';

export function Smartphone({ children }:ChildrenProps) {
  return (
    <div className="group bg-blue-500 w-[21rem] h-[38rem] flex flex-col items-center justify-center">
      <div className="group-hover:rotate-0 rotate-6 transition-transform">
        <div className="bg-gradient-to-l scale-75 from-black via-gray-900 to-black flex flex-col px-2 py-10 rounded-3xl w-[23rem] h-[48rem] shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
