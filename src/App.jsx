
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Diary from './pages/Diary';

const router = createBrowserRouter([
	{path: '/', element: <HomePage />},
	{path: '/diary', element: <Diary />}
])

function App() {
	return <RouterProvider router={router}/>
}

export default App;
