import React from "react"

function Item2(props){
	return(
		<div className="">
			<h2 className="text-base font-semibold leading-loose text-gray-200 ">{props.head2}</h2>
			<h3 className="py-2 text-sm text-gray-300 hover:text-gray-100"><a href="#">{props.list2}</a>
			</h3>
		</div>
	)
}

export default Item2

