export default function Button({className, variant = 'other', children, ...props}){
  const baseStyles = ' rounded';
  const variants =  {
    primary: ' bg-blue-700 text-white',
    secondary: ' bg-neutral-100 text-neutral-500',
    close: ' bg-transparent text-neutral-600',
    other: ' text-neutral-600'
  }

  return(
    <button {...props} className={className + baseStyles + variants[variant]}>
      {children}
    </button>
  )
}