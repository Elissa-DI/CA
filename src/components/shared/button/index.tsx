import React from "react";

interface ButtonProps {
  label: string;

  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }) => {
  return (
    <button
      className={`bg-[#FED56D] hover:bg-[#ebb52d] text-black font-normal py-2 px-4 rounded-full ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
