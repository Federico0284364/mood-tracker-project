import { findIconByMood } from "../../utils/functions";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Column({ data, width, height }) {
	const [isHovering, setIsHovering] = useState(false);

	function handleMouseEnter() {
		setIsHovering(true);
	}

	function handleMouseLeave() {
		setIsHovering(false);
	}

	return (
		<motion.div
			initial={{height: 0}}
			whileInView={{height: height}}
			transition={{duration: 0.7}}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			style={{width: width }}
			className="cursor-pointer hover:opacity-85 relative z-200 flex flex-col items-center bg-blue-950 rounded-full self-end"
		>
			{
				//isHovering && <p className="text-sm text-white bg-black max-w-40 z-300 absolute top-[-20px]">{data.comment}</p>
			}
			<img
				className="z-60 w-[80%] mt-1 fill-amber-100"
				src={findIconByMood(data.mood)}
			/>
			<div className="absolute z-50 w-[80%] mt-1 aspect-square rounded-full bg-black" />
		</motion.div>
	);
}
