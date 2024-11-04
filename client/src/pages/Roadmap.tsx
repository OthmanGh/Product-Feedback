import { useState } from 'react';
import {
  RoadmapHeader,
  RoadmapMobileNavbar,
  MobileRoadmapNavItems,
  feedbackRequests,
  RoadmapCardsMobile,
  RoadmapCards,
} from '../constants';
import { NavItemType } from '../types';

const Roadmap = () => {
  const [activeNavItem, setActiveNavItem] = useState<NavItemType>(
    MobileRoadmapNavItems[0].value as NavItemType
  );

  const filteredProductFeedbackRequests = feedbackRequests.filter(
    (feedback) => feedback.status === activeNavItem
  );

  const categoryCounts = feedbackRequests.reduce(
    (accum, item) => {
      if (item.status in accum) {
        accum[item.status as keyof typeof accum]++;
      }
      return accum;
    },

    {
      planned: 0,
      'in-progress': 0,
      live: 0,
      suggestion: 0,
    }
  );

  return (
    <div className='flex_col sm:gap-10 sm:p-4'>
      <RoadmapHeader />
      <RoadmapMobileNavbar
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
        categoryCounts={categoryCounts}
      />

      <div className='sm:hidden flex_col gap-4 py-7 px-5 mb-10'>
        {activeNavItem === 'planned' && (
          <div className='flex_col gap-[4px]'>
            <h2 className='text-heading-3 text-blue-dark font-bold'>
              Planned ({categoryCounts.planned})
            </h2>
            <p className='text-darkGray text-body-3'>
              Ideas prioritized for research
            </p>
          </div>
        )}

        {activeNavItem === 'in-progress' && (
          <div className='flex_col gap-[4px]'>
            <h2 className='text-heading-3 text-blue-dark font-bold'>
              In-Progress ({categoryCounts['in-progress']})
            </h2>
            <p className='text-darkGray text-body-3'>
              Features currently being developed{' '}
            </p>
          </div>
        )}

        {activeNavItem === 'live' && (
          <div className='flex_col gap-[4px]'>
            <h2 className='text-heading-3 text-blue-dark font-bold'>
              Live ({categoryCounts.live}){' '}
            </h2>
            <p className='text-darkGray text-body-3'>Released features </p>
          </div>
        )}

        <RoadmapCardsMobile
          filteredProductFeedbackRequests={filteredProductFeedbackRequests}
          activeNavItem={activeNavItem}
        />
      </div>

      <RoadmapCards />
    </div>
  );
};

export default Roadmap;
