import FeedbackNavItems from './FeedbackNavItems';
import RoadmapCard from './RoadmapCard';

const MobileSidebar = () => {
  return (
    <div className='absolute bg-blue-light top-13 right-0 left-[22%] h-full z-20 flex flex-col gap-6 items-center sm:hidden p-5'>
      <FeedbackNavItems />
      <RoadmapCard />
    </div>
  );
};

export default MobileSidebar;
