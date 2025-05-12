import { findIconByMood } from "../utils/functions"
import Container from "./UI/Container"

export default function LoggedRecord({className, mood, sleep, comment}){
  return <div className={className + " flex justify-center"}>
    <Container className="max-w-150 flex justify-between flex-1 overflow-hidden h-80">
      <div>
        <p className="text-2xl text-neutral-500">I'm feeling</p>
        <p className="text-3xl">{mood}</p>
      </div>
      
      <img src={findIconByMood(mood)} className="h-[80%] self-end aspect-square"></img>
    </Container>
    <div className="flex flex-col w-85 gap-8">
      <Container className="w-full h-24">
        <p className="text-xl text-neutral-500">Sleep</p>
        <p className="text-2xl">{sleep}</p>
      </Container>
      <Container  className="w-full h-48">
        <p className="text-xl text-neutral-500">Reflection of the day</p>
        <p className="text-md">{comment}</p>
      </Container>
    </div>
  </div>
}