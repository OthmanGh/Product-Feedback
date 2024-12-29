import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

type BackButtonProps = {
  className?: string;
  iconClass?: string;
  labelClass?: string;
};

const BackButton = ({ className, iconClass, labelClass }: BackButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      className={`flex_row gap-4 group ${className}`}
      onClick={() => navigate(-1)}
    >
      <MdKeyboardArrowLeft className={`text-blue text-xl ${iconClass}`} />
      <span
        className={`text-darkGray text-body-1 font-bold group-hover:underline underline-offset-1 ${labelClass}`}
      >
        Go Back
      </span>
    </button>
  );
};

export default BackButton;
