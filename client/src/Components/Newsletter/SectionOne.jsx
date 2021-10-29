import React from "react"

import Heading from "./Heading"
import Input from "./Input"

function SectionOne() {
	return (
		<div className="flex flex-col justify-center pl-2 pr-8 my-8 ml-10 text-left bg-gray-900 md:w-full lg:w-1/3 justify-items-start lg:px-2 lg:my-32">

			<Heading />
			<Input />
		</div>
	)
}

export default SectionOne