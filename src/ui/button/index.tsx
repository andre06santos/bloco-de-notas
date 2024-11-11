import "./style.css";

const Button = ({ label, typeButton, onClick }: any) => {
  const buttonClasses: any = {
    delete: "button-delete",
    add: "button-add",
    cancel: "button-cancel",
  };

  const className = buttonClasses[typeButton];

  return (
    <button type="button" className={`${className} button`} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
