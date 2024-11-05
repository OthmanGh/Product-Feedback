import { MdKeyboardArrowUp } from '../../constants';
import { useFeedbackQuery } from '../../context/FeedbackQueryContext';

interface UpvotesProps {
  upvotes: string | number;
  id: number;
  className?: string;
}

const Upvotes = ({ upvotes, id, className }: UpvotesProps) => {
  const { incrementUpvotes } = useFeedbackQuery();

  const handleIncrementUpvotes = (id: number) => {
    incrementUpvotes(id);
  };

  return (
    <p
      className={`flex_between sm:gap-2 sm:h-fit sm:self-center gap-2 bg-purple-light  px-3 py-[6px] sm:py-[8px] rounded-lg hover:bg-moonlit-sky active:bg-blue cursor-pointer group transition-colors duration-300 ${className}`}
      onClick={() => handleIncrementUpvotes(id)}
    >
      <MdKeyboardArrowUp className='text-blue text-body-2 sm:text-2xl group-active:text-white' />
      <span className='text-blue-dark text-body-3 font-bold group-active:text-white'>
        {upvotes}
      </span>
    </p>
  );
};
export default Upvotes;
