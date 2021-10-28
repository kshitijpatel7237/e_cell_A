import React, { useState } from "react"

const SearchPill = () => {
	const ITEMS = ['Stay', 'Experiences', 'Rental Car']
	const [selectedItem, setSelectedItem] = useState(0)

	return (
		<div className="w-full max-w-screen-xl lg:absolute lg:bottom-0">
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
			
		</div>
	)
}

export default SearchPill
