//HTML representation of a single itineray
export const Itinerary = (itineraryObject, parkObject, eateryObject, attractionObject) => {
  return `
  <article class="itineray">
  <section>${parkObject.name}</section>
  <section>${eateryObject.businessName}</section>
  <section>${attractionObject.name}</section>
  <button id="deleteItinerary--${itineraryObject.id}">Delete</button>
</article>

    `
}
