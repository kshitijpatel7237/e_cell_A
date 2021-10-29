import React from "react"



function Input() {
    return (
        <div className="flex flex-row justify-around w-full mx-1 my-2 border-2 rounded-full sm:w-3/5 md:w-3/5 lg:w-full " >
            <input placeholder="Enter your email" type="email" className="w-3/5 px-2 text-white placeholder-gray-300 bg-gray-900 bg-opacity-0 rounded-full focus:outline-none md:w-3/5 lg:w-full" />
            <button className="self-center mr-4 my-2 px-3.5 py-2 text-2xl text-white bg-indigo-600 rounded-full hover:bg-indigo-800 font-bold-700 sm:mx-2">→</button>
        </div>
    )
}

export default Input