import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./Pages/HomePage"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path="/" component={HomePage} exact />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
