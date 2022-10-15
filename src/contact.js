function loadContact(){
    let main = document.querySelector("main")
    main.removeAttribute('class')
    main.classList.add("main-contact")
    console.log("Contact loaded")
}

export default loadContact