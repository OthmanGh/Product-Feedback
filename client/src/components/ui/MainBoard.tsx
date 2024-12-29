import {
  RoadmapCard,
  FeedbackBoardCard,
  FeedbackNavItems,
} from "../../constants"

const MainBoard = () => {
  return (
    <div className='hidden sm:grid sm:grid-cols-3 sm:gap-2 lg:flex lg:flex-col lg:w-[22%] lg:gap-6'>
      <FeedbackBoardCard />
      <FeedbackNavItems />
      <RoadmapCard />
    </div>
  )
}

export default MainBoard
