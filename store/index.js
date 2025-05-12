
import { configureStore, createSlice } from "@reduxjs/toolkit";

const localStorageState = null//JSON.parse(localStorage.getItem('mood tracker')); 

const fallbackInitialState = [
	{
		date: new Date("2025-04-30"),
		mood: "Happy",
		sleep: "3-4 hours",
		comment: "I feel so good",
	},
	{
		date: new Date("2025-05-01"),
		mood: "Very sad",
		sleep: "5-6 hours",
		comment: "Bruh",
	}, 
	{
		date: new Date("2025-05-02"),
		mood: "Sad",
		sleep: "0-2 hours",
		comment: "Meh",
	},
	{
		date: new Date("2025-06-31"),
		mood: "Very happy",
		sleep: "9+ hours",
		comment: "I feel sooooo good",
	},
	{
		date: new Date("2025-07-5"),
		mood: "Neutral",
		sleep: "7-8 hours",
		comment: "Not bad",
	},
	{
		date: new Date("2025-07-6"),
		mood: "Neutral",
		sleep: "7-8 hours",
		comment: "Not bad",
	},
	{
		date: new Date("2025-07-7"),
		mood: "Neutral",
		sleep: "7-8 hours",
		comment: "Not bad",
	},
	{
		date: new Date("2025-07-8"),
		mood: "Neutral",
		sleep: "7-8 hours",
		comment: "Not bad",
	},
	{
		date: new Date("2025-07-9"),
		mood: "Neutral",
		sleep: "7-8 hours",
		comment: "Not bad",
	},
	{
		date: new Date("2025-07-12"),
		mood: "Neutral",
		sleep: "5-6 hours",
		comment: "Not bad",
	},
	{
		date: new Date("2025-07-13"),
		mood: "Neutral",
		sleep: "5-6 hours",
		comment: "Not bad",
	},
	
	
];

const initialState = localStorageState ? localStorageState : fallbackInitialState;

function saveToStorage(){
	localStorage.setItem('mood tracker', JSON.stringify(store))
}

const recordSlice = createSlice({
	name: "recordList",
	initialState: initialState,
	reducers: {
		addRecord: (state, action) => {
      state.push(action.payload);
    },
    removeRecord: (state, action) => {
			return state.filter((record) => record.date !== action.payload);		
    }
	},
});

export const recordActions = recordSlice.actions;
const store = configureStore({
	reducer: {recordList: recordSlice.reducer}
})
export default store;
