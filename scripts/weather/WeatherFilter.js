// Convert miliseconds to a readable date format

import { useWeather } from "./WeatherProvider.js"

export const convertMilliseconds = () =>{
    let weatherTime = useWeather()
    
    for (let i = 0; i < weatherTime.length; i++) {
    
        let dateInSeconds = (weatherTime[i].dt) * 1000

        new Date(date).toLocaleDateString()

        let date = new Date(dateInSeconds)

        let dateString = date.toString()

        let dateArray = dateString.split(" ")

        console.log(dateArray)
}
}