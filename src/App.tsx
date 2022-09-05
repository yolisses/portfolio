import { DevPage } from './dev/DevPage';
import { HomePage } from './home/HomePage';
import { AudioContextProvider } from './mai/AudioContext';

export function App() {
  return <DevPage />;

  return (
    <AudioContextProvider>
      <HomePage />
    </AudioContextProvider>
  );
}
