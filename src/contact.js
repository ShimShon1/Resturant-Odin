export function loadContact(){
    let main = document.querySelector("main")
    main.removeAttribute('class')
    main.classList.add("main-contact")
    main.innerHTML = "<h1>Contact Us</h1> <hr>"

    //create form
    let form = document.createElement("form")
    main.append(form)


    //create grid items for form 
    let contactGridItems = []
    for (let i = 1; i < 7; i++) {
        contactGridItems[i] = document.createElement("div")
        contactGridItems[i].classList.add("contact-grid")
        form.append(contactGridItems[i])
    }


    //create form elements and append
    let nameLabel = document.createElement("label")
    let nameInput = document.createElement("input")
    
    nameLabel.setAttribute("for","name")

    nameInput.setAttribute("id", "name")
    nameInput.setAttribute("name", "name")

    nameLabel.textContent = "Name:"
    contactGridItems[1].append(nameLabel)
    contactGridItems[1].append(nameInput)


    let emailLabel = document.createElement("label")
    let emailInput = document.createElement("input")

    emailLabel.setAttribute("for","email")

    emailInput.setAttribute("id", "email")
    emailInput.setAttribute("name", "email")
    emailInput.setAttribute("type", "email")

    emailLabel.textContent = "Email:"
    contactGridItems[3].append(emailLabel)
    contactGridItems[3].append(emailInput)


    let messageLabel = document.createElement("label")
    let messageInput = document.createElement("textarea")

    messageLabel.setAttribute("for","message")

    messageInput.setAttribute("id", "message")
    messageInput.setAttribute("name", "message")

    messageLabel.textContent = "Leave Your Message:"
    contactGridItems[5].append(messageLabel)
    contactGridItems[5].append(messageInput)


    let submitButton  = document.createElement("button")
    submitButton.textContent = "Submit"
    contactGridItems[6].append(submitButton)



    let locationTitle = document.createElement("span")
    let locationDetail = document.createElement("p")

    locationTitle.textContent = "Our Location:"
    locationDetail.textContent = "Valheim, next to Eikthyr's shrine"

    contactGridItems[2].append(locationTitle)
    contactGridItems[2].append(locationDetail)


    let emailTitle = document.createElement("span")
    let emailDetail = document.createElement("p")

    emailTitle.textContent = "Our Email:"
    emailDetail.textContent = "valalalalala@gmail.com"

    contactGridItems[4].append(emailTitle)
    contactGridItems[4].append(emailDetail)


}

