import YAxis from "./UI//YAxis";
import XAxis from "./UI/XAxis";
import Column from "./UI/Column";
import { useRef, useEffect } from "react";

const YAxisData = [
	"9+ hours",
	"7-8 hours",
	"5-6 hours",
	"3-4 hours",
	"0-2 hours",
];

const columnWidth = 40;
const columnGap = 16;
const stepHeight = 54;

export default function StatsArea({ list }) {
	const scrollRef = useRef();

	useEffect(() => {
		const scrollingDiv = scrollRef.current;
		scrollingDiv.scrollLeft = scrollingDiv.scrollWidth;
	});

	const XAxisData = list.map((entry) => {
		return {
			month: entry.date.toLocaleString("en-EN", { month: "short" }),
			day: entry.date.getDate(),
		};
	});

	return (
		<div className="flex flex-1 h-90 relative font-normal">
			<YAxis
				data={YAxisData}
				gapClass="gap-6"
				className="ml-4 flex flex-col h-67 flex-[0.2] mt-8"
			/>

			<div
				ref={scrollRef}
				className="mr-[2%] mt-8 flex-1 flex flex-col justify-end flex-wrap overflow-x-scroll"
			>
				<div
					style={{
						gap: columnGap,
					}}
					className="flex"
				>
					{list.map((record) => {
						return (
							<Column
								width={columnWidth}
								height={
									(YAxisData.length -
										YAxisData.indexOf(record.sleep)) *
										stepHeight
								}
								key={record.date + "column"}
								data={record}
							/>
						);
					})}
				</div>

				<XAxis
					data={XAxisData}
					width={columnWidth}
					gap={columnGap}
					className="flex"
				/>
			</div>
		</div>
	);
}
