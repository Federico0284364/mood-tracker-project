export default function YAxis({ data, gapClass, className }) {
	return (
		<ul className={gapClass + " " + className}>
			{data.map((entry) => {
				return (
					<div key={entry + "y"}>
						<li className="relative w-20 font-normal lg:text-sm">
							{entry}
						</li>
						<hr className="absolute border-t border-dashed border-gray-200 w-[93%] z-100" />
					</div>
				);
			})}
		</ul>
	);
}
