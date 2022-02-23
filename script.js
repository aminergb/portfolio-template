import { getRandomNumber } from "./utils/util.js"

const sky = document.querySelector('.sky')
const cloud4 = document.querySelector('.cloud4')
const clouds = document.querySelector('.clouds')
const MIN_PTS = { min_Y: 20, min_X: 20 }
const MAX_PTS = { max_X: -20, max_Y: 80 }
const cloudsArrayTypes = [...clouds.children]

//create random clouds max 10 clouds x positions different from one another
//create an intersection observer : 
const observer = new IntersectionObserver((items) => {
    const [intersectionObserverEntry] = items
    const arrayClouds = [...clouds.children]
    const nbClouds = arrayClouds.length
    if (intersectionObserverEntry.isIntersecting) {
        //create a new cloud: 
        const newcloud = cloudsArrayTypes[getRandomNumber(0, 4)].cloneNode(true)
        //randomize the y axis and x axis 
        newcloud.style.left = getRandomNumber(MIN_PTS.min_X, MAX_PTS.max_X) * getRandomNumber(1, 4) + "vmin"
        newcloud.style.top = getRandomNumber(MIN_PTS.min_Y, MAX_PTS.max_Y)
        console.log(newcloud.style.left)
        clouds.append(newcloud)
        if (nbClouds >= 10) {
            [...clouds.children][getRandomNumber(0, nbClouds)].remove()
        }

    }


}, {
    threshold: 1,
    root: sky
}
)

observer.observe(cloud4)