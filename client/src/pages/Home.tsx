import { useState } from 'react';
import { MobileHeader, Overlay, MobileSidebar, FilterBar } from '../constants';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className='relative h-screen'>
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

      <FilterBar />
    </div>
  );
};

export default Home;
