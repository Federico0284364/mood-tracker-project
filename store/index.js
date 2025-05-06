
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = [
	{
		date: new Date("2025-04-30"),
		mood: "Happy",
		sleep: 8,
		comment: "I feel so good",
	},
	{
		date: new Date("2025-05-01"),
		mood: "Sad",
		sleep: 5,
		comment: "Bruh",
	}, 
	{
		date: new Date("2025-05-02"),
		mood: "Neutral",
		sleep: 7,
		comment: "Meh",
	}
	
];

const recordSlice = createSlice({
	name: "recordList",
	initialState: initialState,
	reducers: {
		addRecord: (state, action) => {
      state.push(action.payload)
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
