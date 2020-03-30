export const Weather = (weatherObject) => {
    return `
    <article class="weather__card">
        <section>Temperature: ${weatherObject.main.temp}°</section>
        <section>Conditions: ${weatherObject.weather[0].main}</section>
    </article>
    `
}