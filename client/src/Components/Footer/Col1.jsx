import React from "react"
import Logo from "./Logo"
function Col1() {
	return (
		<div className="flex flex-row justify-around w-full pl-2 leading-loose text-left md:w-1/5 md:flex-col md:pl-8 md:ml-8">

			<Logo />

			<div className="flex flex-row justify-between md:flex-col">

				<div>
					<a href="#" className="text-sm text-gray-300 hover:text-gray-100">
						<img src="./images/fb-removebg-preview.png"/><p className="hidden md:inline-block">Facebook</p>
					</a>
				</div>

				<div>
					<a href="#" className="text-sm text-gray-300 hover:text-gray-100">
					<img src="./images/tweet-removebg-preview.png"/><p className="hidden md:inline-block">Twitter</p>
					</a>
				</div>

				<div>
					<a href="#" className="text-sm text-gray-300 hover:text-gray-100">
					<img src="./images/Insta-removebg-preview.png"/><p className="hidden md:inline-block">Instagram</p>
					</a>
				</div>

				<div>
					<a href="#" className="text-sm text-gray-300 hover:text-gray-100">
					<img src="./images/yt-removebg-preview(1).png"/><p className="hidden md:inline-block">Youtube</p>
					</a>
				</div>


			</div>

		</div>
	)
}
export default Col1
