import React from "react";
import Nav from "./Nav";
import { hogs } from "../porkers_data";
import Hogs from "./Hogs";
import Display from "./Display";


function App() {
console.log({...hogs[0]})
	return (
		<div className="App">
			<Nav />
			<Hogs/>
			<Display {...hogs[0]}/>
		</div>
	);
	}

export default App;

