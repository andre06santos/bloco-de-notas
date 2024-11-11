import "./styles.css"

const Textarea = ({label, value, setValue }: any) => {
  return (
    <div className={`textarea_component`}>
      {label && <label className="textarea__label">{label}</label>}
      <textarea value={value} onChange={(e) => setValue(e.target.value)}></textarea>
    </div>
  )
}

export {Textarea}