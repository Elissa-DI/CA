import React, { ReactNode, MouseEvent } from "react";

interface ButtonWithIconProps {
  label: string;
  icon?: ReactNode; // Make icon optional
  className?: string;
  onClick?: (event: MouseEvent) => void; // Adjust the onClick type
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  label,
  icon,
  className,
  onClick,
}) => {
  const handleClick = (event: MouseEvent) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`flex items-center border border-[#282828] bg-transparent hover:bg-[#ebb52d] text-white font-bold py-2 px-4 rounded-full ${className}`}
      onClick={handleClick} // Attach the handleClick function to onClick
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default ButtonWithIcon;
