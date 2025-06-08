import { AnimatePresence, motion } from "framer-motion";

export default function DropdownMenu({ isVisible, options, onSelect }) {
	function handleClick(fun){
		fun();
		onSelect();
	}
	return (
		<>
			<AnimatePresence>
				{isVisible && (
					<motion.ul
						transition={{ durstion: 0.2 }}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: [0, 0, 0, 100] }}
						exit={{ y: -100, opacity: [100, 0, 0, 0] }}
						className="text-white flex flex-col gap-1 whitespace-pre bg-secondary p-1 top-16 right-[-8px] absolute rounded z-1000"
					>
						{options.map((option) => {
							let colorClass = "bg-primary hover:bg-white/70 hover:text-black";
							if (option.name === 'Reset'){
								colorClass = "bg-red-600 hover:bg-orange-500 hover:text-white";
							}
							return (
								<li
									className={
										colorClass +
										" rounded py-1 px-1 transition "
									}
									onClick={() => handleClick(option.fun)}
								>
									{option.name}
								</li>
							);
						})}
					</motion.ul>
				)}
			</AnimatePresence>
		</>
	);
}
