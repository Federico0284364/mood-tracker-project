
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import History from './pages/History';
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
	{path: '/', element: <RootLayout />, children: [
		{index: true, element: <HomePage />},
	{path: '/history', element: <History />}
	]}
	
])

function App() {
	return <RouterProvider router={router}/>
}

export default App;
