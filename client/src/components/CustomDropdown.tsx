import { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp, FaCheck } from '../constants';

interface DropdownOpion {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  dropdownList: DropdownOpion[];
}

const CustomDropdown = ({ dropdownList }: CustomDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(dropdownList[0]);
  const [openSelectOptions, setOpenSelectOptions] = useState(false);

  const handleSelectOption = (option: DropdownOpion) => {
    setSelectedOption(option);
  };

  console.log(selectedOption);

  const toggleSelectOption = () => {
    setOpenSelectOptions((prev) => !prev);
  };

  return (
    <div className=''>
      <div
        className='relative flex_center !gap-2 text-lightGray cursor-pointer'
        onClick={toggleSelectOption}
      >
        <p>Sort by : </p>
        <div className='flex_center !gap-1 white'>
          <p className='text-white'>{selectedOption.label}</p>

          {openSelectOptions ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>

        {openSelectOptions && (
          <ul className='absolute top-10 rounded-lg bg-white text-darkGray overflow-hidden shadow-sm'>
            {dropdownList.map((option, i) => (
              <li
                value={option.value}
                key={i}
                className={`${
                  option.value !==
                    dropdownList[dropdownList.length - 1].value &&
                  'border-b-[1px]'
                } hover:bg-lightGray transition-all duration-300 flex_between text-body-2 p-3 w-52`}
                onClick={() => handleSelectOption(option)}
              >
                <span>{option.label}</span>

                {selectedOption.value === option.value && (
                  <FaCheck className='inline-block text-purple ml-[20px] justify-end' />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
