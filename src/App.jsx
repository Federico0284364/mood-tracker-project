import { useState } from "react";
import { useSelector } from "react-redux";
import { recordActions } from "../store";
import "./App.css";
import { availableMoods } from './data.js';
import Card from "./components/Card";
import CardContent from "./components/CardContent";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Container from "./components/UI/Container";
import StatsArea from './components/StatsArea';
import MoodModal from "./components/MoodModal";


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

	function handleOpenModal() {
		setModalIsOpen(true);
	}

	function handleCloseModal(){
		setModalIsOpen(false);
	}
	
	return (
		<>
			<MoodModal isOpen={modalIsOpen} onClose={handleCloseModal}/>			
			<Header />
			<Hero onClick={handleOpenModal} userName={userName} date={formattedDate} />
			<main className="my-10 flex justify-center gap-x-8 h-full">
				<Container className="flex flex-col h-full gap-4">
					<Card title="Average Mood" subtitle="(Last 5 check-ins)">
						<CardContent
							title={"Neutral"}
							description={"Same as the previous 5 check-ins"}
							className="bg-blue-300 "
						/>
					</Card>
					<Card title="Average Sleep" subtitle="(Last 5 check-ins)">
						<CardContent
							title="5-6 Hours"
							description="Increase from the previous check-ins"
							className="bg-primary text-white"
						/>
					</Card>
				</Container>

				<Container className="w-150 flex flex-col">
					<h1 className="text-3xl">Mood and sleep Trends</h1>
					<StatsArea list={recordList}/>					
				</Container>
			</main>
			
		</>
	);
}

export default App;
