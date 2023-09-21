import Image from 'next/image';

import { headerLogo } from '../../public/images';
import { hamburger } from '../../public/icons';
import { navLinks } from '@/constants';
import Link from 'next/link';

const Nav = () => {
  return (
    <header className='padding-x absolute z-10 w-full py-8'>
      <nav className='max-container flex items-center justify-between'>
        <a href='/'>
          <Image src={headerLogo} alt='Logo' width={130} height={29} />
        </a>
        <ul className='flex flex-1 items-center justify-center gap-16 max-lg:hidden'>
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className='font-montserrat text-lg leading-normal text-slate-gray'
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <Image src={hamburger} width={25} height={25} alt='Hamburger' />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
