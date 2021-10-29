import React from "react"
import Col2 from "./Col2"
import Col3 from "./Col3"
function Group1(){
	return(
		<div className="flex flex-row justify-around w-full py-10 md:w-2/5">
			<Col2 />
            <Col3 />
		</div>
	)
}
export default Group1