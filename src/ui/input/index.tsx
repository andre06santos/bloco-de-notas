import "./styles.css";

interface InputProps {
  label?: string;
  typeInput: "text" | "submit";
  value?: string;
}

const Input: React.FC<InputProps> = ({ label, typeInput, value }) => {
  const classInput: Record<"text" | "submit", string> = {
    text: "input-text",
    submit: "input-submit",
  };

  const inputClass = classInput[typeInput];

  return (
    <div className="input_component">
      {label && <label className="input__label">{label}</label>}
      <input type={typeInput} value={value} className={inputClass} />
    </div>
  );
};

export { Input };
