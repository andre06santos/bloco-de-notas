import "./styles.css";

const Input = ({ label, type, value, setValue, onClick}: any) => {
  const inputClasses: any = {
    text: "input-text",
    submit: "input-submit",
  };

  const className = inputClasses[type];

  return (
    <div className="input_component">
      {label && <label className="input__label">{label}</label>}
      <input type={type} value={value} className={className} onChange={(e) => setValue(e.target.value)} onSubmit={onClick}/>
    </div>
  );
};

export { Input };
