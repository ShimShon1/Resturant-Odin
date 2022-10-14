import loadHome from "./home"
import loadContact from "./contact"
import loadMenu from "./menu"

function loadNav(){
    let content = document.querySelector("#content")
    let header = document.createElement("header")
    let main = document.querySelector("main")

    
    content.prepend(header)

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





    

   
}

export default loadNav