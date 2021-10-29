import React from "react"

import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"

function Newsletter(){
	return(
		<div className="inline-flex flex-col justify-around w-screen h-full my-0 bg-gray-900 sm:flex-row justify-items-start">
        	<SectionOne/>
			<SectionTwo/>
		</div>
	)
}

export default Newsletter