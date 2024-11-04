import { useNavigate } from 'react-router-dom';
import { BackButton, Button } from '../constants';

const CreateNewFeedback = () => {
  const navigate = useNavigate();
  return (
    <div className='flex_col gap-10 justify-center items-center py-10 max-w-[540px] mx-4 sm:mx-auto drop-shadow-sm'>
      <BackButton className='self-start' />

      <div className='relative flex_col gap-6 sm:gap-10 px-5 py-10 sm:p-10 bg-white rounded-lg drop-shadow-sm'>
        <h1 className='text-blue-dark text-heading-2 sm:text-heading-1 font-bold'>
          Create New Feedback
        </h1>

        <form className='relative flex_col gap-4 sm:gap-6'>
          <fieldset className='flex_col gap-4'>
            <div className='flex_col gap-[2px]'>
              <label className='text-blue-dark font-bold text-body-3'>
                Feedbackt title
              </label>
              <p className='text-darkGray text-body-3'>
                Add a short, descriptive headline
              </p>
            </div>

            <input className='bg-blue-light w-full h-[48px] px-5 text-blue-dark text-body-2 border-blue focus:border-2 rounded-md focus:outline-none' />
          </fieldset>

          <fieldset className='flex_col gap-4'>
            <div className='flex_col gap-[2px]'>
              <label className='text-blue-dark font-bold text-body-3'>
                Category
              </label>
              <p className='text-darkGray text-body-3'>
                Choose a category for your feedback{' '}
              </p>
            </div>

            <input className='bg-blue-light w-full h-[48px] px-5 text-blue-dark text-body-2 border-blue focus:border-2 rounded-md focus:outline-none' />
          </fieldset>

          <fieldset className='flex_col gap-4'>
            <div className='flex_col gap-[2px]'>
              <label className='text-blue-dark font-bold text-body-3'>
                Feedback Detail{' '}
              </label>
              <p className='text-darkGray text-body-3'>
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </div>

            <textarea className='bg-blue-light w-full h-[100px] px-5 py-2 text-blue-dark text-body-2 border-blue focus:border-2 rounded-md focus:outline-none' />
          </fieldset>

          <div className='sm:flex_row flex_col gap-3 sm:self-end'>
            <Button
              type='button'
              label='Cancel'
              color='gray'
              onClick={() => {
                navigate('/');
              }}
            />

            <Button
              type='submit'
              label='Add Feedback'
              color='purple'
              onClick={() => {}}
            />
          </div>
        </form>
        <img
          src='/shared/icon-new-feedback.svg'
          className='absolute -top-[18px] sm:-top-7 left-6 sm:left-[42px] w-[40px] h-[40px] sm:w-[56px] sm:h-[56px]'
        />
      </div>
    </div>
  );
};

export default CreateNewFeedback;
