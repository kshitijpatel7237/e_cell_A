import React from "react"



function Input() {
    return (
        <div className="flex flex-row justify-around mx-1 my-2 border-2 rounded-full w-ull md:w-full " >
            <input placeholder="Enter your email" type="email" className="placeholder-gray-300 bg-gray-900 rounded-full focus:border-transparent" />
            <button className="self-center my-2 px-3.5 py-2 text-2xl text-white bg-indigo-600 rounded-full hover:bg-indigo-800 font-bold-700">→</button>
        </div>
    )
}

export default Input