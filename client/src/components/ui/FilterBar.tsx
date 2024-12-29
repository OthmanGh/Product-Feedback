import { useNavigate } from "react-router-dom"
import { CustomDropdown, Button, selectOptions } from "../../constants"
import { useFeedbackQuery } from "../../context/FeedbackQueryContext"

const FilterBar = () => {
  const navigate = useNavigate()
  const { numOfSuggestedFeedbackRequests } = useFeedbackQuery()

  return (
    <div className='bg-blue-dark flex_between text-body-3 px-4 py-[10px] sm:rounded-[10px] text-white lg:py-4'>
      <div className='hidden sm:flex_between sm:gap-4 '>
        <img
          src='/suggestions/icon-suggestions.svg'
          className='sm:h-6 sm:w-6 lg:h-7 lg:w-7'
        />
        <p className='text-body-1 font-bold mr-4'>
          {numOfSuggestedFeedbackRequests | 0} Suggestions
        </p>

        <CustomDropdown dropdownList={selectOptions} />
      </div>
      <div className='sm:hidden'>
        <CustomDropdown dropdownList={selectOptions} />
      </div>
      <Button
        label='+ Add Feedback'
        color='purple'
        onClick={() => {
          navigate("create-new-feedback")
        }}
      />
    </div>
  )
}

export default FilterBar
