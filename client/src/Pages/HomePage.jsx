import React from "react"
import Testimonial from "../Components/Testimonial/Testimonial"
import Landing from "../Components/Landing/Landing"
import Nav from "../Components/Nav/Nav"
import HeadingOfSections from "../Components/HeadingOfSections/HeadingOfSections"
const HomePage = () => {

	return (
		<div>
			<Nav />
			<Landing />
			<HeadingOfSections/>
			<Testimonial/>
		</div>
	)

}
export default HomePage
