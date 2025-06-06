import { AnimatePresence, motion } from "framer-motion";

export default function DropdownMenu({ isVisible, options }) {
	return (
		<><AnimatePresence>
			{isVisible && (
				
					<motion.ul
						transition={{ durstion: 0.2 }}
						initial={{ y: -100, opacity: 0 }}
						animate={{ y: 0, opacity: [0, 0, 0, 100] }}
            exit={{ y: -100, opacity: [100, 0, 0, 0] }}
						className="text-white flex flex-col gap-1 whitespace-pre bg-secondary p-1 top-16 absolute rounded"
					>
						{options.map((option) => (
							<li
								className=" rounded py-1 px-1 transition bg-primary hover:bg-white/70 hover:text-black"
								onClick={option.fun}
							>
								{option.name}
							</li>
						))}
					</motion.ul>
				
			)}
      </AnimatePresence>
		</>
	);
}
