import Image from "next/image";
import Link from "next/link";
import { LOGO_PROFILE, NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-container items-center padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          className="size-12"
          src={LOGO_PROFILE[0]}
          width={100}
          height={100}
          alt="logonakoni"
        />
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
