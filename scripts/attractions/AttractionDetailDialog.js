export const attractionDialogButton = () => {
    
    const contentTarget = document.querySelector(".itineraryAttractionPreview")
    
    contentTarget.addEventListener("click", event => {
    
    if (event.target.id.startsWith("attractionDetailButton--")){

        const dialogSiblingSelector = `#${event.target.id}+dialog`
    
        const theDialog = document.querySelector(dialogSiblingSelector)

            theDialog.showModal()
    }
    if (event.target.classList.contains("button--close")) {
        const dialogElement = event.target.parentNode
        dialogElement.close()
    }
})
}