type MobileHeaderProps = {
  isModalOpen: boolean;
  toggleMobileModal: () => void;
};

const MobileHeader = ({
  isModalOpen,
  toggleMobileModal,
}: MobileHeaderProps) => {
  return (
    <header className='bg-mobile-header fill_bg flex_between p-4 text-white sm:hidden'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-heading-3'>Frontend Mentor</h1>
        <p className='text-body-2 opacity-75'>Feedback Board</p>
      </div>

      {isModalOpen ? (
        <img
          src='/shared/mobile/icon-close.svg'
          onClick={toggleMobileModal}
          className='toggle_modal'
        />
      ) : (
        <img
          src='/shared/mobile/icon-hamburger.svg'
          className='toggle_modal'
          onClick={toggleMobileModal}
        />
      )}
    </header>
  );
};

export default MobileHeader;
