type ButtonProps = {
  label: string;
  color: string;
  onClick: () => void;
};

const Button = ({ label, color, onClick }: ButtonProps) => {
  return (
    <button
      className={`bg-${color} py-3 px-4 rounded-[10px] text-white font-semibold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
