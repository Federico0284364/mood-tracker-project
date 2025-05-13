import { findIconByMood } from "../../utils/functions";
import { useState } from "react";

export default function Column({ data, width, height }) {
	const [isHovering, setIsHovering] = useState(false);

	function handleMouseEnter() {
		setIsHovering(true);
	}

	function handleMouseLeave() {
		setIsHovering(false);
	}

	return (
		<div
			onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
			style={{ height: height, width: width }}
			className="cursor-pointer hover:opacity-85 relative z-200 flex flex-col items-center bg-blue-950 rounded-full self-end"
		>
			<img
				className="z-60 w-[80%] mt-1 fill-amber-100"
				src={findIconByMood(data.mood)}
			/>
			<div className="absolute z-50 w-[80%] mt-1 aspect-square rounded-full bg-black" />

			
		</div>
	);
}
