import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./Pages/HomePage"
import TeamsPage from "./Pages/TeamsPage"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route path="/" component={HomePage} exact />
					<Route path="/TeamsPage" component={TeamsPage} />
				</Switch>
			</div>	
			
			
		</BrowserRouter>
	)
}

export default App
