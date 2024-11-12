import "./styles.css";

const Input = ({ label, type , ...rest}: any) => {
  const inputClasses: any = {
    text: "input-text",
    submit: "input-submit",
  };

  const className = inputClasses[type];

  return (
    <div className="input_component">
      {label && <label className="input__label">{label}</label>}
      <input type={type} className={className} {...rest}/>
    </div>
  );
};

export { Input };
