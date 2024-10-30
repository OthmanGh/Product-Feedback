import { CustomDropdown, Button, selectOptions } from '../constants';

const FilterBar = () => {
  return (
    <div className='bg-blue-dark flex_between text-body-3 px-3 py-4'>
      <CustomDropdown dropdownList={selectOptions} />
      <Button label='+ Add Feedback' color='purple' onClick={() => {}} />
    </div>
  );
};

export default FilterBar;
