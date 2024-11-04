interface CategoryTagProps {
  category: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ category }) => (
  <p className='bg-purple-light rounded-[10px] px-4 py-2 text-blue font-semibold w-fit text-body-2'>
    {category}
  </p>
);

export default CategoryTag;
