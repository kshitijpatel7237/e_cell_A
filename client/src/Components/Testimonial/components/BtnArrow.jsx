import React from 'react'
import leftButton from './../icons/leftButton.png'
import rightButton from './../icons/rightButton.png'

export default function BtnArrow(props) {
    return (
        <button onClick={props.updateSlide}
            className="w-40 h-8 mt-16 sm:w-24 sm:h-12">
            <img src={props.direction === "next" ? rightButton : leftButton} className="rounded-full hover:bg-gray-500" />
        </button>
    )
}
