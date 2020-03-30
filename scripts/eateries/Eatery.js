export const eateryComponent = eateryObj => {
   return `
        <article class="eateryList">
            <h3 class="eateryName">${eateryObj.businessName}</h3>
            <section>${eateryObj.city}, ${eateryObj.state}</section>
            <button class="detailsButton" id="eateryDetailsButton--${eateryObj.id}">Eatery Details</button>
            <dialog class="dialog--eatery" id="details--${eateryObj.id}">
                <ul>
                    <li>Overview: ${eateryObj.description}</li>
                    <li>${eateryObj.ameneties.petFriendly?"Bring all the fluffsters!!":"Pets are not allowed"}</li>
                    <li>${eateryObj.ameneties.wifi?"We have free WiFi!!":"Sorry, no WiFi!"}</li>
                    <li>${eateryObj.ameneties.restrooms?"Restrooms are available":"Restrooms are not available"}</li>
                </ul>
                <button class="button--close">Close Eatery Details</button>
            </dialog
        </article> 
   `
}
