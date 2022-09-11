import { FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import './ContactButton.css';

export function ContactButton() {
  return (
    <button className="rounded-lg shadow p-2 text-lg contact-button flex flex-row center gap-1">
      <FaWhatsapp color="white" className="text-white inline" />
      Contact me
    </button>
  );
}
