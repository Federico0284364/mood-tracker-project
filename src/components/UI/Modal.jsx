import { createPortal } from "react-dom";
import Button from "./Button";
import Container from "./Container";

export default function Modal({
	className,
	isOpen,
	onClose,
	onContinue,
	children,
}) {
	if (!isOpen) {
		return null;
	}

	return createPortal(
		<div className=" flex justify-center items-center bg-black/60 z-100 fixed top-0 right-0 bottom-0 left-0 ">
			
			<Container
				className={
					className + " z-[-100] relative gap-4 w-90 flex flex-col p-6 gradient-color"
				}
			>
        <Button
				onClick={onClose}
				variant="close"
				className=" absolute top-1 right-1 text-md"
			>
				X
			</Button>

				{children}
				<Button
					onClick={onContinue}
					className="bg-primary text-white px-4 py-2 rounded-lg "
				>
					Continue
				</Button>
			</Container>
		</div>,
		document.getElementById("root")
	);
}
