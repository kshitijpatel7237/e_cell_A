import React, {useState} from 'react'
import DataTestimonial from './DataTestimonial'
import './../Testimonial.css'
import BtnArrow from './BtnArrow'

function Reviews(){

    const [slideIndex, setslideIndex] = useState(1)

    const updateDot = index => {
        setslideIndex(index)
    }

    const nextSlide = () => {
        if(slideIndex !== DataTestimonial.length){
            setslideIndex(slideIndex+1)
        }
        else if(slideIndex === DataTestimonial.length){
            setslideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setslideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setslideIndex(DataTestimonial.length)
        }
    }

    return(

        <div className="flex flex-col items-center justify-center">

            <div className="relative flex flex-row w-1/2 select-none review-container">
                
                <BtnArrow updateSlide={prevSlide} direction={"prev"} />

                {DataTestimonial.map((obj,index) => {
                    return(
                        <div className={slideIndex === index+1 ? "review-content review-content-animation": "review-content"}>
                            <div className="flex items-center justify-center ">
                                <img src={process.env.PUBLIC_URL + `./Images/person${index + 1}.jpg`} className="w-24 h-24 border-4 border-pink-500 rounded-full sm:w-32 sm:h-32" />
                            </div>
                            <div className="flex">
                                <img className="w-8 h-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAtCAYAAADhoUi4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANvSURBVHgB3ZkxbxMxFMefn313SduobRIBDUECCYFEByTExMIGn6D5EBULI0xZYCwLDHyF9kvwAbohGCpVDFRCNFQ0TZMj57ON70oChTa1c+drxW+LYr1//n7P9rNDIC9WViisLFPY6VII5im8+xDCxoYAl4w0O+Cnn7UmgWlIAj1enq922WxU8uYYxIEiSP8c0q0P30OrHUFeGGoysOFNe66i/AYiqYD+qaIMQEGCAgRnWGqaGRoFJTrodDm1R2suytINSZRvoznZkE5z+dH9JZ/Ly4UZ0Zqlh3ebAaF1SRXYcrqhdtuvVv2bgssyFIXWXKyVbktUPkwJmxRY0OkDWzMyk1HzxJWVZEYWaUaXWR5mEv7J0MzbF0tCkOLKTLPw4N61vCbwuCGddk9gAwqk8vplTSHUICeOGao0/OsQgzUxkthTqhsDG7AfLGJRJGDV7FBlChvJqTKtphCqR3lZjDR/G9L7Psb6nLEMWuak061vfoWWfZuTZMd2R0s0MZY7/dVneyd9Pza0EAV1FYAxgshhv8q3+lnaG1+XmkVFCIWDfjXcntRSHRnSa0ebMa7jxMxhjW9l6tW0pk1FpJr14fZZmum2Xan7VqVGBPmStfF0pZkaotxupnpPnu9BVnyLilDxwFQzNUSYhSHO9iEHKFczpmOJorumYxHW16nNoTYbQheysrZW/vsuM4nepc7AdCxC56NVV/Btc9M4+GksEGKxn2par0LToajvOcbBiZIij2t1XIqNKwIFsdp8UHjm5UYkzeWNQDBprMmRW/UuqJAZ13JeKMKNNfWGYDWJaBM8LzyJdmvIAgwGvt1DyQUHZSkuPEMucfj+dD4wjnIYADXqFBQKqlv+WyZjKY9295+2M3cVlKgZU019AH+2Wj/J6Y4EjMwLz8/e71lq1j9dYedScklVgCPQ9iS+6CBK3+0/BCeJOpxEJIIXb8jhJGLyYgIF43IScf9qN/N1wJZeVHKmqXe5O4VnCJoH7jIErZZI3gmgSPRjR3q3csCvRxLP+EaYF/qV1ckkpoaisio2Q5o44E7WUWqIDUXhGWI8cKKZGnK565xG8qgPDjjq5ZrNwtsfV8fFkaH/aKcbd9v6z5YeFIwSXu6aY0OuFukkhEdyNzS+4B2GtFeZ47kJBN9pdFaw0oEMh4v5VYYXhuInU+Z6KpBH2WgAAAAASUVORK5CYII=" />
                                <p className="mt-4 text-2xl">
                                    {obj.comment}
                                </p>
                                <img className="w-8 h-8" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAtCAYAAADhoUi4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANISURBVHgB3ZrLbtNAFIbPXGzXUUNbepFaWqmsWHTDmjWv0L4DAhYsUBErLwBRsWABqOIV6EvwAF0gVWyQKpCQioQa1cEhqS8zgydqohKl6Yw9M5X6bRw5Y//5fc6c47GDIIp8WAQfJIuQwVaUgW0GmmmbweoMM6mJGh9fLnsMr5zfyRBPEUMZ80TSLfIEHkYdMMhYTYG7SDAmiBd3+N9uVU06bicROAAMAWaoOYPKj+9eZ6IQSdxOj8qrayWCBPEGIAQgilqaYyM08YAUWnWN2dTEoIkIYH5ufupO8/2reXCEjqa2IQknwscYrcsrDY5Q1axkaIBMG5emVDRrGVIRsIHUnN6NlsZ9V9vQQGBhZ6cJDiEiWFuOosbofiOGJKwh1mFzk4BDOgv+6ug+3J3LW16Cv6F06jAn/IhTkUAF5KRt3L+7pDLWlGZZJJqjlQ+NHfkp8mdbwYoQoFWakeAs/vzlAPb2GOhSUbNs/tnJ42cHw98wabB0L0slaIDS9DB+EsVQkendN0tEFGs6x8hoH29v96M8cQ4lj563OBc/QAPm+UppdxGdB09/M0R/6hxT3ODDqF5aFPqmNHJc5nXd4iBNac0rzmeH+irjgxPyCzSYvbdRu4TraAqEyaBtKBmS+SmXFKBISsJpqInUlEVGdfzpjV4ot8p9iFGqPNEpZg0wwGkgTlTHUgj6msqGaMp6qmMJEkYM0TxQ1kQFUk85CclD5fDLnDZx14BYrqwpG7vcKhuK/XYBOmxu1DaUoEx53vYpm7Oxe7lRFr6HAVwB1gwVfs/pjapEXkRrhso7BueGJNYMXRXXzhC9+eHFWi5weNlAAaRMIQ4msKlJcw+H+KwpTUbvxCTPLuwhtjQl1lKOZqH+Is8A12oOHd/updYMyZODa/a+MnsRcvFaZpTyWYYVQzrrGFPIhyX9LVigAO483YqzBagVQ4SC83QjxGKEstR3HqEM24yQ13MeIb+b91e3VgxN/QmVl86miG+17UXoeH+/C67ZemsnQv3HXVWebdfRFMXwAho3hM76gUvOV1XzEfKqvRqppcnZUNO4oUZMjf5JQ4XzRci4oasoCINXKRJaINKl1MwcJnL+KBQEk5pewv9rEf8AuGp/IzglZnAAAAAASUVORK5CYII=" />
                            </div>
                            <div className="mt-6">
                                <p className="text-2xl font-semibold">{obj.name}</p>
                            </div>
                            <div className="flex flex-row items-center justify-center mt-4">
                                <img src={obj.locationsrc} />
                                <span className="ml-4 text-gray-500">{obj.location}</span>
                            </div>
                        </div>
                    )
                })}
                <BtnArrow updateSlide={nextSlide} direction={"next"}/>

            </div>
            <div className="flex flex-row justify-center w-full mt-6">
                {Array.from({length: DataTestimonial.length}).map((item, index)=>{
                    return(
                        <span
                        onClick={() => updateDot(index+1)}
                            className={slideIndex === index + 1 ? "dot-active w-3 h-3 mr-4 bg-gray-400 rounded-full cursor-pointer" : "dot w-3 h-3 mr-4 bg-gray-400 rounded-full cursor-pointer"}>
                        </span>
                    )
                })}
            </div>

        </div>
    
    )

}

export default Reviews