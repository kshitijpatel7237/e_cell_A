import React, { useState } from 'react'

export default function Video() {
    const videos = [
        {vid:"NcRifDitRnU", img:"/videos/vid1.jpg"},
        {vid:"a5V6gdu5ih8", img:"/videos/vid2.jpg"},
        {vid:"MuB7HHeuNbc", img:"/videos/vid3.jpg"},
        {vid:"eEaZvEZye84", img:"/videos/vid4.jpg"}
    ]

    const [vid, uVid] = useState(videos[0].vid)
    const renderVideo = () => {
        return(
            <div className="col-span-4 my-3">
                <iframe className="inset-0 flex flex-wrap w-full border-8 border-white rounded-3xl h-80 sm:h-80 md:h-96 lg:h-full" height="500" src={"https://www.youtube.com/embed/"+vid} frameBorder="1" allowFullScreen />
            </div>
        )
    }
    return (
        <div className="container inset-0 px-5 py-10 mx-auto text-left">
            <h1 className="justify-between text-3xl text-left text-bold nc-Section-Heading sm:flex-row sm:items-end text-neutral-900"><span className="text-3xl material-icons">&#xe404;</span> The Videos</h1>
            <p className="mt-2 mb-10 md:w-2/3 lg:w-1/2 sm:w-full text-custom-muted">Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone’s welcome.</p>
            <div className="relative">
                <div className="absolute z-0 w-2/3 pt-3 -top-4 -bottom-4 -right-4 rounded-3xl bg-custom-primary bg-opacity-5"></div>
                <div className="relative flex-grow gap-4 pb-2 mt-3 md:grid lg:grid-cols-5 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6">
                    {renderVideo()}
                    <div className="flex justify-center col-span-1 lg:flex-col sm:flex-row">
                        {
                            videos.map(item =>{
                                return(
                                    <div>
                                        <div className="relative mx-2" onClick={()=>{uVid(item.vid)}}>
                                            <img className="w-full transition-all duration-500 ease-in-out transform cursor-pointer h-28 lg:my-2 rounded-3xl hover:scale-105 sm:h-24 md:h-28" src={item.img} />
                                            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 flex justify-center w-12 h-12 text-center cursor-pointer left-7 sm:left-10 sm:top-7 top-9 md:left-14" viewBox="0 0 20 20" fill="white">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                ) 
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
