export const Weather = (weatherObject) => {
    return `
    <article class="weatherCard">
    <section>Date: ${new Date(weatherObject.dt*1000).toLocaleDateString()}</section>
        <section>Temperature High: ${weatherObject.main.temp}°</section>
        <section>Conditions: ${weatherObject.weather[0].main}</section>
    </article>
    `
}