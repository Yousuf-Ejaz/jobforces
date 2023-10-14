import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobPage from "./pages/JobPage";
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<JobPage />} />
			</Routes>
		</Router>
	);
}

export default App;
