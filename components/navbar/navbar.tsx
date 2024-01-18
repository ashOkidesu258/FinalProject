import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-container items-center padding-container relative z-30 py-5">
      <Link href="/">
        <Image className="size-12" src={logo} alt="logonakoni" />
      </Link>
      <ul className="h-full gap-6 flex flex-row font-xs text-xs">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="tracking-tighter text-sm cursor-pointer pb-1 transition-all hover:font-semibold hover:text-red-500"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
