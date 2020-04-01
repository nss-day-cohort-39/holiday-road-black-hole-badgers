//HTML representation of a single itineray
export const Itinerary = (parkObject, eateryObject, attractionObject) => {
  return `
    <article class="itineray">
        <section>${parkObject.name}</section>
        <section>${eateryObject.attraction}</section>
        <section>${attractionObject.park}</section>
    </article>

    `
}
