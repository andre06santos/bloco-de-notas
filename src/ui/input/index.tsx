import "./styles.css";

const Input = ({labelText, inline }: any) => {
  return (
    <div className={`input_component ${!inline && "input_not_inline"}`}>
      {labelText && <label className="input__label">{labelText}</label>}
      <input type="text" />
    </div>
  );
};

export default Input;
