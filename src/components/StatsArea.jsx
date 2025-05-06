import Stats from "./Stats";
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

export default function StatsArea({ data }) {
	const XAxisData = data.map((entry) => {
		return {
			month: entry.date.toLocaleString("en-EN", { month: "short" }),
			day: entry.date.getDate(),
		};
	});

	return (
		<div className="relative flex font-normal">
			<YAxis
				data={YAxisData}
				gapClass="gap-6"
				className="mt-4 ml-4 flex flex-col"
			/>
			<div className="ml-4">
				<div style={{gap: columnGap}} className="flex">
				{data.map((record) => {
					return <Column height={60} width={columnWidth} key={record.date + 'column'} data={record} />;
				})}
				</div>
				
				<XAxis data={XAxisData} width={columnWidth} gap={columnGap} className="flex" />
			</div>

			{
				//<Stats stats={data} />
			}
		</div>
	);
}
