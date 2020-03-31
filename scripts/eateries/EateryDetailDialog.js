// defining a function and this function will contain all our logic
// pretaining to the eateryDetailDialogButton.
export const eateryDialogButton = () => {

// targeting a class/DOM node to respond our click event and put the HTML.
    const contentTarget = document.querySelector(".itineraryEateryPreview")

// adding a click event to the contentTarget to display to DOM.
    contentTarget.addEventListener("click", event => {
// targeting a button with the matching ID that the user clicks.
        if (event.target.id.startsWith("eateryDetailsButton--")){
// display the dialog
            const dialogSiblingSelector = `#${event.target.id}+dialog`
// selection the variable that has our sibling selector functionality in it.
            const theDialog = document.querySelector(dialogSiblingSelector)
// then once clicked show the modal
            theDialog.showModal()
        }
// targeting a close button
        if (event.target.classList.contains("button--close")){
// storing the target of the event in a variable.
            const dialogElement = event.target.parentNode
// close method on the dialog box
            dialogElement.close()
        }
    })

}

