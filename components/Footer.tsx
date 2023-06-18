import Image from "next/image";

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-400">
    <Image
      src="/../public/assets/navbar-logo.png"
      alt="navbar-logo"
      width={128}
      height={16}
    />
  </footer>
);

export default Footer;
