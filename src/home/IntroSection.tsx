import GitHubCalendar from 'react-github-calendar';
import { IntroHeader } from './IntroHeader';

export function IntroSection() {
  return (
    <section
      style={{ backgroundImage: 'url("intro/intro.jpg")' }}
      className="text-white min-h-screen flex flex-col relative bg-cover bg-no-repeat bg-center bg-fixed"
    >
      <IntroHeader />
      <div className="flex-1 flex center">
        <h2
          className="text-6xl"
          style={{ fontFamily: "'Bitter','Ubuntu','sans-serif'" }}
        >
          Recruit who goes the extra mile
        </h2>
      </div>
      <div className="flex flex-row justify-around items-end">
        <div className="p-4 flex flex-col gap-1">
          <div>
            <a
              className="hover:underline"
              href="https://github.com/yolisses"
            >
              yolisses
            </a>
          </div>
          <GitHubCalendar
            username="yolisses"
            theme={{
              level0: '#161b2288',
              level1: '#0e4429',
              level2: '#006d32',
              level3: '#26a641',
              level4: '#39d353',
            }}
          />
        </div>
        {/* <img src="/ulisses/ulisses.png" alt="" className="saturate-150" /> */}
      </div>
    </section>
  );
}
