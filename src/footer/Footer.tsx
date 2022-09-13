import {
  FaGithub, FaLinkedin, FaRegEnvelope, FaWhatsapp,
} from 'react-icons/fa';

export function Footer() {
  return (
    <footer
      style={{
        backgroundImage: 'url("footer/footer.jpg")',
      }}
      className="text-white gap-2 text-sm justify-around bg-gray-900 bg-cover bg-center bg-fixed p-4 pt-8 grid grid-flow-col relative z-20"
    >
      <div className="flex flex-col gap-2">
        <div>
          Crafted with
          {' '}
          <img
            alt="love"
            width={18}
            className="inline"
            src="footer/heart.png"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
        <div>
          © Ulisses Pereira 2022
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
          href="https://github.com/yolisses/portfolio"
        >
          Want this page code?
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
          href="https://wa.me/558393450389?text=Hi!%20I%20saw%20your%20portfolio%20and%20want%20to%20have%20a%20talk"
        >
          <FaWhatsapp className="inline" />
          {' '}
          +55 83 9345-0389
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
          href="mailto:iamurise@gmail.com"
        >
          <FaRegEnvelope className="inline" />
          {' '}
          iamurise@gmail.com
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
          href="https://github.com/yolisses"
        >
          <FaGithub className="inline" />
          {' '}
          yolisses
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
          href="https://www.linkedin.com/in/yolisses"
        >
          <FaLinkedin className="inline" />
          {' '}
          Ulisses Pereira
        </a>
      </div>
    </footer>
  );
}
