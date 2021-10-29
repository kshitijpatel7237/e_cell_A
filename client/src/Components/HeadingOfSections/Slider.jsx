export default function Slider(){
    return (
        <div id="carousel" className="flex py-2 overflow-auto no-scrollbar sm:h-80 md:h-90">
            <span>
                <img className="mx-2 h-60 w-60 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/NewYork.jpg"} />
                <h3 className="pt-4 text-xl">New York</h3>
                <span className="pt-4 text-sm text-custom-muted">1,88,000 properties</span>
            </span>
            <span>
                <img className="mx-2 h-60 w-60 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/Singapore.jpg"} />
                <h3 className="pt-4 text-xl">Singapore</h3>
                <span className="pt-4 text-sm text-custom-muted">1,88,000 properties</span>
            </span>
            <span>
                <img className="mx-2 h-60 w-60 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/Paris.jpg"} />
                <h3 className="pt-4 text-xl">Paris</h3>
                <span className="pt-4 text-sm text-custom-muted">1,88,000 properties</span>
            </span>
            <span>
                <img className="mx-2 h-60 w-60 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/Tokyo.jpg"} />
                <h3 className="pt-4 text-xl">Tokyo</h3>
                <span className="pt-4 text-sm text-custom-muted">1,88,000 properties</span>
            </span>
            <span>
                <img className="mx-2 h-60 w-60 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/London.jpg"} />
                <h3 className="pt-4 text-xl">London</h3>
                <span className="pt-4 text-sm text-custom-muted">1,88,000 properties</span>
            </span>
            <span>
                <img className="mx-2 h-60 w-60 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/Maldives.jfif"} />
                <h3 className="pt-4 text-xl">Maldives</h3>
                <span className="pt-4 text-sm text-custom-muted">1,88,000 properties</span>
            </span>
        </div>
    )
}




