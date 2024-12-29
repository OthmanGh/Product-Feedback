type ButtonProps = {
  label: string;
  color: 'blue' | 'purple' | 'gray' | 'red';
  onClick: () => void;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
};

const Button = ({
  label,
  color,
  onClick,
  className,
  type = 'button',
}: ButtonProps) => {
  const actualColor =
    color === 'purple'
      ? '#AD1FEA'
      : color === 'blue'
      ? '#4661E6'
      : color === 'gray'
      ? '#3A4374'
      : '#D73737';

  const hoverColor =
    color === 'purple'
      ? '#C75AF6'
      : color === 'blue'
      ? '#7C91F9'
      : color === 'gray'
      ? '#656EA3'
      : '#E98888';

  return (
    <button
      style={{
        backgroundColor: actualColor,
        transition: 'background-color 0.3s',
      }}
      className={`py-3 px-4 lg:py-[12px] lg:px-6 rounded-[10px] text-white font-semibold ${className}`}
      onClick={onClick}
      type={type}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = actualColor)
      }
    >
      {label}
    </button>
  );
};

export default Button;
