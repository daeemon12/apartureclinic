const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu")
const logo = document.querySelector(".logo")
const cancel = document.querySelector(".cancel")
const container = document.querySelector(".container")
const list1 = document.querySelector(".list-1")
const list2 = document.querySelector(".list-2")
const list3 = document.querySelector(".list-3")

burger.addEventListener("click", ()=> {
    menu.style.display = "block";
    burger.style.display = "none";
    cancel.style.zIndex = "2"
    logo.style.zIndex = "2";
    menu.classList.add("animation")
})
cancel.addEventListener("click", ()=> {
    menu.style.display = "none";
    burger.style.display = "block";
    cancel.style.zIndex = "-2"
    logo.style.zIndex = "2";
    menu.classList.remove("animation")
    // menu.classList.add("animation-1")
})

