import LoggedRecord from "./LoggedRecord";
import Button from "./UI/Button";

export default function Hero({userName, date}) {
	return (
		<section className="flex flex-col items-center gap-1">
			<h2 className="text-lg font-semibold text-primary">Hello {userName}!</h2>
			<h1 className="text-4xl font-semibold">How are you feeling today?</h1>
			<p>{date}</p>
			
		</section>
	);
}
