import './styles.css'

const Note = ({note}:any) => {
  return (
    <div className="note">
        <p className="note__title">{note.title}</p>
        <p className="note__text">{note.text}</p>

        <div className="icons">
            <i className="fa-regular fa-pen-to-square"></i>
            <i className="fa-solid fa-trash"></i>
        </div>
    </div>
  )
}

export {Note}