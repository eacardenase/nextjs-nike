import Image from 'next/image';
import { star } from '../../public/icons';

interface IReview {
  imgURL: any;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ imgURL, rating, feedback, customerName }: IReview) => (
  <div className='flex flex-col items-center justify-center'>
    <Image
      className='h-32 w-32 rounded-full object-cover'
      src={imgURL}
      alt='review card'
    />
    <p className='mt-6 max-w-sm text-center font-montserrat text-lg leading-7 text-slate-gray'>
      {feedback}
    </p>
    <div className='mt-3 flex items-center justify-center gap-2.5'>
      <Image
        src={star}
        alt='rating'
        width={24}
        height={24}
        className='m-0 object-contain'
      />
      <p className='font-montserrat text-xl text-slate-gray'>({rating})</p>
    </div>
    <h3 className='mt-1 text-center font-palanquin text-3xl font-bold'>
      {customerName}
    </h3>
  </div>
);

export default ReviewCard;
