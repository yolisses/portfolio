import GitHubCalendar from 'react-github-calendar';
import { ContactButton } from '../contact/ContactButton';
import { IntroHeader } from './IntroHeader';

export function IntroSection() {
  return (
    <section
      style={{ backgroundImage: 'url("intro/intro.jpg")' }}
      className="text-white h-screen flex flex-col justify-between items-center bg-cover bg-no-repeat bg-center bg-fixed"
    >
      <IntroHeader />
      <h2
        className="text-6xl mx-4 md:mx-8"
        style={{ fontFamily: "'Bitter','Ubuntu','sans-serif'" }}
      >
        Recruit who goes the extra mile
      </h2>
      <ContactButton />
      <div className="mx-4 md:mx-8 mb-2">
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
          href="https://github.com/yolisses"
        >
          yolisses
        </a>
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
    </section>
  );
}
