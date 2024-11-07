import "./styles.css"

const Textarea = ({label }: any) => {
  return (
    <div className={`textarea_component`}>
      {label && <label className="textarea__label">{label}</label>}
      <textarea></textarea>
    </div>
  )
}

export {Textarea}