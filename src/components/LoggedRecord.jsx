import { findIconByMood } from "../utils/functions";
import Container from "./UI/Container";

export default function LoggedRecord({ className, mood, sleep, comment }) {
	return (
		<div className={className + " gap-8 flex flex-col lg:flex-row justify-center"}>
			<Container className="lg:max-w-150 flex lg:justify-between flex-1 overflow-hidden max-h-60 lg:max-h-80 lg:h-80">
				<div>
					<p className="text-2xl text-neutral-500">I'm feeling</p>
					<p className="text-3xl">{mood}</p>
				</div>

				<img
					src={findIconByMood(mood)}
					className="rounded-full shadow-xl h-[35vw] lg:h-[80%] mt-14 ml-auto mr-auto lg:self-end self-center aspect-square"
				></img>
			</Container>
			<div className="flex flex-col w-full lg:w-85 gap-8">
				<Container className="w-full h-24">
					<p className="text-xl text-neutral-500">Sleep</p>
					<p className="text-2xl">{sleep}</p>
				</Container>
				<Container className="w-full min-h-30 lg:h-48 overflow-clip">
					<p className="text-xl text-neutral-500">
						Reflection of the day
					</p>
					<p className="text-md">{comment}</p>
				</Container>
			</div>
		</div>
	);
}
