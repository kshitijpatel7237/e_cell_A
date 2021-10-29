import React from "react"
import Testimonial from "../Components/Testimonial/Testimonial"
import Landing from "../Components/Landing/Landing"
import Nav from "../Components/Nav/Nav"
import HeadingOfSections from "../Components/HeadingOfSections/HeadingOfSections"
import Newsletter from "../Components/Newsletter/Newsletter"
import Footer from "../Components/Footer/Footer"

const HomePage = () => {

	return (
		<div>
			<Nav />
			<Landing />
			<HeadingOfSections/>
			<Newsletter />
			<Testimonial/>
			<Footer />
		</div>
	)

}
export default HomePage
