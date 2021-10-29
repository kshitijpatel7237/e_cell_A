import React from "react"

import Col1 from "./Col1"
import Group1 from "./Group1"
import Group2 from "./Group2"

function Footer(){
	return(
		<div className="flex flex-col justify-between h-full py-8 bg-gray-900 md:flex-row">
        	<Col1 />
        	<Group1 />
			<Group2 />        	
		</div>
	)
}

export default Footer