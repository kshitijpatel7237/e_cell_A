import React from "react"

function Logo() {
    return (

        <div className="flex flex-row items-center justify-start ml-4 text-custom-secondary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-custom-accent"
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
            <p className="text-4xl font-black">.fis</p>
        </div>

    )
}
export default Logo
