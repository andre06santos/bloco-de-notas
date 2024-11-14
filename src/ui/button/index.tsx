import "./style.css";

interface ButtonProps{
  label: string,
  typeButton: "delete" | "add" | "cancel",
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, typeButton, onClick }: ButtonProps) => {
  const buttonClasses: Record<"delete" | "add" | "cancel", string> = {
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
