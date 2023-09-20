import Image from 'next/image';

import { headerLogo } from '../../public/images';
import { hamburger } from '../../public/icons';
import { navLinks } from '@/constants';
import Link from 'next/link';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="max-lg:hidden flex flex-1 justify-center items-center gap-16">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="max-lg:block hidden">
          <Image src={hamburger} width={25} height={25} alt="Hamburger" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
