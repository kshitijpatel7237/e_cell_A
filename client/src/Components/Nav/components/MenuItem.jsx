import React from "react"

export default function Menuitem({ title }) {
	// Used in navbar menuitems
	return (
		<li className="hidden md:block" >
			<div className="flex flex-row items-center p-2 px-4 rounded-full group hover:font-black hover:bg-gray-500 hover:bg-opacity-25">
            {title}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				<div className="absolute z-10 text-left transform opacity-0 translate-y-28 group-hover:opacity-100 tex-sm">
						<div className="flex flex-col p-2 space-y-1 bg-custom-primary rounded-xl">
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20" >Stay Page Map</div>
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20" >Stay Page </div>
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20" >Stay Page (Map)</div>
						<div className="p-2 rounded-lg text-custom-secondary hover:bg-gray-500 hover:bg-opacity-20" >Stay Page Map</div> 
					</div>
				</div>
            </div>
		</li>
	)
}
