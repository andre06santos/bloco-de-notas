import './styles.css'

const Note = ({title, text}:any) => {
  return (
    <div className="note">
        <p className="note__title">{title}</p>
        <p className="note__text">{text}</p>

        <div className="icons">
            <i className="fa-regular fa-pen-to-square"></i>
            <i className="fa-solid fa-trash"></i>
        </div>
    </div>
  )
}

export {Note}