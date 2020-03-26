import { useAttractions } from "./AttractionProvider.js"



// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".attractionDropdown")
const eventHub = document.querySelector(".container")

const AttractionSelect = () => {
    // Get all attractions from application state
    const attractions = useAttractions()
    const render = (attractionsCollection) => {
        /*
            Use interpolation here to invoke the map() method on
            the attractionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="attractionSelect">
                <option class="attractionOption" value="0">Please select an attraction!</option>
                ${
                    attractionsCollection.map(singleAttraction => {
                        return `<option>${singleAttraction.name} - ${singleAttraction.state}</option>`
                    })
                }
            </select>
        `
    }
    render(attractions)
}
export default AttractionSelect