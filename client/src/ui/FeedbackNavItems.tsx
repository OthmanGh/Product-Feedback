import { useState } from 'react';
import { menuNavItems } from '../constants';

const FeedbackNavItems = () => {
  const [activeFeedbackNavItems, setActiveFeedbackNavItems] = useState('all');

  return (
    <ul className='flex_wrap p-5 bg-white rounded-[10px] shadow-sm w-full '>
      {menuNavItems.map((item, i) => (
        <li
          value={item.value}
          onClick={() => setActiveFeedbackNavItems(item.value)}
          key={i}
          className={`feedback_nav_item ${
            activeFeedbackNavItems === item.value
              ? 'active_feedback_nav_item'
              : ''
          } min-w-[50px]`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default FeedbackNavItems;
