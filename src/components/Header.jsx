import Image from "next/image";

import sIcon from "../assets/spacklesIcon.svg";
import Link from "next/link";

const Header = () => {
  return (
    <main className="p-1 max-w-2xl mx-auto">
      <header className="flex justify-between my-2 sm:my-8">
        <Link href="/" className="flex gap-1">
          <Image src={sIcon} height={30} width={30} alt="logo" />

          <span>EpicCaptions</span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-6 text-white/80 text-sm sm:text-bas">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <a href="mailto:tusharupadhyay691@gmail.com">Contact</a>
        </nav>
      </header>
    </main>
  );
};

export default Header;
