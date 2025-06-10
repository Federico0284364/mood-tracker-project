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
import { motion } from "framer-motion";

export default function History() {
	const recordList = useSelector((state) => state.recordList);
	const [openRecord, setOpenRecord] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	const dispatch = useDispatch();

	function handleOpenRecord(entry) {
		setOpenRecord(entry);
	}

	function handleCloseRecord() {
		setOpenRecord("");
		setIsDeleting(false);
	}

	function handleStartDeleteRecord() {
		setIsDeleting(true);
	}

	function handleConfirmDeleteRecord() {
		dispatch(recordActions.removeRecord(openRecord.date));
		setOpenRecord("");
	}

	function handleCancelDeleteRecord() {
		setIsDeleting(false);
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
				className={"max-h-[90vh] max-w-[92vw] overflow-auto"}
				isOpen={openRecord}
				onClose={handleCloseRecord}
			>
				<p className="text-2xl">
					{openRecord.date?.toLocaleDateString("en-US", {
						day: "numeric",
						weekday: "long",
						month: "long",
						year: "numeric",
					})}
				</p>
				<div className="flex items-center gap-5">
					<img
						className="w-16"
						src={findIconByMood(openRecord.mood)}
					/>
					<p className="text-xl">{openRecord.sleep + " of sleep"}</p>
				</div>

				<p className={isDeleting ? "max-h-[40vh] overflow-clip" : ""}>
					{openRecord.comment}
				</p>
				{!isDeleting ? (
					<div className="flex">
						<Button
							onClick={handleStartDeleteRecord}
							className="bg-red-500 text-white px-4 py-2 rounded-lg flex-1"
						>
							Delete
						</Button>
					</div>
				) : (
					<motion.p
						initial={{ y: -50 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.1 }}
					>
						<p>Are you sure you want to delete this entry?</p>
						<div className="flex gap-3 mt-2">
							<Button
								onClick={handleConfirmDeleteRecord}
								className="px-2 py-0.5 bg-red-500 text-white"
							>
								Yes
							</Button>
							<Button
								onClick={handleCancelDeleteRecord}
								className="px-2 py-0.5 bg-primary text-white"
							>
								No
							</Button>
						</div>
					</motion.p>
				)}
			</Modal>

			{
				// <HistoryStats recordList={recordList} />
			}
			<ul className="flex gap-1 flex-wrap overflow-x-auto w-[90vw]">
				{recordList
					.slice(1)
					.reverse()
					.map((entry, index) => {
						const widthClass =
							index === 0 ? "basis-full " : "basis-60 ";
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

									<p className="line-clamp-3">
										{entry.comment}
									</p>
								</Container>
							</li>
						);
					})}
			</ul>
			{recordList.length < 2 && (
				<p className="text-neutral-600 font-semibold mt-[-16px]">Here is where you'll find all of your daily logs</p>
			)}
		</div>
	);
}
