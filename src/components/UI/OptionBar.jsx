export default function ({ numberOfElements, index }) {
	let list = [];
	for (let i = 1; i <= numberOfElements; i++){
		list.push(i);
	}

	return (
		<div className="flex gap-1">
			{list.map((item, i) => {
        const color = i === index ?  ' bg-blue-800' : ' bg-neutral-400';

				return <div key={item + 'bar'} className={' flex-1 h-1 rounded' + color}/>
			})}
		</div>
	);
}
