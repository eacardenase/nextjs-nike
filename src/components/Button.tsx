import Image from 'next/image';

interface IButton {
  label: string;
  iconUrl: any;
  iconAlt: string;
}

const Button = ({ label, iconUrl, iconAlt }: IButton) => (
  <button className='flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white'>
    {label}
    <Image src={iconUrl} alt={iconAlt} className='ml-2 h-5 w-5 rounded-full' />
  </button>
);

export default Button;
