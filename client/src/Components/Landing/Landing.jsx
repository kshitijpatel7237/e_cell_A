import React from "react"
import SearchPill from "./Components/SearchPill/SearchPill"

const Landing = () => {
	return (
		<div className="flex flex-col items-center w-full bg-custom-primary">
			<SearchPill />
			<div className="max-w-screen-xl text-left text-white lg:flex p-auto">
				<div className="p-4 font-medium lg:w-1/2">
					<h1 className="text-4xl md:text-5xl xl:text-6xl">Hotel, car & experiences</h1>
					<p className="mt-8 text-gray-400 md:text-lg">Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
					<button className="px-4 py-3 mt-8 text-sm font-medium md:px-6 md:text-base rounded-3xl bg-custom-button-accent hover:bg-opacity-70">Start your search</button>
				</div>
				<div className="p-4 mt-4 lg:w-1/2 lg:pl-10">
					<img className="w-full" src="/images/hero-right.png" />
				</div>
			</div>
		</div>
	)
}

export default Landing
