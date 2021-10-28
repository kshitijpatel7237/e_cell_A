import React, {useState} from "react"
import Menuitem from "./MenuItem"

const Navbar = ({ sidebarOn, onSidebarChange }) => {
    const [toggleSearch, setToggleSearch] = useState(false)
	return (
		<div className="flex flex-row justify-between h-20 py-5 bg-custom-primary text-custom-secondary">
			{/* Logo Alternative */}
			<div className="flex flex-row items-center ml-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-10 h-10 text-custom-accent"
					fill="currentColor"
					viewBox="0 0 24 24"
					stroke="none"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
				<p className="text-2xl font-black">.fis</p>
			</div>
			{/* Menubar */}
			<ul className="flex flex-row space-x-1 text-custom-secondary">
				<li className="hidden md:block">
					<div className="p-2 px-4 rounded-full hover:font-black hover:bg-gray-500 hover:bg-opacity-25">
						Home
					</div>
				</li>			
				<Menuitem title={`Five Columns`} />
				<Menuitem title={`Listing Page`} />
				<Menuitem title={`Templates`} />
				<Menuitem title={`Other Pages`} />
			</ul>
			<ul className="flex flex-row items-center space-x-1">
				{/* Dark mode icon */}
				<li>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-10 h-10 p-2 rounded-full hover:font-black hover:bg-gray-500 hover:bg-opacity-25"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
					</svg>
				</li>
				{/* Search icon */}
				<li
					className="hidden lg:block"
					onClick={() => {
						setToggleSearch(!toggleSearch)
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-10 h-10 p-2 rounded-full hover:font-black hover:bg-gray-500 hover:bg-opacity-25"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</li>
				{toggleSearch && (
					<div className="absolute z-10 hidden transform lg:block translate-y-14 -translate-x-36">
						<input
							type="text"
							placeholder="Type and Press Enter"
							className="px-4 py-3 text-sm border-2 border-indigo-600 outline-none rounded-2xl bg-custom-primary text-custom-secondary"
						></input>
					</div>
				)}
				{/* Sign Up button */}
				<li className="hidden lg:block">
					<button className="px-4 py-2 mr-2 rounded-full bg-custom-button-accent hover:bg-opacity-70">
						Sign Up
					</button>
				</li>
				{/* Hamburger menu icon */}
				<li
					className="lg:hidden"
					onClick={() => {
						onSidebarChange()
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-10 h-10 p-2 mr-2 rounded-full hover:font-black hover:bg-gray-500 hover:bg-opacity-25"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
