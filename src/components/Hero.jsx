import Button from "./UI/Button";

export default function Hero({onClick, userName, date}) {
	return (
		<section className="flex flex-col items-center gap-1">
			<h2 className="text-lg font-semibold text-primary">Hello {userName}!</h2>
			<h1 className="text-4xl font-semibold">How are you feeling today?</h1>
			<p className="mb-8">{date}</p>
			<Button onClick={onClick} className="bg-primary text-white px-4 py-2 rounded-lg">
				Log today's mood
			</Button>
		</section>
	);
}
