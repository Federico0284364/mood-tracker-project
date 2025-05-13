
export default function Card({ title, subtitle, children }) {
	return (
		<div>
			<div className="flex items-end gap-2 mb-2">
				<h1 className="text-xl">{title}</h1>
				<p className="text-xs sm:text-base lg:text-lg font-normal">{subtitle}</p>
			</div>
			<div>
        {children}
      </div>
		</div>
	);
}
