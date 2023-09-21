import Image from 'next/image';
import { offer } from '../../../public/images';
import { arrowRight } from '../../../public/icons';

const SpecialOffers = () => (
  <section className='justify-wrap max-container flex items-center gap-10 max-xl:flex-col-reverse'>
    <div className='flex-1 '>
      <Image
        src={offer}
        width={773}
        height={687}
        className='w-full object-contain'
        alt='offer'
      />
    </div>
    <div className='flex flex-1 flex-col'>
      <h2 className='font-palanquin text-4xl font-bold capitalize lg:max-w-lg'>
        <span className='text-coral-red'>Special</span> Offer
      </h2>

      <p className='info-text mt-4 lg:max-w-lg'>
        Embark on a shopping journey that redefines your experience with
        unbeatable deals. From premier selections to incredible savings, we
        offer unparalleded value that sets us appart.
      </p>

      <p className='info-text mt-6 lg:max-w-lg'>
        Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional.
      </p>

      <div className='mt-11 flex flex-wrap gap-4'>
        <button className='flex items-center justify-center gap-2 rounded-full border border-coral-red bg-coral-red px-7 py-4 font-montserrat text-lg leading-none text-white'>
          Shop now
          <Image
            src={arrowRight}
            className='ml-2 h-5 w-5 rounded-full'
            alt='arrow right icon'
          />
        </button>
        <button className='flex items-center justify-center gap-2 rounded-full border border-slate-gray bg-white px-7 py-4 font-montserrat text-lg leading-none text-slate-gray'>
          Learn more
        </button>
      </div>
    </div>
  </section>
);

export default SpecialOffers;
