import OptionBar from "./UI/OptionBar";

export default function ModalContent({title, subtitle, numberOfPages, pageNumber, children}) {
	return (
		<>
			<h1 className="text-2xl">{title}</h1>
			<h2 className="text-xl">{subtitle}</h2>
			<OptionBar numberOfElements={numberOfPages} index={pageNumber} />
			{children}
		</>
	);
}
