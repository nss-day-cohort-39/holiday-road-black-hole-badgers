export const eateryComponent = (eateryObj) => {
   return `
        <div class="eateryList"">
            <h3 class="eateryName">${eateryObj.businessName}</h3>
            <button class="detailsButton" id="eateryDetailsButton--${eateryObj.id}">Details</button>
        </div>
   `
}