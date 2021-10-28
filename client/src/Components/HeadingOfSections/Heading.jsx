import React from "react"
import {Previous,Next} from "./SlidingLogic"
function Heading(){
    return(
        <div className="px-2 dark:bg-custom-primary">
            <h1 className="text-2xl font-semibold md:text-4xl">Heading of sections</h1>
            <h2 className="text-lg md:text-xl text-custom-muted">Descriptions for sections</h2>
            <div className="flex justify-end md:py-6">
                <button className="px-2 pb-1 mx-1 text-lg font-hairline border rounded-full select-none md:text-4xl" onClick={()=>Previous()}>{"<"}</button>
                <button className="px-2 pb-1 mx-1 text-lg font-hairline border rounded-full select-none md:text-4xl" onClick={()=>Next()}>{">"}</button>
            </div>

            <div id="carousel" className="flex py-2 overflow-auto h-60 no-scrollbar sm:h-80 md:h-90">
                <img id="img0" className="mx-2 w-60 rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/NewYork.jpg"} />
                <img id="img1" className="mx-2 w-60 rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/Singapore.jpg"} />
                <img id="img2" className="mx-2 w-60 rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/Paris.jpg"} />
                <img id="img3" className="mx-2 w-60 rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/Tokyo.jpg"} />
                <img id="img4" className="mx-2 w-60 rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/London.jpg"} />
                <img id="img5" className="mx-2 w-60 rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/Maldives.jfif"} />
            </div>

                <div className="flex flex-col items-center justify-center mt-16 mb-8">
                    <img className="w-4/5" src={process.env.PUBLIC_URL + "/HeadingSectionImages/Flight.png"} />
                    <h3 className="text-custom-muted">BENNEFITS</h3>
                    <h1 className="text-2xl font-semibold">Happening cities</h1>
                </div>

                <div className="mb-16">
                    <div className="py-3">
                        <span className="px-2 py-1 text-sm font-bold text-blue-900 bg-blue-100 border rounded-full">Advertising</span>
                        <h2 className="text-xl font-medium">Cost-effective Advertising</h2>
                        <p className="text-custom-muted">With a free listing, you can advertise your rental with no upfront costs</p>
                    </div>
                    <div className="py-3">
                        <span className="px-2 py-1 text-sm font-bold text-green-900 bg-green-100 border rounded-full">Exposure</span>
                        <h2 className="text-xl font-medium">Reach millions with Chisfis</h2>
                        <p className="text-custom-muted">Millions of people are searching for unique places to stay around the world</p>
                    </div>
                    <div className="py-3">
                        <span className="px-2 py-1 text-sm font-bold text-red-900 bg-red-100 border rounded-full">Secure</span>
                        <h2 className="text-xl font-medium">Secure and simple</h2>
                        <p className="text-custom-muted">A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</p>
                    </div>
                </div>
        </div>
    )
}
export default Heading