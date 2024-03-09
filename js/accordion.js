const lists = document.querySelectorAll(".feature-sub");
const btns = document.querySelectorAll(".feature__link");

const openTab =(tab, idx) => {
    tab.classList.add("feature__link_active")
    lists[idx].classList.remove("hidden")
}
const closeTab =(tab, idx) => {
    tab.classList.remove("feature__link_active")
    lists[idx].classList.add("hidden")
}

btns.forEach((btnItem, index) => {
    btnItem.addEventListener("click", () => {

        if (btnItem.classList.contains("feature__link_active")){
            closeTab(btnItem, index)
        } else {
            openTab(btnItem, index)
        }

        // btns.forEach((btnItem) =>{
        //     btnItem.classList.remove("feature__link_active")
        // })
        // btnItem.classList.add("feature__link_active")

        // lists.forEach((listItem) =>{
        //     listItem.classList.add("hidden")
        // })

        // lists[index].classList.remove("hidden")
    })
})