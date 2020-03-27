import { getWeather, useWeather } from "./WeatherProvider.js"


export const weatherToDisplay = () => {
let allWeather = useWeather()
debugger
const FilteredWeather = allWeather.filter(weather => allWeather.dt_txt.endswith("12:00:00"))
console.log(FilteredWeather)
}

// export const weatherToDisplay = () => {

//     let allWeather = useWeather()
    
//     const checkHours = () => {
        
//     }

//     for (const threeHourWeatherGap of allWeather) {
//         threeHourWeatherGap.filter()
//     }
    
// }
