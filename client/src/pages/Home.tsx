import { useState } from 'react';
import { MobileHeader, Overlay } from '../constants';
import MobileSidebar from '../ui/MobileSidebar';

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
    </div>
  );
};

export default Home;
