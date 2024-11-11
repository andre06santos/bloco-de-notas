import "./styles.css";

const Input = ({label, value, setValue}: any) => {
  return (
    <div className={`input_component`}>
      {label && <label className="input__label">{label}</label>}
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  );
};

export {Input};
