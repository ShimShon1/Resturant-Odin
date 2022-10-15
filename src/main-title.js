import helmet from "./images/viking-helmet.png"

function mainTitle(){
    let main = document.querySelector("main")
    let content = document.querySelector("#content")

    let mainHeading = document.createElement("div")
    mainHeading.classList.add("main-heading")

    let title = document.createElement('h1')
    let vikingHelm = new Image()
    vikingHelm.src = helmet;


    let titlePara = document.createElement("p")
    titlePara.textContent = "Eat Like Odin Did"

    console.log(titlePara)
    title.textContent = "The Odin Resturant"
    mainHeading.append(titlePara)
    mainHeading.prepend(title)
    mainHeading.prepend(vikingHelm)
    content.prepend(mainHeading)
}


export default mainTitle