import Container from "./UI/Container";
import { calculateStreak } from "../utils/functions";
import { useSelector } from "react-redux";

export default function HistoryStats(){
  const recordList = useSelector(state => state.recordList);

  return(
    
    <Container >
      <p className="bg-primary rounded px-2 text-white">Streak: {calculateStreak(recordList)}</p>
      <p></p>
    </Container>
    
  )
}