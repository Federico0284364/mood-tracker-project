import { findIconByMood } from "../utils/functions";
import Container from "./UI/Container";
import Button from "./UI/Button";
import { recordActions } from "../../store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { availableMoods, availableSleepRanges } from "../data";

export default function LoggedRecord({ className, lastRecord }) {
	const { mood, sleep, comment, date } = lastRecord;
	const [isEditing, setIsEditing] = useState("");
	const [editedRecord, setEditedRecord] = useState({
		date,
		mood,
		sleep,
		comment,
	});

	const dispatch = useDispatch();

	function handleToggleEdit(target) {
		if (isEditing === target) {
			setIsEditing("");
			dispatch(recordActions.editLastRecord({ ...editedRecord }));
		} else {
			setEditedRecord(lastRecord);
			setIsEditing(target);
			
		}
	}

	function handleEditComment(event) {
		setEditedRecord((prevData) => {
			return {
				...prevData,
				comment: event.target.value,
			};
		});
	}

	function handleEditMood(event) {
		setEditedRecord((prevData) => {
			return {
				...prevData,
				mood: event.target.value,
			};
		});
	}

	function handleEditSleep(event) {
		setEditedRecord((prevData) => {
			return {
				...prevData,
				sleep: event.target.value,
			};
		});
	}

	return (
		<div
			className={
				className + " gap-8 flex flex-col lg:flex-row justify-center"
			}
		>
			<Container className="lg:max-w-150 flex flex-col sm:flex-row lg:justify-between flex-1 overflow-hidden sm:max-h-60 lg:max-h-80 lg:h-80">
				<div className=" flex flex-col items-center sm:items-baseline ">
					<p className="text-3xl sm:text-2xl text-neutral-500 whitespace-nowrap">
						I'm feeling
					</p>
					{isEditing === "mood" ? (
						<select
							defaultValue={editedRecord.mood}
							onChange={(event) => handleEditMood(event)}
							className="bg-neutral-100 rounded-xl p-0.5 text-4xl sm:text-3xl w-54 sm:w-44 text-black"
						>
							{availableMoods.map((availableMood) => {
								return (
									<option
										className="text-center sm:text-start text-2xl overflow-visible"
										value={availableMood}
										key={availableMood + "option"}
									>
										{availableMood}
									</option>
								);
							})}
						</select>
					) : (
						<p className="text-4xl sm:text-3xl">{mood}</p>
					)}
				</div>

				<img
					src={findIconByMood(mood)}
					className="rounded-full shadow-xl h-[40vw] sm:h-[35vw] lg:h-[80%] mt-4 sm:mt-14 ml-auto mr-auto lg:self-end self-center aspect-square"
				></img>

				<Button
				variant={isEditing === "mood" ? "primary" : "secondary"}
					onClick={() => handleToggleEdit("mood")}
					className="text-xs lg:text-sm py-1 px-1 rounded absolute top-2 right-2"
				>
					{isEditing === "mood" ? "Save" : "Edit"}
				</Button>
			</Container>

			<div className="flex flex-col w-full lg:w-85 gap-8">
				<Container className="w-full h-24">
					<p className="text-xl text-neutral-500">Sleep</p>
					{isEditing === "sleep" ? (
						<select
							defaultValue={editedRecord.sleep}
							onChange={(event) => handleEditSleep(event)}
							className="text-2xl sm:w-44 bg-neutral-100 rounded-xl p-0.5  text-black"
						>
							{availableSleepRanges.map((availableSleepRange) => {
								return (
									<option
										className="text-2xl overflow-visible"
										value={availableSleepRange}
										key={availableSleepRange + "option"}
									>
										{availableSleepRange}
									</option>
								);
							})}
						</select>
					) : (
						<p className="text-2xl">{sleep}</p>
					)}
					<Button
					variant={isEditing === "sleep" ? "primary" : "secondary"}
						onClick={() => handleToggleEdit("sleep")}
						className="text-xs lg:text-sm py-1 px-1 rounded absolute top-2 right-2"
					>
						{isEditing === "sleep" ? "Save" : "Edit"}
					</Button>
				</Container>

				<Container className="flex flex-col w-full min-h-30 lg:h-48 overflow-clip">
					<p className="text-xl text-neutral-500">
						Reflection of the day
					</p>
					{isEditing === "comment" ? (
						<textarea
							onChange={(event) => handleEditComment(event)}
							value={editedRecord.comment}
							className="w-full flex-1 rounded-xl bg-neutral-100 resize-none"
						></textarea>
					) : (
						<p className="text-md">{comment}</p>
					)}
					<Button
					variant={isEditing === "comment" ? "primary" : "secondary"}
						onClick={() => handleToggleEdit("comment")}
						className="text-xs lg:text-sm py-1 px-1 rounded absolute top-2 right-2"
					>
						{isEditing === "comment" ? "Save" : "Edit"}
					</Button>
				</Container>
			</div>
		</div>
	);
}
