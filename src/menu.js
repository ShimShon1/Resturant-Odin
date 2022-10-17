import porkImg from "./images/apple-and-pork.png"


function loadMenu(){
    let main = document.querySelector("main")
    console.log("Menu loaded")
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

   createDish("hambubub","5.55")
   createDish("hambubub","5.55")
   createDish("hambubub","5.55")
   createDish("hambubub","5.55")

}

export default loadMenu