import { Link } from 'react-router-dom';
import { roadmapItems } from '../constants';

const RoadmapCard = () => {
  return (
    <div className='w-full p-5 rounded-[10px] shadow-sm bg-white'>
      <div className='flex_between bg-white mb-4'>
        <h2 className='text-heading-3 text-blue-dark font-bold'>Roadmap</h2>
        <Link
          to='/roadmap'
          className='text-body-3 text-blue font-semibold underline hover:text-soft-periwinkle'
        >
          View
        </Link>
      </div>

      <ul className='text-darkGray'>
        {roadmapItems.map((item, i) => (
          <li key={i} className='flex_between mb-1'>
            <div className='flex_center'>
              <div className={`h-2 w-2 ${item.color} rounded-full`}></div>
              <p className=''>{item.label}</p>
            </div>
            <p className='font-bold'>{item.numItems}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapCard;
