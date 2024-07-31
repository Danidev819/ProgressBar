import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
	const [progress, setProgress] = useState(0);

	const updateProgress = () => {
		setProgress((prevProgress) => {
			if (prevProgress >= 100) {
				return 0;
			}
			return prevProgress + 10;
		});
	};

	return (
		<div>
			<ProgressBar progress={progress} />
			<button type="button" onClick={updateProgress}>
				Increase Progress
			</button>
		</div>
	);
}

export default App;
