import { createPortal } from "react-dom";
import Button from "./Button";
import Container from "./Container";
import { motion } from "framer-motion";

export default function Modal({
	className,
	isOpen,
	onClose,
	children,
	...props
}) {
	if (!isOpen) {
		return null;
	}

	return createPortal(
		<motion.div
			layout
			onClick={onClose}
			
			className=" flex justify-center items-center bg-black/60 z-10000 fixed top-0 right-0 bottom-0 left-0 "
		>
			<motion.Container

			onClick={(e) => e.stopPropagation()}
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ type: "tween", duration: 0.25 }}
				{...props}
				className={
					className +
					" z-[-100] relative gap-4 w-90 flex flex-col p-6 gradient-color rounded-xl"
				}
			>
				<Button
					onClick={onClose}
					variant="close"
					className=" absolute top-3 right-3 text-lg"
				>
					X
				</Button>

				{children}
			</motion.Container>
		</motion.div>,
		document.getElementById("root")
	);
}
