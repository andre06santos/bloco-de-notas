import "./styles.css"

const Textarea = ({label, ...rest }: any) => {
  return (
    <div className={`textarea_component`}>
      {label && <label className="textarea__label">{label}</label>}
      <textarea {...rest}></textarea>
    </div>
  )
}

export {Textarea}