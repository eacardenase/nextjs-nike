import { Metadata } from 'next';

import Nav from '../components/Nav';
import {
  CustomerReviews,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  Subscribe,
  Footer,
} from '../components/sections';

export const metadata: Metadata = {
  title: 'Nike',
  description: 'Nike landing page',
};

const Home = () => (
  <main className='relative'>
    <Nav />
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Hero />
    </section>
    <section className='padding'>
      <PopularProducts />
    </section>
    <section className='padding'>
      <SuperQuality />
    </section>
    <section className='padding-x py-10'>
      <Services />
    </section>
    <section className='padding'>
      <SpecialOffers />
    </section>
    <section className='padding bg-pale-blue'>
      <CustomerReviews />
    </section>
    <section className='padding-x w-full py-16 sm:py-32'>
      <Subscribe />
    </section>
    <section className='padding-x padding-t bg-black pb-8'>
      <Footer />
    </section>
  </main>
);

export default Home;
