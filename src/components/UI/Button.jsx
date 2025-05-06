export default function Button({className, variant = 'primary', children, ...props}){
  const baseStyles = ' px-4 py-2 rounded-lg';
  const variants =  {
    primary: ' bg-blue-700, text-white',
    secondary: ' bg-blue-400, text-white',
    close: ' bg-transparent, text-neutral-600'
  }

  return(
    <button {...props} className={className + baseStyles + variants[variant]}>
      {children}
    </button>
  )
}