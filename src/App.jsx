import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { recordActions } from "../store";
import {
	calculateAverageSleep,
	getSleepRange,
	calculateAverageMood,
	getMood,
} from "./utils/functions.js";
import { availableMoods, availableSleepRanges } from "./data.js";
import Card from "./components/Card";
import CardContent from "./components/CardContent";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Container from "./components/UI/Container";
import StatsArea from "./components/StatsArea";
import MoodModal from "./components/MoodModal";
import LoggedRecord from "./components/LoggedRecord.jsx";
import Button from "./components/UI/Button.jsx";

const userName = "Chiara";
const date = new Date();
const formattedDate = date.toLocaleDateString("en-EN", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
});

function App() {
	const recordList = useSelector((state) => state.recordList);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const averageMoodValue = useMemo(
		() => calculateAverageMood(recordList),
		[recordList.length]
	);
	const prevAverageMoodValue = useMemo(
		() => calculateAverageMood(recordList, 5),
		[recordList.length]
	);
	const averageMood = getMood(averageMoodValue);

	function getMoodSubtitle(current, previous) {
		if (current === previous) return "Same as";
		if (current > previous) return "Increase from";
		return "Decrease from";
	}

	function getSleepSubtitle(current, previous) {
		if (current === previous) return "Same as";
		if (
			availableSleepRanges.indexOf(current) >
			availableSleepRanges.indexOf(previous)
		)
			return "Increase from";
		return "Decrease from";
	}

	const moodSubtitle = getMoodSubtitle(
		averageMoodValue,
		prevAverageMoodValue
	);

	const averageSleepHours = useMemo(
		() => calculateAverageSleep(recordList),
		[recordList.length]
	);
	const prevAverageSleepHours = useMemo(
		() => calculateAverageSleep(recordList, 5),
		[recordList.length]
	);
	const averageSleepRange = getSleepRange(averageSleepHours);
	const prevAverageSleepRange = getSleepRange(prevAverageSleepHours);

	const sleepSubtitle = getSleepSubtitle(
		averageSleepRange,
		prevAverageSleepRange
	);

	const hasLogged =
		recordList.length > 0 &&
		recordList[recordList.length - 1].date.toDateString() ===
			new Date().toDateString();

	function handleOpenModal() {
		setModalIsOpen(true);
	}

	function handleCloseModal() {
		setModalIsOpen(false);
	}

	return (
		<div className="xl:bg-neutral-300 lg:bg-red-200 md:bg-amber-400 h-full pt-2 pb-8 flex flex-col items-center">
			<MoodModal isOpen={modalIsOpen} onClose={handleCloseModal} />
			<Header />
			<Hero
				hasLogged={hasLogged}
				userName={userName}
				date={formattedDate}
			/>
			<main className="w-[90vw] flex flex-col gap-x-8">
				<section className="w-full flex justify-center gap-x-8">
					{hasLogged ? (
						<LoggedRecord
							className="mt-20 gap-x-8 w-full"
							mood={recordList[recordList.length - 1].mood}
							sleep={recordList[recordList.length - 1].sleep}
							comment={recordList[recordList.length - 1].comment}
						/>
					) : (
						<Button
							onClick={handleOpenModal}
							className="bg-primary text-white px-4 py-2 rounded-lg"
						>
							Log today's mood
						</Button>
					)}
				</section>

				<section className="w-full my-8 flex justify-center gap-x-8 h-96">
					<Container className="flex flex-col h-full min-w-85 w-85 gap-4">
						<Card
							title="Average Mood"
							subtitle="(Last 5 check-ins)"
						>
							<CardContent
								title={averageMood}
								description={
									recordList.length >= 10
										? moodSubtitle +
											" the previous 5 check-ins"
										: ""
								}
								className="bg-blue-300 "
							/>
						</Card>
						<Card
							title="Average Sleep"
							subtitle="(Last 5 check-ins)"
						>
							<CardContent
								title={averageSleepRange}
								description={
									recordList.length >= 10
										? sleepSubtitle +
											" the previous 5 check-ins"
										: ""
								}
								className="bg-primary text-white"
							/>
						</Card>
					</Container>

					<Container className="max-w-150 flex-1 flex h-full flex-col overflow-x-hidden">
						<h1 className="text-3xl whitespace-nowrap">
							Mood and sleep Trends
						</h1>
						<StatsArea list={recordList} />
					</Container>
				</section>
			</main>
		</div>
	);
}

export default App;
