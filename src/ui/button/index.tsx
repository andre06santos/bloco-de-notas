import "./style.css";

const Button = ({ label, type, onClick }: any) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
