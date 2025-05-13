export default function Button({className, variant = 'other', children, ...props}){
  const baseStyles = variant != 'other' ?  ' px-4 py-2 rounded-lg' : ' ';
  const variants =  {
    primary: ' bg-blue-700 text-white',
    secondary: ' bg-blue-400 text-white',
    close: ' bg-transparent text-neutral-600',
    other: ' text-neutral-600'
  }

  return(
    <button {...props} className={className + baseStyles + variants[variant]}>
      {children}
    </button>
  )
}