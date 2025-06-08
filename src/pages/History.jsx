import { useSelector } from "react-redux";
import Container from "../components/UI/Container";
import { findIconByMood, getMood } from "../utils/functions";
import HistoryStats from "../components/HistoryStats";
import Button from "../components/UI/Button";
import fullScreenIcon from "../assets/fullscreen-svgrepo-com.svg";
import Modal from "../components/UI/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { recordActions } from "../store";

export default function History() {
	const recordList = useSelector((state) => state.recordList);
	const [openRecord, setOpenRecord] = useState("");

	const dispatch = useDispatch();

	function handleOpenRecord(entry) {
		setOpenRecord(entry);
	}

	function handleDeleteRecord() {
		dispatch(recordActions.removeRecord(openRecord.date));
		setOpenRecord("");
	}

	function isToday(date) {
		const now = new Date();
		return (
			date.getDate() === now.getDate() &&
			date.getMonth() === now.getMonth() &&
			date.getFullYear() === now.getFullYear()
		);
	}

	return (
		<div className="h-full w-[90vw] pt-2 pb-8 flex flex-col items-center">
			<h1 className="text-4xl font-semibold mb-8">My history</h1>

			<Modal
				className="max-h-[90vh] max-w-[92vw] overflow-auto"
				isOpen={openRecord}
				onClose={() => setOpenRecord("")}
			>
				<p>
					{openRecord.date?.toLocaleDateString("en-US", {
						day: "numeric",
						weekday: "long",
						month: "long",
						year: "numeric",
					})}
				</p>
				<div className="flex items-center gap-3">
					<img
						className="w-8"
						src={findIconByMood(openRecord.mood)}
					/>
					{openRecord.sleep}
				</div>

				{openRecord.comment}
				<Button
					onClick={handleDeleteRecord}
					className="bg-red-500 text-white px-4 py-2 rounded-lg flex-1"
				>
					Delete
				</Button>
			</Modal>

			<HistoryStats recordList={recordList} />

			<ul className="flex gap-1 flex-wrap overflow-x-auto">
				{recordList
					.slice(1)
					.reverse()
					.map((entry, index) => {
						const widthClass = isToday(entry.date)
							? "basis-full "
							: "basis-60 ";
						const dateColorClass = isToday(entry.date)
							? "bg-primary "
							: "bg-blue-400 ";

						return (
							<li
								className={
									widthClass + " flex-shrink flex-grow"
								}
							>
								<Container className="break-words max-w-[90vw]">
									<div className="flex gap-1">
										<h2
											className={
												dateColorClass +
												" flex-grow text-white rounded px-2 mb-2"
											}
										>
											{!isToday(entry.date)
												? entry.date?.toLocaleDateString(
														"en-US",
														{
															day: "numeric",
															weekday: "short",
															month: "short",
															year: "2-digit",
														}
													)
												: "Today"}
										</h2>
										<Button
											onClick={() =>
												handleOpenRecord(entry)
											}
											className=" group border flex gap-2 items-center border-black rounded-full text-white px-2 mb-2"
										>
											<p className="hidden group-hover:block text-xs font-normal text-black">
												Open
											</p>
											<img
												className="h-2 aspect-square"
												src={fullScreenIcon}
											/>
										</Button>
									</div>

									<div className="flex items-center gap-4">
										<img
											className="w-10"
											src={findIconByMood(entry.mood)}
										/>
										<p className="whitespace-nowrap">
											{entry.sleep + " of sleep"}
										</p>
									</div>

									<hr className="my-2 border-dashed opacity-30" />

									<p
										className="line-clamp-3 ;
"
									>
										{entry.comment}
									</p>
								</Container>
							</li>
						);
					})}
			</ul>
		</div>
	);
}
