export const Weather = (weatherObject) => {
    return `
    <div class="weather">
        <h4>${weatherObject.main.temp}</h4>
    </div>
    `
}