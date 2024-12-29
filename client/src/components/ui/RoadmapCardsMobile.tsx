import { CategoryTag, Upvotes, Comments } from "../../constants"
import { NavItemType } from "../../types"

interface Feedback {
  id: number
  title: string
  description: string
  category: string
  upvotes: number
  comments: { id: number; content: string }[] | null
}

interface RoadmapCardsProps {
  filteredProductFeedbackRequests: Feedback[]
  activeNavItem: NavItemType
}

const RoadmapCardsMobile = ({
  activeNavItem,
  filteredProductFeedbackRequests,
}: RoadmapCardsProps) => {
  return (
    <ul className='flex_col gap-10'>
      {filteredProductFeedbackRequests.map((feedback) => (
        <li
          key={feedback.id}
          className={`bg-white rounded-lg flex_col gap-5 p-4 border-t-[6px] sm:border-t-8 ${
            activeNavItem === "in-progress"
              ? "border-purple"
              : activeNavItem === "planned"
              ? "border-peach"
              : "border-sky"
          }`}
        >
          <div className='flex_row gap-2'>
            <div
              className={`${
                activeNavItem === "in-progress"
                  ? "bg-purple"
                  : activeNavItem === "planned"
                  ? "bg-peach"
                  : "bg-sky"
              } w-2 h-2 rounded-full`}
            ></div>
            <p className='text-darkGray text-body-3'>
              {activeNavItem === "in-progress"
                ? "In Progress"
                : activeNavItem === "planned"
                ? "Planned"
                : "live"}
            </p>
          </div>

          <div className='flex_col gap-[9px]'>
            <h2 className='text-blue-dark font-bold text-heading-4'>
              {feedback.title}
            </h2>
            <p className='text-body-3 text-darkGray'>{feedback.description}</p>
          </div>
          <CategoryTag category={feedback.category} />

          <div className='flex_between'>
            <Upvotes upvotes={feedback.upvotes} />
            <Comments commentCount={feedback?.comments?.length || 0} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default RoadmapCardsMobile
