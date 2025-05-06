import { useState, useEffect } from "react";

import Modal from "./UI/Modal";
import List from "./UI/List";
import OptionBar from "./UI/OptionBar";
import { availableMoods, availableSleepTimes } from "../data";

export default function MoodModal({ isOpen, onClose }) {
	const [pageNumber, setPageNumber] = useState(0);
	const [newRecord, setNewRecord] = useState({
		date: new Date().toLocaleDateString("en-EN", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		}),
	});

	const date = new Date();
	const formattedDate = date.toLocaleDateString("en-EN", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	useEffect(() => {
		return () => {
			setPageNumber(0);
		};
	}, [isOpen]);

	const moodPage = (
		<>
			<h1 className="text-2xl">Log your mood</h1>
			<h2 className="text-xl">How was your mood today?</h2>
			<OptionBar list={[1, 2, 3]} index={pageNumber} />
			<List list={availableMoods} />
		</>
	);

	const sleepPage = (
		<>
			<h1 className="text-2xl">Log your sleep</h1>
			<h2 className="text-xl">How long did you sleep last night?</h2>
			<OptionBar list={[1, 2, 3]} index={pageNumber} />
			<List list={availableSleepTimes} />
		</>
	);

	const commentPage = (
		<>
			<h1 className="text-2xl">Log your thoughts</h1>
			<h2 className="text-xl">What happaned today?</h2>
			<OptionBar list={[1, 2, 3]} index={pageNumber} />
			<textarea className="font-normal bg-white max-h-[50vh]"></textarea>
		</>
	);

	const recapPage = <></>;

	const pages = [moodPage, sleepPage, commentPage, recapPage];

	function handleNextPage() {
		switch (pageNumber){
			case 0: 
		}

		if (pageNumber < pageNumber.length)
			setPageNumber((prevNumber) => prevNumber + 1);
	}

	return (
		<Modal onContinue={handleNextPage} onClose={onClose} isOpen={isOpen}>
			{pageNumber === 0 && moodPage}
			{pageNumber === 1 && sleepPage}
			{pageNumber === 2 && commentPage}
		</Modal>
	);
}
