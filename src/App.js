import { useState } from "react";
import PinInput from "./Pin/PinInput";
import "./styles.css";

export default function App() {
	const [state, setState] = useState("");
	return (
		<div className="App">
			<h1>Credit Card</h1>
			<div className="card">
				<PinInput onChange={(pin) => setState(pin)} />
			</div>
			<hr />
			<div>{state}</div>
		</div>
	);
}
