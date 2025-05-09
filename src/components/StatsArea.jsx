
import YAxis from "./UI//YAxis";
import XAxis from "./UI/XAxis";
import Column from "./UI/Column";

const YAxisData = [
	"9+ hours",
	"7-8 hours",
	"5-6 hours",
	"3-4 hours",
	"0-2 hours",
];

const columnWidth = 40;
const columnGap = 16;
const stepHeight = 55;

export default function StatsArea({ list }) {
	
	const XAxisData = list.map((entry) => {
		return {
			month: entry.date.toLocaleString("en-EN", { month: "short" }),
			day: entry.date.getDate(),
		};
	});

	return (
		<div className="flex flex-1 w-full font-normal">
			<YAxis
				data={YAxisData}
				gapClass="gap-6"
				className="ml-4 flex flex-col flex-1 mt-8"
			/>
			
			<div className="mr-8 h-full flex flex-col justify-end">
				<div style={{gap: columnGap}} className="flex ">
				{list.map((record) => {
					return <Column height={(YAxisData.length - YAxisData.indexOf(record.sleep)) * stepHeight - 4} width={columnWidth} key={record.date + 'column'} data={record} />;
				})}
				</div>
				
				<XAxis data={XAxisData} width={columnWidth} gap={columnGap} className="flex" />
			</div>
		</div>
	);
}
