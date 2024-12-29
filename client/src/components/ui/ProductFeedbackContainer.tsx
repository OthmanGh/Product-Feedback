import { FeedbackItem, EmptyProductFeedback } from "../../constants"
import { useFeedbackQuery } from "../../context/FeedbackQueryContext"

const ProductFeedbackContainer = () => {
  const { sortedFeedbackRequests } = useFeedbackQuery()

  return (
    <ul className='flex_col gap-4 py-10 px-4 sm:p-0 overflow-y-scroll'>
      {sortedFeedbackRequests.length > 0 ? (
        sortedFeedbackRequests.map((feedback) => (
          <FeedbackItem key={feedback.id} feedback={feedback} />
        ))
      ) : (
        <EmptyProductFeedback />
      )}
    </ul>
  )
}

export default ProductFeedbackContainer
