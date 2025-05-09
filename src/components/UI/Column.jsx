import { findIconByMood } from "../../utils/functions";

export default function Column({data, width, height}){

  return (
    
      <div style={{height: height, width: width}} className="relative z-100 flex flex-col items-center bg-black/60 rounded-full self-end">
        <img className="z-60 w-[80%] mt-1 fill-amber-100" src={findIconByMood(data.mood)}/>
        <div className="absolute z-50 w-[80%] mt-1 aspect-square rounded-full bg-black"/>
      </div>
      
    
  )
}