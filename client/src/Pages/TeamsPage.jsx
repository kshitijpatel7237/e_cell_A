import React from "react"

const TeamsPage = () => {
	return (
		<>
			<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
			{/* <!-- component --> */}
			<section className="max-w-6xl px-4 py-12 mx-auto bg-red-100 sm:px-6 lg:px-4">
				<div className="pb-12 text-center uppercase">
					<h1 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl font-heading">
						Top 6 web developer of the month
					</h1>
					<h2 className="mt-3 text-base font-bold text-indigo-600">
						Rating based on customer reviews
					</h2>
				</div>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
					{/* first card */}
					<div className="flex flex-col items-center justify-center w-full p-3 overflow-hidden transition duration-500 ease-in-out transform bg-white border-4 border-gray-400 rounded-lg shadow-2xl cursor-pointer hover:shadow-none hover:opacity-80 hover:scale-110">
						<div>
							<img className="object-cover object-center w-40 h-40 border-4 border-gray-400 rounded-full" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg" alt="photo" />
						</div>
						<div className="py-8 text-center sm:py-6">
							<p className="mb-2 text-xl font-bold text-gray-700">Kyla Esparza</p>
							<p className="text-base font-normal text-gray-400">New York</p>
						</div>
						<div className="flex flex-row gap-4 mx-auto my-auto text-2xl text-gray-800 md:mx-0">
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-facebook-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-github-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-instagram-square"></i></a>
						</div>
					</div>

					{/* second card */}
					<div className="flex flex-col items-center justify-center w-full p-3 overflow-hidden transition duration-500 ease-in-out transform bg-white border-4 border-gray-400 rounded-lg shadow-2xl cursor-pointer hover:shadow-none hover:opacity-80 hover:scale-110">
						<div>
							<img className="object-cover object-center w-40 h-40 border-4 border-gray-400 rounded-full" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-7.jpg" alt="photo" />
						</div>
						<div className="py-8 text-center sm:py-6">
							<p className="mb-2 text-xl font-bold text-gray-700">Amelie Wang</p>
							<p className="text-base font-normal text-gray-400">New York</p>
						</div>
						<div className="flex flex-row gap-4 mx-auto my-auto text-2xl text-gray-800 md:mx-0">
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-facebook-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-github-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-instagram-square"></i></a>
						</div>
					</div>

					{/* third card */}
					<div className="flex flex-col items-center justify-center w-full p-3 overflow-hidden transition duration-500 ease-in-out transform bg-white border-4 border-gray-400 rounded-lg shadow-2xl cursor-pointer hover:shadow-none hover:opacity-80 hover:scale-110">
						<div>
							<img className="object-cover object-center w-40 h-40 border-4 border-gray-400 rounded-full" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg" alt="photo" />
						</div>
						<div className="py-8 text-center sm:py-6">
							<p className="mb-2 text-xl font-bold text-gray-700">toby Conner</p>
							<p className="text-base font-normal text-gray-400">New York</p>
						</div>
						<div className="flex flex-row gap-4 mx-auto my-auto text-2xl text-gray-800 md:mx-0">
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-facebook-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-github-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-instagram-square"></i></a>
						</div>
					</div>
					{/* forth card */}
					<div className="flex flex-col items-center justify-center w-full p-3 overflow-hidden transition duration-500 ease-in-out transform bg-white border-4 border-gray-400 rounded-lg shadow-2xl cursor-pointer hover:shadow-none hover:opacity-80 hover:scale-110">
						<div>
							<img className="object-cover object-center w-40 h-40 border-4 border-gray-400 rounded-full" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-4.jpg" alt="photo" />
						</div>
						<div className="py-8 text-center sm:py-6">
							<p className="mb-2 text-xl font-bold text-gray-700">Morgan Black</p>
							<p className="text-base font-normal text-gray-400">New York</p>
						</div>
						<div className="flex flex-row gap-4 mx-auto my-auto text-2xl text-gray-800 md:mx-0">
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-facebook-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-github-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-instagram-square"></i></a>
						</div>
					</div>

					{/* fifth card */}
					<div className="flex flex-col items-center justify-center w-full p-3 overflow-hidden transition duration-500 ease-in-out transform bg-white border-4 border-gray-400 rounded-lg shadow-2xl cursor-pointer hover:shadow-none hover:opacity-80 hover:scale-110">
						<div>
							<img className="object-cover object-center w-40 h-40 border-4 border-gray-400 rounded-full" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-8.jpg" alt="photo" />
						</div>
						<div className="py-8 text-center sm:py-6">
							<p className="mb-2 text-xl font-bold text-gray-700">Garza</p>
							<p className="text-base font-normal text-gray-400">New York</p>
						</div>
						<div className="flex flex-row gap-4 mx-auto my-auto text-2xl text-gray-800 md:mx-0">
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-facebook-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-github-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-instagram-square"></i></a>
						</div>
					</div>

					{/* sixth card */}
					<div className="flex flex-col items-center justify-center w-full p-3 overflow-hidden transition duration-500 ease-in-out transform bg-white border-4 border-gray-400 rounded-lg shadow-2xl cursor-pointer hover:shadow-none hover:opacity-80 hover:scale-110">
						<div>
							<img className="object-cover object-center w-40 h-40 border-4 border-gray-400 rounded-full" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg" alt="photo" />
						</div>
						<div className="py-8 text-center sm:py-6">
							<p className="mb-2 text-xl font-bold text-gray-700">Krystal</p>
							<p className="text-base font-normal text-gray-400">New York</p>
						</div>
						<div className="flex flex-row gap-4 mx-auto my-auto text-2xl text-gray-800 md:mx-0">
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-linkedin"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-facebook-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-github-square"></i></a>
							<a className="hover:cursor-pointer hover:text-blue-500"><i className="fab fa-instagram-square"></i></a>
						</div>
					</div>
					<div className="flex all:justify-end">
						<button className="px-4 py-2 mx-2 font-bold text-gray-800 transition duration-500 ease-in-out transform bg-gray-300 border-2 border-gray-400 rounded-l shadow-lg hover:bg-blue-500 hover:shadow-none hover:scale-110">
							Show me more
						</button>
					
						<button className="px-4 py-2 mx-2 font-bold text-gray-800 transition duration-500 ease-in-out transform bg-gray-300 border-2 border-gray-400 rounded-l shadow-lg hover:bg-blue-500 hover:shadow-none hover:scale-110">
							Become a host
						</button>
					</div>
				</div>
			</section>
		</>)
}

export default TeamsPage
