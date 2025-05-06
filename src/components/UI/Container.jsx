export default function Container({className, children}){
  return <div className={className + ' rounded-xl bg-white shadow-xl p-4 font-semibold'}>
    {children}
  </div>
}