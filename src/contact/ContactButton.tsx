import { FaChevronRight } from 'react-icons/fa';
import './ContactButton.css';

export function ContactButton() {
  return (
    <button className="rounded-lg shadow p-2 pl-4 text-lg contact-button flex flex-row center">
      Call me
      <FaChevronRight className="inline" />
    </button>
  );
}
