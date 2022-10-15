import resturantImg from "./images/resturant.jpg"

function loadHome(){
    console.log(resturantImg)
    let main = document.querySelector("main")
    main.removeAttribute('class')
    main.classList.add("main-home")

    console.log("home loaded")
    let homePara = document.createElement('p')
    let nameSpan = document.createElement("span")
    homePara.textContent = "is an authentic Viking resturant and the only active original Viking resturant dating all the way back to 923 AD."
    + " come visit us and we will make sure every bite will make you feel like you are present in Valhalla!"
    nameSpan.textContent = 'The Odin Resturant '
    homePara.prepend(nameSpan)
    homePara.classList.add("home-para")
    nameSpan.classList.add("name-span")
    main.append(homePara)
    
    let resturantImage = new Image()

    resturantImage.src =resturantImg
    main.append(resturantImage) 


}

export default loadHome