import { Comments, CategoryTag, Upvotes } from '../constants';

interface Feedback {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments: { id: number; content: string }[] | undefined;
}

interface FeedbackItemProps {
  feedback: Feedback;
}

const FeedbackContent = ({ feedback }: { feedback: Feedback }) => (
  <div className='flex_col gap-3'>
    <h2 className='text-heading-3 text-blue-dark font-semibold'>
      {feedback.title}
    </h2>
    <p className='text-body-3 text-darkGray'>{feedback.description}</p>
    <CategoryTag category={feedback.category} />
  </div>
);

const FeedbackItem = ({ feedback }: FeedbackItemProps) => {
  const commentCount = feedback.comments?.length ?? 0;

  return (
    <>
      {/* Mobile Layout */}
      <li className='flex_col sm:hidden gap-5 bg-white shadow-sm p-4 rounded-[10px] w-full'>
        <FeedbackContent feedback={feedback} />
        <div className='flex_between'>
          <Upvotes upvotes={feedback.upvotes} id={feedback.id} />
          <Comments commentCount={commentCount} />
        </div>
      </li>

      {/* Desktop Layout */}
      <li className='hidden sm:flex sm:justify-between bg-white shadow-sm p-4 rounded-[10px] w-full'>
        <div className='flex_between gap-10'>
          <Upvotes upvotes={feedback.upvotes} id={feedback.id} />
          <FeedbackContent feedback={feedback} />
        </div>
        <Comments commentCount={commentCount} />
      </li>
    </>
  );
};

export default FeedbackItem;
