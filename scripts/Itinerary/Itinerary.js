//HTML representation of a single itineray
export const Itinerary = (itineraryObject, parkObject, eateryObject, attractionObject) => {
  return `
  <article class="itineray">
  <h3>Saved Itinerary</h3>
  <section>Park: ${parkObject.name}</section>
  <section>Eatery: ${eateryObject.businessName}</section>
  <section>Attraction: ${attractionObject.name}</section>
  <button class="deleteButton" id="deleteItinerary--${itineraryObject.id}">Delete 🤢</button>
</article>

    `
}
