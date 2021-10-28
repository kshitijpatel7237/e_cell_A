import React, { useState } from "react"

const SearchBox = ({inputs}) => {
	return (
		<div className="flex flex-col m-4 overflow-hidden text-left shadow-2xl rounded-3xl md:flex-row md:items-center md:justify-between md:px-4 md:py-2 md:rounded-full bg-custom-primary">
			{inputs.map(input => <div className="flex py-2 pl-4 border-b-2 border-white md:border-0">
                <img src={`/icons/${input.icon}.svg`} className="inline-block w-5 mr-4" />
                <div>
                    <p className="font-semibold">{input.heading}</p>
                    <p className="text-sm text-gray-400">{input.subheading}</p>
                </div>
            </div>)}
            <div className="flex items-center justify-center p-4 md:rounded-full md:w-20 md:h-20 md:p-0">
				<button className="flex items-center justify-center w-full py-3 text-lg rounded-3xl md:w-3/4 md:h-3/4 md:p-0 md:rounded-full bg-custom-button-accent hover:bg-opacity-70">
                    <p className="md:hidden">Search&nbsp;&nbsp;</p>
                    <img src="/icons/search.svg" className="inline-block w-5" />
                </button>
            </div>
		</div>
	)
}

export default SearchBox
