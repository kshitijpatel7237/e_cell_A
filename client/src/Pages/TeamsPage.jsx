import React from "react"
import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"
import CardOne from "../Components/Teams/CardOne"
import CardTwo from "../Components/Teams/CardTwo"
import CardThree from "../Components/Teams/CardThree"
import CardFour from "../Components/Teams/CardFour"
import CardFive from "../Components/Teams/CardFive"
import CardSix from "../Components/Teams/CardSix"
import Buttons from "../Components/Teams/Buttons"
import Headings from "../Components/Teams/Headings"


const TeamsPage = () => {
	return (
		<>
			<Nav />
			<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
			
			<section className="max-w-6xl px-4 py-12 mx-auto bg-blue-50 sm:px-6 lg:px-4">
				<Headings/>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">					
					<CardOne />
					<CardTwo />
					<CardThree />
					<CardFour />
					<CardFive />
					<CardSix />
					<Buttons />
				</div>
			</section>
			<Footer />
		</>)
}

export default TeamsPage
