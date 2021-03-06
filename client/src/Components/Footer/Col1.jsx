import React from "react"
import Logo from "./Logo"
function Col1() {
	return (
		<div className="flex flex-row justify-around w-full pl-2 leading-loose text-left md:w-1/5 md:flex-col md:pl-8 md:ml-8">

			<Logo />

			<div className="flex flex-row justify-between md:flex-col">

				<div>
					<a href="#" className="inline-flex text-sm text-gray-300 hover:text-gray-100">
						<img src="/icons/fb-removebg-preview.png" className="mx-3 w-7 h-7"/><p className="hidden md:inline-block">Facebook</p>
					</a>
				</div>

				<div>
					<a href="#" className="inline-flex text-sm text-gray-300 hover:text-gray-100">
					<img src="/icons/tweet-removebg-preview(1).png" className="mx-3 w-7 h-7"/><p className="hidden md:inline-block">Twitter</p>
					</a>
				</div>

				<div>
					<a href="#" className="inline-flex text-sm text-gray-300 hover:text-gray-100">
					<img src="/icons/Insta-removebg-preview.png" className="mx-3 w-7 h-7" /><p className="hidden md:inline-block">Instagram</p>
					</a>
				</div>

				<div>
					<a href="#" className="inline-flex text-sm text-gray-300 hover:text-gray-100">
					<img src="/icons/yt-removebg-preview(1).png" className="mx-3 w-7 h-7"/><p className="hidden md:inline-block">Youtube</p>
					</a>
				</div>


			</div>

		</div>
	)
}
export default Col1
