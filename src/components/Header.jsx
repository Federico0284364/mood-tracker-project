import profileImg from "../assets/no-profile-picture.webp";
import { useState, useMemo } from "react";
import DropdownMenu from "./UI/DropdownMenu";
import { useNavigate } from 'react-router-dom';
import ResetModal from "./UI/ResetModal";

export default function Header() {
	const [dropDownIsVisible, setDropdownIsVisible] = useState(false);
	let timeout;
	const navigate = useNavigate(); 

	const DROPDOWN_OPTIONS = useMemo(() => {return [
	{
		name: 'My diary',
		fun: () => {
			navigate('/diary')
		}	
	},
	{
		name: 'Reset',
		fun: () => {
			navigate('/diary')
		}	
	}
]})

	function handleClick() {
		setDropdownIsVisible(!dropDownIsVisible);
	}

	function handleOnMouseOut() {
		timeout = setTimeout(() => {
			setDropdownIsVisible(false);
		}, 1500);
	}

	function handleOnMouseOver() {
		if (timeout) {
			clearTimeout(timeout);
		}
	}

	return (
		<header className="w-full flex items-center justify-between bg-transparent h-16">
			<ResetModal />
			<div className="h-full flex items-center gap-3">
				<div className="bg-primary h-[60%] lg:h-[78%] ml-4 lg:ml-20 aspect-square rounded-lg relative">
					<div className="rounded-full bg-white w-[20%] aspect-square absolute top-3 left-1.5 lg:left-2 " />
					<div className="rounded-full bg-white w-[20%] aspect-square absolute top-3 right-1.5 lg:right-2" />
				</div>
				<p className="text-sm lg:text-xl font-semibold">Mood tracker</p>
			</div>

			<div
				
				onMouseOver={handleOnMouseOver}
				onMouseOut={handleOnMouseOut}
				className="relative h-full flex items-center gap-2 mr-4 lg:mr-20 cursor-pointer"
			>
				<img
				onClick={handleClick}
					className="h-[80%] aspect-square rounded-full"
					src={profileImg}
				/>
				<button onClick={handleClick}
				className="h-[90%] font-semibold text-black cursor-pointer">
					v
				</button>
				<DropdownMenu isVisible={dropDownIsVisible}>
					{DROPDOWN_OPTIONS.map((option) => <li className=" rounded py-1 px-1 transition bg-secondary hover:bg-white/70" onClick={option.fun}>{option.name}</li>)}
				</DropdownMenu>
			</div>
		</header>
	);
}
