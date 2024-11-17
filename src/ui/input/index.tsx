import { InputHTMLAttributes } from "react";
import "./styles.css";

type InputProps = {
  label?: string;
  type: "text" | "submit" | "reset";
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, type, ...rest }: InputProps) => {
  const inputClasses: Record<"text" | "submit" | "reset", string> = {
    text: "input-text",
    submit: "input-submit",
    reset: "input-reset",
  };

  const className = inputClasses[type];

  return (
    <div className="input_component">
      {label && <label className="input__label">{label}</label>}
      <input type={type} className={className} {...rest} />
    </div>
  );
};

export { Input };
