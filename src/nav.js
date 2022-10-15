import helmet from "./images/viking-helmet.png"

import loadHome from "./home"
import loadContact from "./contact"
import loadMenu from "./menu"
import mainTitle from "./main-title"

function loadNav(){
    console.log(helmet)
    

    let content = document.querySelector("#content")
    let header = document.createElement("header")
    let main = document.createElement("main")
    
    content.prepend(main)
    content.prepend(header)
    

    loadHome()
    let homeTab = document.createElement('div')
    homeTab.textContent = "Home"
    homeTab.addEventListener("click", () =>{main.innerHTML = "";  loadHome()} )

    header.append(homeTab)

    let menuTab = document.createElement('div')
    menuTab.textContent = "Menu"
    menuTab.addEventListener("click", () =>{main.innerHTML = "";  loadMenu()} )
    header.append(menuTab)

    let contactTab = document.createElement('div')
    contactTab.textContent = "Contact"
    contactTab.addEventListener("click", () =>{main.innerHTML = "";  loadContact()} )

    header.append(contactTab)


    mainTitle()


    

   
}

export default loadNav