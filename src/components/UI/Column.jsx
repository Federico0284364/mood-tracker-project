import { findIconByMood } from "../../utils/functions";

export default function Column({data, width, height}){

  return (
    <div className="flex flex-col items-center text-md">
      <div style={{height: height, width: width}} className="relative flex flex-col items-center bg-black rounded-full">
        <img className="w-[80%] mt-1" src={findIconByMood(data.mood)}/>
      </div>
      
    </div>
  )
}