import "./style.css";

const Button = ({ label, type, onClick, id }: any) => {
  return (
    <button id={id} type={type} className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
