export default function XAxis({data, width, gap, className}) {

	return (
		<div style={{gap: gap}} className={className}>
    {data.map((entry) => {
      return <div  style={{width: width}} className={"text-sm w-8 flex flex-col items-center"}>
        <p>{entry.month}</p>
        <p>{entry.day}</p>
      </div>
    })}
			
		</div>
	);
}
