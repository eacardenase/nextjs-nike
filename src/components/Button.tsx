import Image from 'next/image';

interface IButton {
  label: string;
  iconUrl: any;
  iconAlt: string;
}

const Button = ({ label, iconUrl, iconAlt }: IButton) => (
  <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
    {label}
    <Image src={iconUrl} alt={iconAlt} className="ml-2 rounded-full w-5 h-5" />
  </button>
);

export default Button;
