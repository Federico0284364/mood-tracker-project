import { useSelector } from 'react-redux';
import StatsEntry from './UI/Column.jsx';

export default function Stats({stats}) {
	const recordList = useSelector((state) => state.recordList);

  return <div className="h-full w-full overflow-x-auto">
    <ul className="flex gap-4">
      {recordList.map((entry) => {
        return <StatsEntry key={entry.name + 'entry'} data={entry}/>
      })}
    </ul>
  </div>
}
