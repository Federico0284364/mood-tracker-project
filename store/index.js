
import { configureStore, createSlice } from "@reduxjs/toolkit";

const localStorageState = (() => {
  const saved = localStorage.getItem('mood tracker');
  if (!saved) return null;
  try {
    const parsed = JSON.parse(saved);
    // Riconverti le stringhe in oggetti Date (se serve)
    return parsed.map((record) => ({
      ...record,
      date: new Date(record.date),
    }));
  } catch (e) {
    console.error("Failed to parse localStorage data:", e);
    return null;
  }
})();
const fallbackInitialState = [
	{}
];

const initialState = localStorageState ? localStorageState : fallbackInitialState;


const recordSlice = createSlice({
	name: "recordList",
	initialState: initialState,
	reducers: {
		addRecord: (state, action) => {
      state.push(action.payload);
    },
    removeRecord: (state, action) => {
			return state.filter((record) => record.date !== action.payload);		
    },
		editLastRecord: (state, action) => {
			state[state.length - 1] = action.payload;
		}
	},
});

export const recordActions = recordSlice.actions;
const store = configureStore({
	reducer: {recordList: recordSlice.reducer}
})
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("mood tracker", JSON.stringify(state.recordList));
});
export default store;
