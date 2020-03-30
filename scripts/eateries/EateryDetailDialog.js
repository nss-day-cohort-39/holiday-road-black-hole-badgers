export const eateryDialogButton = () => {

    const allDialogs = document.querySelectorAll("button[id^='eateryDetailsButton--']")
    const allCloseButtons = document.querySelectorAll(".button--close")
    
    for (const btn of allDialogs) {
            btn.addEventListener("click", event => {
                const dialogSelector = `#${event.target.id}+dialog`
                const theDialog = document.querySelector(dialogSelector)
                    theDialog.showModal()
            }
            )
    }   

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }

    
}

