import { useEffect, useRef, useState } from 'react';
import { FaChevronRight, FaWhatsapp } from 'react-icons/fa';
import './ContactButton.css';

export function ContactButton() {
  const [floating, setFloating] = useState(false);

  return (
    <button
      className={`shadow p-2 contact-button flex flex-row center gap-1 transition-all ${
        floating
          ? 'fixed z-50 bottom-10 right-10 rounded-full text-4xl'
          : 'rounded-lg text-lg'}`}
    >
      <FaWhatsapp color="white" className="text-white inline" />
      {!floating && 'Contact me'}
    </button>
  );
}
