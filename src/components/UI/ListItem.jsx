export default function ListItem({
	isSelected = false,
	icon,
	onSelect,
	children,
	imgWidth = 'w-6',
	...props
}) {
	let borderColor;
	borderColor = isSelected ? " border-blue-700" : " border-neutral-400";

	return (
		<li
			{...props}
			onClick={() => onSelect(children)}
			className={
				borderColor + " flex justify-between rounded-lg border-1 p-2 cursor-pointer hover:scale-105 active:scale-99 transition"
			}
		>
			<div className="flex gap-2">
				<input type="radio" className="w-4" checked={isSelected} />
				{children}
			</div>
			{icon && <img className={imgWidth} src={icon} />}
		</li>
	);
}
