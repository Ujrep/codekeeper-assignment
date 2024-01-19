export interface IInput {
  label: string
  name: string
  placeholder: string
  value?: string | number
  type?: string
  onChange?: any
  onBlur?: any
  error?: any
}

const Input = (
  { value, label, type = 'text', name, onChange, onBlur, placeholder, error }: IInput,
  ref: any,
) => {
  return (
    <div className="relative grid gap-3">
      <label className="absolute left-4 top-1 text-xs text-white">{label}</label>
      <input
        data-cy="input"
        value={value}
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
        className={`
          rounded-lg border bg-white/5 px-4 pb-2 pt-5 text-sm font-normal text-white placeholder-white/50 outline-none
          ${error ? 'border-red' : 'border-transparent'}
        `}
      />
    </div>
  )
}

export default Input
