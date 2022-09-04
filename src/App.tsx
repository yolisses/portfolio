import { HomePage } from './home/HomePage';
import { AudioContextProvider } from './mai/AudioContext';

export function App() {
  return (
    <AudioContextProvider>
      <HomePage />
    </AudioContextProvider>
  );
}
