import React from "react"
import './Testimonial.css'
import Title from "./components/Title"
import Description from "./components/Description"
import Reviews from "./components/Reviews"

function Testimonial() {
    return (
        <div className="flex flex-col items-center justify-center w-screen py-12 bg-gray-200">
            <Title />
            <Description />
            <Reviews />
        </div>
    )
}

export default Testimonial