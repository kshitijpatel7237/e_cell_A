import React from "react"



function Heading() {
    return (
        <div>
            <h1 className="relative px-4 pt-8 mt-8 text-3xl font-extrabold text-gray-100 ">Join Our NewsLetter 🎉</h1>
            <p className="flex-wrap text-gray-400">Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
            <ol className="my-4 leading-loose list-number">
                <li className="text-2xl text-gray-300 font-bold-700 ">
                    <button className="self-center px-4 py-2 m-2 text-2xl text-indigo-600 bg-indigo-300 rounded-full font-bold-700">01</button>
                    Get more discount
                </li>


                <li className="text-2xl text-gray-300 font-bold-700 ">
                    <button className="self-center px-4 py-2 m-2 text-2xl text-red-900 bg-red-300 rounded-full font-bold-700">02</button>
                    Get premium magazines
                </li>
            </ol>
        </div>
    )
}

export default Heading