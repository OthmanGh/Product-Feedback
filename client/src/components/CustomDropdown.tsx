import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, FaCheck } from '../constants';
import { useFeedbackQuery } from '../context/FeedbackQueryContext';

interface DropdownOpion {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  dropdownList: DropdownOpion[];
}

const CustomDropdown = ({ dropdownList }: CustomDropdownProps) => {
  const [openSelectOptions, setOpenSelectOptions] = useState(false);
  const { selectedSortOption, setSelectedSortOption } = useFeedbackQuery();
  const handleSelectOption = (option: DropdownOpion) => {
    setSelectedSortOption(option);
  };

  const toggleSelectOption = () => {
    setOpenSelectOptions((prev) => !prev);
  };

  return (
    <div
      className='relative flex_center !gap-2 text-lightGray cursor-pointer lg:text-body-1 self-center group'
      onClick={toggleSelectOption}
    >
      <p>Sort by : </p>
      <div className='flex_center !gap-1 white'>
        <p className='text-white group-hover:text-lightGray'>
          {selectedSortOption.label}
        </p>

        {openSelectOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>

      {openSelectOptions && (
        <ul className='absolute top-10 rounded-lg bg-white text-darkGray overflow-hidden shadow-sm'>
          {dropdownList.map((option, i) => (
            <li
              value={option.value}
              key={i}
              className={`${
                option.value !== dropdownList[dropdownList.length - 1].value &&
                'border-b-[1px]'
              } hover:bg-lightGray transition-all duration-300 flex_between text-body-2 p-3 w-52`}
              onClick={() => handleSelectOption(option)}
            >
              <span>{option.label}</span>

              {selectedSortOption.value === option.value && (
                <FaCheck className='inline-block text-purple ml-[20px] justify-end' />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
