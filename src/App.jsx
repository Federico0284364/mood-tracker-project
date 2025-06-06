import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { recordActions } from "../store";
import {
	calculateAverageSleep,
	getSleepRange,
	calculateAverageMood,
	getMood,
	getMoodSubtitle,
	getSleepSubtitle
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
	const lastRecord = recordList[recordList.length - 1];

	//calculating mood data
	const averageMoodValue = useMemo(
		() => calculateAverageMood(recordList),
		[recordList.length]
	);
	const prevAverageMoodValue = useMemo(
		() => calculateAverageMood(recordList, 5),
		[recordList.length]
	);
	const averageMood = getMood(averageMoodValue);
	
	const moodSubtitle = getMoodSubtitle(
		averageMoodValue,
		prevAverageMoodValue
	);


	//calculating sleep data
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
		recordList[recordList.length - 1].date?.toDateString() ===
			new Date().toDateString();

	function handleOpenModal() {
		setModalIsOpen(true);
	}

	function handleCloseModal() {
		setModalIsOpen(false);
	}

	return (
		<div className="h-full pt-2 pb-8 flex flex-col items-center">
			<MoodModal isOpen={modalIsOpen} onClose={handleCloseModal} />
			<Header />
			<Hero
				hasLogged={hasLogged}
				userName={userName}
				date={formattedDate}
			/>
			<main className="w-[90vw] flex flex-col gap-8">
				<section className="mt-10 w-full flex justify-center gap-8">
					{hasLogged ? (
						<LoggedRecord
							className="gap-x-8 w-full"
							lastRecord={lastRecord}
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

				{recordList.length > 1 &&
				<section className="w-full mb-8 flex flex-col lg:flex-row justify-center gap-8 lg:h-100">
					<Container className="justify-around flex flex-col h-full w-full lg:min-w-85 lg:w-85 gap-4">
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
								className="bg-blue-300 lg:min-h-30"
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
								className="bg-primary text-white lg:min-h-30"
							/>
						</Card>
					</Container>

					<Container className="lg:max-w-150 w-full h-full flex flex-col overflow-x-hidden">
						<h1 className="text-xl h-10 sm:text-2xl md:text-3xl">
							Mood and sleep Trends
						</h1>
						<StatsArea list={recordList} />
					</Container>
				</section>}
			</main>
		</div>
	);
}

export default App;
