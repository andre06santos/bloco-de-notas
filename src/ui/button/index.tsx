import "./style.css"

const Button = ({ text, classButton, typeButtom, onClick }: any) => {
    return (<button type={typeButtom} className="button" onClick={onClick}>
        {text}
    </button>)
};

export { Button };
