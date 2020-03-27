import { getWeather, useWeather } from "./WeatherProvider.js"

export const weatherToDisplay = () => {

    let allWeather = useWeather()
    const checkHours = () => {
        
    }

    for (const threeHourWeatherGap of allWeather) {
        threeHourWeatherGap.filter()
    }
    
}
