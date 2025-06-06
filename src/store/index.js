
import { configureStore, createSlice } from "@reduxjs/toolkit";

const localStorageState = (() => {
  const saved = localStorage.getItem('mood tracker');
  if (!saved) return null;
  try {
    const parsed = JSON.parse(saved);
    
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

const localStorageUserName = (() => {
  const userData = JSON.parse(localStorage.getItem('user data'));

  return userData.name
})()

const initialRecordState = localStorageState ? localStorageState : fallbackInitialState;
const initialUserState = {
  name: localStorageUserName ? localStorageUserName : '',
}


const recordSlice = createSlice({
	name: "recordList",
	initialState: initialRecordState,
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

const userSlice = createSlice({
  name: "userData",
  initialState: initialUserState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    }
  }
})

export const recordActions = recordSlice.actions;
export const userActions = userSlice.actions;
const store = configureStore({
	reducer: {recordList: recordSlice.reducer, userData: userSlice.reducer}
})
store.subscribe(() => {
  const state = store.getState();
  
  const serializableRecordList = state.recordList.map(record => ({
    ...record,
    date: record.date 
  }));
  localStorage.setItem("mood tracker", JSON.stringify(serializableRecordList));

  localStorage.setItem("user data", JSON.stringify(state.userData));
});

export default store;
