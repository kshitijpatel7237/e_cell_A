export async function Previous(){
    const carousel=document.querySelector("#carousel")
    carousel.scrollBy(-256,0)
}

export function Next(){
    const carousel=document.querySelector("#carousel")
    carousel.scrollBy(256,0)
}