export const parkComponent = parkObject => {
    return `
        <article class="parkList">
            <h3 class="parkName">${parkObject.name}</h3>
            <section>${parkObject.addresses[0].city}, ${parkObject.addresses[0].stateCode}</section>
            <button class="detailsButton" id="parkDetailsButton--${parkObject.id}">Park Details</button>
            <dialog class="dialog--park" id="details--${parkObject.id}">
                <ul>
                    <li>Overview: ${parkObject.description}</li>
                    <li>Phone Number: ${parkObject.contacts.phoneNumbers[0].phoneNumber}</li>
                </ul>
                <div class="parkImg">
                    <img src="${parkObject.images[0].url}" alt="picture of ${parkObject.name}">
                </div>
                <button class="button--close">Close Park Details</button>
            </dialog>
        </article>
     `
}
