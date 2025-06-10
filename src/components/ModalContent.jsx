import OptionBar from "./UI/OptionBar";

export default function ModalContent({title, subtitle, numberOfPages, pageNumber, children}) {
	return (
		<>
			<h1 className="text-2xl font-semibold">{title}</h1>
			<h2 className="text-xl font-semibold">{subtitle}</h2>
			<OptionBar numberOfElements={numberOfPages} index={pageNumber} />
			{children}
		</>
	);
}
