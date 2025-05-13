import LoggedRecord from "./LoggedRecord";
import Button from "./UI/Button";

export default function Hero({userName, date}) {
	return (
		<section className="flex flex-col items-center gap-1">
			<h2 className="text-center text-lg font-semibold text-primary">Hello {userName}!</h2>
			<h1 className="max-w-[85vw] text-center text-4xl font-semibold">How are you feeling today?</h1>
			<p className="text-neutral-600 font-semibold">{date}</p>
			
		</section>
	);
}
