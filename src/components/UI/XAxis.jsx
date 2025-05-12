export default function XAxis({data, width, gap, className}) {

	return (
		<div style={{gap: gap}} className={className}>
    {data.map((entry) => {
      return <div style={{width: width}} className={"text-sm flex flex-col items-center"} key={entry.month + entry.day + 'x'}>
        <p className="text-neutral-800">{entry.month}</p>
        <p className="font-semibold">{entry.day}</p>
      </div>
    })}
			
		</div>
	);
}
