const FeedbackBoardCard = () => {
  return (
    <div className='sm:bg-tablet-header lg:bg-desktop-header fill_bg rounded-[10px] overflow-hidden relative text-white lg:min-h-[23vh]'>
      <div className='sm:absolute sm:top-24 sm:left-[8%] lg:top-[52%]'>
        <h2 className='sm:text-heading-2 lg:text-heading-1 font-bold'>
          Frontend Mentor
        </h2>
        <p className='text-body-3 lg:text-body-2 opacity-75'>Feedback Board</p>
      </div>
    </div>
  );
};

export default FeedbackBoardCard;
