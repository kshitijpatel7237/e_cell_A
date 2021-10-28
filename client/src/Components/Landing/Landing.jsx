import React from "react"

const Landing = () => {
	return (
		<div className="text-left text-white bg-custom-primary">
			<div className="p-4 font-medium lg:w-1/2">
				<h1 className="text-4xl">Hotel, car & experiences</h1>
				<p className="mt-8 text-gray-400">Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
				<button className="px-4 py-3 mt-8 text-sm font-medium rounded-3xl bg-custom-button-accent">Start your search</button>
			</div>
			<div className="p-4 mt-4 lg:w-1/2">
				<img className="w-full" src="/images/hero-right.png" />
			</div>
		</div>
	)
}

export default Landing
