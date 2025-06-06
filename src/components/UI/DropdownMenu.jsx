export default function DropdownMenu({ isVisible, children }) {
	return (
		<>{isVisible && <ul className="flex flex-col gap-1 whitespace-pre bg-primary p-1 top-16 absolute rounded">{children}</ul>}</>
	);
}
