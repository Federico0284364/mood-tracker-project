import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/index.js";

import Card from "../components/Card";
import CardContent from "../components/CardContent";
import Hero from "../components/Hero";
import Container from "../components/UI/Container";
import StatsArea from "../components/StatsArea";
import MoodModal from "../components/MoodModal";
import LoggedRecord from "../components/LoggedRecord.jsx";
import Button from "../components/UI/Button.jsx";
import Input from "../components/UI/Input.jsx";
import Modal from "../components/UI/Modal.jsx";
import { useStatsData } from "../utils/stats-data.js";

const date = new Date();
const formattedDate = date.toLocaleDateString("en-EN", {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
});

export default function HomePage() {
	const user = useSelector((state) => state.userData);
	const recordList = useSelector((state) => state.recordList);
	const { averageMood, moodSubtitle, averageSleepRange, sleepSubtitle } =
		useStatsData(recordList);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const lastRecord = recordList[recordList.length - 1];

	const [userName, setUserName] = useState("");
	const [isEditingName, setIsEditingName] = useState(
		user.name ? false : true
	);

	const dispatch = useDispatch();

	//calculating mood data

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

	function handleTypeUserName(event) {
		setUserName(event.target.value);
	}

	function handleConfirmUserName() {
		setIsEditingName(false);
		dispatch(userActions.updateName(userName));
	}

	function handleEditUserName() {
		setIsEditingName(true);
		dispatch(userActions.updateName(""));
	}


	return (
		<div className="h-full pt-2 pb-8 flex flex-col items-center">
			<MoodModal isOpen={modalIsOpen} onClose={handleCloseModal} />

			
			<Hero
				hasLogged={hasLogged}
				userName={user.name}
				isEditingName={isEditingName}
				date={formattedDate}
				onEdit={handleEditUserName}
				onConfirm={handleConfirmUserName}
			/>
			<main className="w-[90vw] flex flex-col items-center gap-8">
				<div className="flex flex-col gap-2 items-center">
					{isEditingName && (
						<>
							<p className="text-xl font-semibold mt-8">
								What's your name?
							</p>
							<Input
								onChange={handleTypeUserName}
								userName={userName}
								className="bg-white max-w-50 h-8 text-lg"
							/>
							<Button
								className=" mt-2 px-4 py-2 text-sm"
								variant={"primary"}
								onClick={handleConfirmUserName}
							>
								Confirm
							</Button>
						</>
					)}
				</div>
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

				{recordList.length > 1 && (
					<section className="w-full mb-8 flex flex-col lg:flex-row justify-center gap-8 lg:h-90">
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

						<Container className="lg:max-w-150 w-full h-90 md:h-full flex flex-col overflow-hidden">
							<h1 className="text-xl h-10 sm:text-2xl md:text-3xl">
								Mood and sleep trends
							</h1>
							<StatsArea list={recordList} />
						</Container>
					</section>
				)}
			</main>
		</div>
	);
}
