import React from 'react'

export interface IButton {
  name: string
  type?: 'primary' | 'secondary'
  size?: 'S' | 'M'
  disabled?: boolean
  className?: string
  loading?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  name,
  type = 'primary',
  size = 'M',
  disabled,
  className,
  loading,
  onClick,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      data-cy="button"
      className={`
        ${className} flex items-center justify-center whitespace-nowrap rounded-lg px-10 py-2 font-mulish
        ${type === 'primary' ? 'bg-main-blue text-black hover:bg-main-blue/80 hover:bg-white' : ''}
        ${type === 'secondary' ? 'shadow-border border border-main-blue bg-transparent text-main-blue hover:border-white hover:text-white' : ''}
        ${size === 'S' ? 'px-4 py-2 text-xxs' : ''}
        ${disabled || loading ? 'pointer-events-none opacity-20' : ''}
      `}>
      {name}
      {loading && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></span>
      )}
    </button>
  )
}

export default Button
