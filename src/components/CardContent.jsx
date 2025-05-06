export default function CardContent({title, description, className, icon }){
  return(
    <div className={className + ' px-8 py-9 rounded-2xl flex flex-col gap'}>
      <div>
        <img />
        <h1 className="text-2xl">{title}</h1>
      </div>
      <div>
        <img />
        <p className="font-normal">{description}</p>
      </div>
    </div>
  )
}