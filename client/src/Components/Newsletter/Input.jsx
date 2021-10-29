import React from "react"



function Input() {
    return (
        <div className="flex flex-row justify-around w-3/5 mx-1 my-2 border-2 rounded-full lg:w-full " >
            <input placeholder="Enter your email" type="email" className="text-white placeholder-gray-300 bg-gray-900 rounded-full focus:outline-none" />
            <button className="self-center my-2 px-3.5 py-2 text-2xl text-white bg-indigo-600 rounded-full hover:bg-indigo-800 font-bold-700">→</button>
        </div>
    )
}

export default Input