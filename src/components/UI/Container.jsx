export default function Container({className = "w-full h-full", children}){
  return <div className={className + ' rounded-xl bg-white shadow-xl p-4 font-semibold border-neutral-300 border relative'}>
    {children}
  </div>
}