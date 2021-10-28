import React, { useState } from "react"
import SearchBox from "./Components/SearchBox/SearchBox"

const SearchPill = () => {
	const ITEMS = ['Stay', 'Experiences', 'Rental Car']
	const INPUTS = [[
		{heading: "Location", subheading: "Where are you going?", type: "text", icon: "map-marker"},
		{heading: "Check in", subheading: "Add date", type: "date", icon: "calendar"},
		{heading: "Check out", subheading: "Add date", type: "date", icon: "calendar"},
		{heading: "Guests", subheading: "Add guests", type: "count", icon: "user-plus"},
	], [
		{heading: "Location", subheading: "Where are you going?", type: "text", icon: "map-marker"},
		{heading: "Date", subheading: "Add date", type: "date", icon: "calendar"},
		{heading: "Guests", subheading: "Add guests", type: "count", icon: "user-plus"},
	], [
		{heading: "City or Airport", subheading: "Pick up location", type: "text", icon: "map-marker"},
		{heading: "Pick up", subheading: "Add date", type: "date", icon: "calendar"},
		{heading: "Drop off", subheading: "Add date", type: "date", icon: "calendar"},
	]]
	const [selectedItem, setSelectedItem] = useState(0)

	return (
		<div className="z-50 w-full max-w-screen-xl lg:absolute lg:bottom-0">
			<div className="flex justify-center mt-16 mb-8 text-sm font-medium text-gray-400 lg:text-base lg:justify-start lg:ml-16">
				{ITEMS.map((item, i) => <div
					className="flex items-center mx-2 cursor-pointer"
					onClick={() => setSelectedItem(i)}
				>
					{i == selectedItem ? <>
						<div className="inline-block w-2 h-2 bg-white rounded-full"></div>
						&nbsp;&nbsp;
						<p className="text-white">{item}</p>
					</> : <p>
						{item}
					</p>}
				</div>)}
			</div>
			<SearchBox inputs={INPUTS[selectedItem]}/>
		</div>
	)
}

export default SearchPill
