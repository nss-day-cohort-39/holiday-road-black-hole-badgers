const Header = () => {
    return`
    <h1>Pacific West Tour</h1>
    <img src="https://i.imgur.com/JuOv3Ol.png" alt="plane icon" srcset=""></div>
    `
}

const contentTargetEatery = document.querySelector(".header")

export const headerRender = eatery => {
    contentTargetEatery.innerHTML = Header()
}