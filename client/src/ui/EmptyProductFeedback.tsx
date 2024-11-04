import { useNavigate } from 'react-router-dom';
import { Button } from '../constants';

const EmptyProductFeedback = () => {
  const navigate = useNavigate();
  return (
    <section className='bg-white h-screen flex flex-col gap-4 justify-center items-center py-6 px-4 rounded-[10px] shadow-sm'>
      <img
        src='/suggestions/illustration-empty.svg'
        className='w-[100px] h-fit mx-auto mb-2'
      />
      <p className='text-blue-dark font-bold text-body-1'>
        There is no feedback yet.
      </p>

      <p className='text-darkGray text-body-3 sm:text-body-1 text-center'>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>

      <Button
        label='+ Add Feedback'
        color='purple'
        onClick={() => {
          navigate('/create-new-feedback');
        }}
        className='justify-end'
      />
    </section>
  );
};

export default EmptyProductFeedback;
