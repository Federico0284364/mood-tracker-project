export default function YAxis({ data, gapClass, className }) {
	return (
		<ul className={gapClass + " " + className}>
			{data.map((entry) => {
				return (
					<div className="relative" key={entry + "y"}>
						<li className="relative font-normal text-sm">
							{entry}
						</li>
						<hr className="absolute border-t border-dashed border-gray-200 w-130" />
					</div>
				);
			})}
		</ul>
	);
}
