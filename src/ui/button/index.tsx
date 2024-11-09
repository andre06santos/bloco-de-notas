import React from "react";
import "./style.css";

interface ButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset";
  typeButton: "delete" | "add" | "cancel";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  typeButton,
  onClick,
}: ButtonProps) => {
  const classButton: Record<"delete" | "add" | "cancel", string> = {
    delete: "button-delete",
    add: "button-add",
    cancel: "button-cancel",
  };

  const buttonClass = classButton[typeButton];

  return (
    <button type={type} className={`${buttonClass} button`} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
