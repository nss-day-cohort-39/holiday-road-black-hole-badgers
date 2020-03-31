export const parkComponent = parkObject => {
    return `
        <article class="parkList">
            <h3 class="parkName">${parkObject.name}</h3>
            <section>${parkObject.addresses[0].city}, ${parkObject.addresses[0].stateCode}</section>
            <dialog class="dialog--park" id="details--${parkObject.id}">
                <ul>
                    <li>Overview: ${parkObject.description}</li>
                    <li>${parkObject.contacts.phoneNumbers.phoneNumber}</li>
                    <li>$${parkObject.entranceFees.cost}</li>
                </ul>
                <button class="button--close">Close Park Details</button>
            </dialog>
            <button class="detailsButton" id="parkDetailsButton--${parkObject.id}">Park Details</button>
        </article>
     `
}
