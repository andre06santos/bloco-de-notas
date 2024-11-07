import "./styles.css";

const Input = ({label}: any) => {
  return (
    <div className={`input_component`}>
      {label && <label className="input__label">{label}</label>}
      <input type="text" />
    </div>
  );
};

export {Input};
