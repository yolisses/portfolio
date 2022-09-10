import {
  FaEnvelope, FaGithub, FaHeart, FaRegEnvelope,
} from 'react-icons/fa';

export function Footer() {
  return (
    <footer
      style={{
        backgroundImage: 'url("footer/footer.jpg")',
      }}
      className="text-white gap-2 justify-around bg-gray-900 bg-cover bg-center bg-fixed p-4 pt-20 grid"
    >
      <a
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
        href="https://github.com/yolisses/portfolio"
      >
        <FaGithub className="inline" />
        {' '}
        Want this page code?
      </a>
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
        className="hover:underline"
        href="mailto:iamurise@gmail.com"
      >
        <FaRegEnvelope className="inline" />
        {' '}
        iamurise@gmail.com
      </a>
    </footer>
  );
}
