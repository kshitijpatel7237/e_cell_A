import React from "react"

const CardThree = () => {
    return (
        <>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" />
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


        </>
    )
}

export default CardThree