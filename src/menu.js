import porkImg from "./images/apple-and-pork.png"
import fishSoupImg from "./images/fish-soup.png"
import greenPattiesImg from "./images/green-patties.png"
import rolledPorkImg from "./images/rolled-pork.jpg"

export function loadMenu(){
    let main = document.querySelector("main")
    main.removeAttribute('class')
    main.classList.add("main-menu")



    //create menu
    let menuHeader = document.createElement('h1')
    let hr = document.createElement("hr")
    let dishesContainer = document.createElement("div")


    dishesContainer.classList.add("dishes-cont")

   
    main.append(menuHeader)
    main.append(hr)
    main.append(dishesContainer)



    menuHeader.textContent = "Menu"

    //function to create a dish

    function createDish(name,price,image = porkImg,desc = "no description"){
        let menuDish = document.createElement("div")
        menuDish.classList.add("menu-dish")

        let dishPrice = document.createElement("span")
        dishPrice.textContent = price
        menuDish.append(dishPrice)

        let dishTitle = document.createElement("h3")
        dishTitle.textContent = name

        let hr = document.createElement("hr")


        let menuInfo = document.createElement("div")
        menuInfo.classList.add("menu-info")

        let menuDesc = document.createElement("p")
        menuDesc.classList.add("menu-desc")

        let dishImg = new Image()
        dishImg.classList.add("dish-img")
        dishImg.src = image

        menuDesc.textContent = desc
        dishesContainer.append(menuDish)

        menuDish.append(dishTitle)

        menuDish.append(hr)

        menuDish.append(menuInfo)

        menuInfo.append(menuDesc)

        menuInfo.append(dishImg)
        
    }

   createDish("Pork and Apple","25$", porkImg, "The boar Sæhrimnir  is slaughtered and eaten every night. And right after, he comes back to life.")
   createDish("Fish Soup","12$",fishSoupImg,"fish and shellfish were an important supplement to the diet of a viking and a great source of protein")
   createDish("Green Patties","10$",greenPattiesImg, "The nature's larder is bursting and the wild plants - the weeds - stand knee high.")
   createDish("Rolled Pork","20$", rolledPorkImg, "Pork rolled with Summer savory, a very old, aromatic herb")

}

