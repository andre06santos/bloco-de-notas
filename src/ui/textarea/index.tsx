import { TextareaHTMLAttributes } from "react";
import "./styles.css";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

const Textarea = ({ label, ...rest }: TextareaProps) => {
  return (
    <div className="textarea_component">
      {label && <label className="textarea__label">{label}</label>}
      <textarea {...rest}></textarea>
    </div>
  );
};

export { Textarea };
