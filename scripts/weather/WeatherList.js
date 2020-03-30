import { getWeather, useWeather } from "./WeatherProvider.js"


export const DisplayWeather = () => {

let weatherToDisplay = useWeather()
debugger

const weatherToDisplay = weatherToDisplay.filter(weather => {
   if(weather.dt_txt.endswith("12:00:00")){
       return true
   }
return false
})
render(weatherToDisplay)
}

const render = weatherToRender => {
    contentTarget.innerHTML = weatherToRender.map(
        (weatherObject) => {
            return Weather(weatherObject)
        }
    ).join("")
}

// export const weatherToDisplay = () => {

//     let allWeather = useWeather()
    
//     const checkHours = () => {
        
//     }

//     for (const threeHourWeatherGap of allWeather) {
//         threeHourWeatherGap.filter()
//     }
    
// }
