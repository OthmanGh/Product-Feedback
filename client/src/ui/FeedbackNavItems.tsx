import { useFeedbackQuery } from '../context/FeedbackQueryContext';

export const menuNavItems = [
  { value: 'all', label: 'All' },
  { value: 'ui', label: 'UI' },
  { value: 'ux', label: 'UX' },
  { value: 'enhancement', label: 'Enhancement' },
  { value: 'bug', label: 'Bug' },
  { value: 'feature', label: 'Feature' },
];

const FeedbackNavItems = () => {
  const { activeFeedbackNavItems, setActiveFeedbackNavItems } =
    useFeedbackQuery();

  return (
    <div className='p-5 bg-white rounded-[10px] shadow-sm w-full z-0'>
      <ul className='flex items-center gap-3'>
        {menuNavItems.slice(0, 3).map((item, i) => (
          <li
            value={item.value}
            onClick={() => setActiveFeedbackNavItems(item.value)}
            key={i}
            className={`feedback_nav_item ${
              activeFeedbackNavItems === item.value
                ? 'active_feedback_nav_item'
                : 'hover:bg-moonlit-sky cursor-pointer'
            } transition-colors duration-300`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-3 mt-2'>
        {menuNavItems.slice(3, 5).map((item, i) => (
          <li
            value={item.value}
            onClick={() => setActiveFeedbackNavItems(item.value)}
            key={i}
            className={`feedback_nav_item ${
              activeFeedbackNavItems === item.value
                ? 'active_feedback_nav_item'
                : 'hover:bg-moonlit-sky cursor-pointer'
            } transition-colors duration-300`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-3 mt-2'>
        {menuNavItems.slice(5, 6).map((item, i) => (
          <li
            value={item.value}
            onClick={() => setActiveFeedbackNavItems(item.value)}
            key={i}
            className={`feedback_nav_item ${
              activeFeedbackNavItems === item.value
                ? 'active_feedback_nav_item'
                : 'hover:bg-moonlit-sky cursor-pointer'
            } transition-colors duration-300`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackNavItems;
