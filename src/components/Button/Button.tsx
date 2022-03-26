import React from "react";
import "./Button.scss";

export interface ButtonProps {
  variant?: "primary" | "success";
  disabled?: boolean;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ variant, disabled, label }) => {
  return (
    <button
      className={`btn ${variant ? `btn-${variant}` : ""}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
