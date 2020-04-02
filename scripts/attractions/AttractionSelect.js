import { useAttractions } from "./AttractionProvider.js"



// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".attractionDropdown")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", changeEvent => {
    if (changeEvent.target.id ==="attractionSelect") {
        const attractionChosen = changeEvent.target.value
        const attractionChosenEvent = new CustomEvent ("attractionChosen", {
            detail: {
                attraction: attractionChosen
            }
        })
        eventHub.dispatchEvent(attractionChosenEvent)
    }
})

const AttractionSelect = () => {
    // Get all attractions from application state
    const attractions = useAttractions()


    const render = (attractionsCollection) => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="attractionSelect">
                <option class="attractionOption" value="0">Please select an attraction!</option>
                ${
                    attractionsCollection.map(singleAttraction => {
                        return `<option value="${singleAttraction.id}">${singleAttraction.name}: ${singleAttraction.state}</option>`
                    })
                }
            </select>
        `
    }
    render(attractions)
}
export default AttractionSelect