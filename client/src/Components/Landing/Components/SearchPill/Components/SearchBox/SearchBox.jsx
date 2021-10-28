import React, { useState } from "react"

const SearchBox = ({inputs}) => {
    console.log(inputs)
	return (
		<div className="flex flex-col m-4 overflow-hidden text-left shadow-2xl rounded-3xl md:flex-row md:items-center md:justify-between md:px-4 md:py-2 md:rounded-full bg-custom-primary">
			{inputs.map(input => <div className="py-2 pl-4 border-b-2 border-white md:border-0">
                <p className="font-semibold">{input.heading}</p>
                <p className="text-sm text-gray-400">{input.subheading}</p>
            </div>)}
            <div className="flex items-center justify-center p-4 md:rounded-full md:w-24 md:h-20">
				<button className="w-full py-3 text-lg rounded-3xl bg-custom-button-accent hover:bg-opacity-70">
                    <p className="md:hidden">Search</p>
                    <p className="hidden md:block">&nbsp;</p>
                </button>
            </div>
		</div>
	)
}

export default SearchBox
