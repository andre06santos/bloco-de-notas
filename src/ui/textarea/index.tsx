import "./styles.css"

const Textarea = ({labelText, inline }: any) => {
  return (
    <div className={`textarea_component ${!inline && "textarea_not_inline"}`}>
      {labelText && <label className="textarea__label">{labelText}</label>}
      <textarea></textarea>
    </div>
  )
}

export {Textarea}