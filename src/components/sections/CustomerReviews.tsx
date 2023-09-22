import { reviews } from '@/constants';
import ReviewCard from '../ReviewCard';

const CustomerReviews = () => (
  <section className='max-container'>
    <h3 className='text-center font-palanquin text-4xl font-bold'>
      What Our <span className='text-coral-red'>Customers</span> Say?
    </h3>

    <p className='m-auto mt-4 max-w-lg text-center font-montserrat text-lg leading-7 text-slate-gray'>
      Hear genuine stories from our satistied customers about their exceptional
      experiences with us.
    </p>

    <div className='mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col'>
      {reviews.map((review) => (
        <ReviewCard key={review.customerName} {...review} />
      ))}
    </div>
  </section>
);

export default CustomerReviews;
