import axios from 'axios';
import { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

export function HomePage() {
  const [contributions, setContributions] = useState<any>();

  async function getContributions() {
    const res = await axios.get('https://github.com/users/yowlisses/contributions');
    console.log(res.data);
    setContributions(res.data);
  }

  useEffect(() => {
    getContributions();
  }, []);

  return (
    <div>
      <section className="text-5xl">
        <h2>Employ who goes the extra mile</h2>
        {contributions as string}
      </section>
      <GitHubCalendar username="yowlisses" />
    </div>
  );
}
