import { MobileRoadmapNavItems } from '../constants';
import { NavItemType } from '../types';
import { Dispatch, SetStateAction } from 'react';

interface categoryCountsProps {
  planned: number;
  'in-progress': number;
  live: number;
  suggestion: number;
}

type RoadmapMobileNavbarProps = {
  activeNavItem: NavItemType;
  setActiveNavItem: Dispatch<SetStateAction<NavItemType>>;
  categoryCounts: categoryCountsProps;
};

const RoadmapMobileNavbar = ({
  activeNavItem,
  setActiveNavItem,
  categoryCounts,
}: RoadmapMobileNavbarProps) => {
  return (
    <ul className='flex_between sm:hidden border-b-[1px] border-slate-lavender border-opacity-25'>
      {MobileRoadmapNavItems.map((item) => (
        <li
          key={item.value}
          style={{
            borderBottom: `${
              activeNavItem === item.value ? `4px solid ${item.color}` : 'none'
            }`,
          }}
          onClick={() => setActiveNavItem(item.value as NavItemType)}
          className={`p-5 font-bold text-blue-dark transition-all duration-300 ease-in-out text-body-3 ${
            item.value === activeNavItem
              ? 'text-opacity-100'
              : 'text-opacity-40 border-b-0 cursor-pointer'
          }`}
        >
          <p>
            {item.label} (
            {categoryCounts[item.value as keyof categoryCountsProps]})
          </p>
        </li>
      ))}
    </ul>
  );
};

export default RoadmapMobileNavbar;
