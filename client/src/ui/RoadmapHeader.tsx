import { useNavigate } from 'react-router-dom';
import { BackButton, Button } from '../constants';

const RoadmapHeader = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-blue-dark flex_between h-[100px] px-6 sm:rounded-lg'>
      <div className='flex_col gap-[3px]'>
        <BackButton
          labelClass='text-white text-body-3 '
          className='gap-[16px]'
          iconClass='text-misty-blue text-md'
        />
        <h2 className='text-white font-bold text-heading-3'>Roadmap</h2>
      </div>

      <Button
        type='submit'
        label='+ Add Feedback'
        color='purple'
        onClick={() => {
          navigate('/create-new-feedback');
        }}
      />
    </div>
  );
};

export default RoadmapHeader;
