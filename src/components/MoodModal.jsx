import { useState, useEffect, useRef } from "react";

import Modal from "./UI/Modal";
import List from "./UI/List";
import Button from "./UI/Button";
import ModalContent from "./ModalContent";
import { availableMoods, availableSleepTimes } from "../data";
import { findIconByMood } from "../utils/functions";
import { useDispatch } from "react-redux";
import { recordActions } from '../../store/index';

const NUMBER_OF_PAGES = 4;

export default function MoodModal({ isOpen, onClose }) {
	const dispatch = useDispatch();

	const textarea = useRef();
	const [selectedValue, setSelectedValue] = useState("");
	const [pageNumber, setPageNumber] = useState(0);
	const [newRecord, setNewRecord] = useState({
		date: new Date(),
		mood: "",
		sleep: "",
		comment: "",
	});
	const [invalidInput, setInvalidInput] = useState(false); // da aggiungere

	let dataType;
	if (pageNumber === 0) {
		dataType = "mood";
	} else if (pageNumber === 1) {
		dataType = "sleep";
	} else if (pageNumber === 2) {
		dataType = "comment";
	}

	console.log(selectedValue, newRecord);
	useEffect(() => {
		return () => {
			setPageNumber(0);
		};
	}, [isOpen]);


	function handleSelectedValue(string) {
		setSelectedValue(string);
	}

	function handleNextPage(data) {
		if (!data && pageNumber + 1 != NUMBER_OF_PAGES){
			return
		}

		if (pageNumber + 1 === NUMBER_OF_PAGES) {
			dispatch(recordActions.addRecord(newRecord));
			onClose();
		} else {
			if(pageNumber === 2 && !textarea.current.value){
				return
			}

			setNewRecord((prevRecord) => {
				return {
					...prevRecord,
					[dataType]: data,
				};
			});
			setSelectedValue("");
			setPageNumber((prevPage) => prevPage + 1);
		}
	}

	return (
		<Modal onContinue={handleNextPage} onClose={onClose} isOpen={isOpen}>
			{pageNumber === 0 && (
				<ModalContent
					pageNumber={pageNumber}
					title={"Log your mood"}
					subtitle={"How was your mood today?"}
					numberOfPages={NUMBER_OF_PAGES}
				>
					<List
						dataType="mood"
						onSelect={handleSelectedValue}
						list={availableMoods}
						selectedItem={selectedValue}
					/>
				</ModalContent>
			)}
			{pageNumber === 1 && (
				<ModalContent
					pageNumber={pageNumber}
					title={"Log your sleep"}
					subtitle={"How long did you sleep last night?"}
					numberOfPages={NUMBER_OF_PAGES}
				>
					<List
						dataType="sleep"
						onSelect={handleSelectedValue}
						list={availableSleepTimes}
						selectedItem={selectedValue}
					/>
				</ModalContent>
			)}
			{pageNumber === 2 && (
				<ModalContent
					pageNumber={pageNumber}
					title={"Log your thoughts"}
					subtitle={"What happened today?"}
					numberOfPages={NUMBER_OF_PAGES}
				>
					<textarea
						ref={textarea}
						placeholder="Something beautiful"
						onChange={(event) => {
							if (textarea.current.value)
								handleSelectedValue(event.target.value);
						}}
						className="font-normal px-2 py-1 bg-neutral-200 min-h-30 max-h-[40vh]"
					/>
				</ModalContent>
			)}
			{pageNumber === 3 && (
				<ModalContent
					pageNumber={pageNumber}
					title={"Summary"}
					subtitle={"This is how your day went"}
					numberOfPages={NUMBER_OF_PAGES}
				>
					<div className="font-normal flex h-10 items-center justify-baseline gap-4">
						<img className="h-full" src={findIconByMood(newRecord.mood)}/>
						<p >{newRecord.sleep + ' of sleep'}</p>
					</div>
					<p className="font-normal">{newRecord.comment}</p>
				</ModalContent>
			)}
			<Button
				onClick={() => handleNextPage(selectedValue)}
				className="bg-primary text-white px-4 py-2 rounded-lg "
			>
				{pageNumber + 1 === NUMBER_OF_PAGES ? 'Save' : 'Continue'}
			</Button>
		</Modal>
	);
}
