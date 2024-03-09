const linksHead = document.querySelectorAll(".menu-list__link")
const mainScrooll = document.querySelectorAll(".main__scrool")
const newArray = [...linksHead, mainScrooll]

linksHead.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault()
        const ID = event.target.getAttribute("href").substr(1)

        document.getElementById(ID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
})