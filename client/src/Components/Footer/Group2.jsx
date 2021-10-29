import React from "react"
import Col4 from "./Col2"
import Col5 from "./Col3"
function Group1(){
	return(
		<div className="flex flex-row justify-around w-full py-10 md:w-2/5">
			<Col4 />
            <Col5 />
		</div>
	)
}
export default Group1