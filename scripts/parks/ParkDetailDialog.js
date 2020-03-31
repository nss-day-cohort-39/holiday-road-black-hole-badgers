// defining a function and this function will contain all our logic
// pretaining to the parkDetailDialogButton.
export const parkDialogButton = () => {

    // targeting a class/DOM node to respond our click event and put the HTML.
        const contentTarget = document.querySelector(".itineraryParkPreview")
    
    // adding a click event to the contentTarget to display to DOM.
        contentTarget.addEventListener("click", event => {
    // targeting a button with the matching ID that the user clicks.
            if (event.target.id.startsWith("parkDetailsButton--")){
    // display the dialog
                const dialogSiblingSelector = `#${event.target.id}+dialog`
    // selection the variable that has our sibling selector functionality in it.
                const theDialog = document.querySelector(dialogSiblingSelector)
    // method that shows a modal
                theDialog.showModal()
            }
    // adding a click event to close button
            if (event.target.classList.contains("button--close")){
    // storing the target of the event in a variable
                const dialogElement = event.target.parentNode
    // close method on the dialog box
                dialogElement.close()
            }
        })
    
    }


    