import { useState } from 'react';
import {
  MobileHeader,
  Overlay,
  MobileSidebar,
  FilterBar,
  MainBoard,
  ProductFeedbackContainer,
} from '../constants';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className='relative h-screen sm:p-4 sm:flex sm:flex-col sm:gap-4 lg:flex-row lg:gap-8'>
      <MobileHeader
        isModalOpen={isModalOpen}
        toggleMobileModal={toggleMobileModal}
      />

      {isModalOpen && (
        <>
          <MobileSidebar />
          <Overlay />
        </>
      )}

      <MainBoard />

      <div className='sm:flex sm:flex-col sm:gap-4 lg:flex-1 lg:gap-6'>
        <FilterBar />
        <ProductFeedbackContainer />
      </div>
    </div>
  );
};

export default Home;
