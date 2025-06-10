import { useSelector } from "react-redux"

export default function CardContent({title, description, className, icon }){
  const recordList = useSelector(state => state.recordList);

  return(
    <div className={className + ' px-8 py-9 rounded-2xl flex flex-col justify-center gap'}>
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