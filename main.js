let gold = document.querySelector(".img-1")
let blue = document.querySelector(".img-2")
let black = document.querySelector(".img-3")
let white = document.querySelector(".img-4")
let red = document.querySelector(".img-5")
let mainImg = document.querySelector(".main-img-src")
let all = document.querySelectorAll(".imgs img")
let menu = document.querySelector(".menu i")
let ul = document.querySelector(".list")
console.log(mainImg);
blue.onclick = () => {
    document.body.style.backgroundColor = "rgb(19, 106, 245)"
    mainImg.setAttribute("src", blue.getAttribute("src"))
    all.forEach((e) => {
        e.classList.remove("active")
    })
    blue.classList.add("active")
}
black.onclick = () => {
    document.body.style.backgroundColor = "rgb(25, 24, 24)"
    mainImg.setAttribute("src", black.getAttribute("src"))
    all.forEach((e) => {
        e.classList.remove("active")
    })
    black.classList.add("active")
}
white.onclick = () => {
    document.body.style.backgroundColor = "rgb(170, 146, 8)"
    mainImg.setAttribute("src", white.getAttribute("src"))
    all.forEach((e) => {
        e.classList.remove("active")
    })
    white.classList.add("active")
}
red.onclick = () => {
    document.body.style.backgroundColor = "rgb(105, 5, 5)"
    mainImg.setAttribute("src", red.getAttribute("src"))
    all.forEach((e) => {
        e.classList.remove("active")
    })
    red.classList.add("active")
}
gold.onclick = () => {
    document.body.style.backgroundColor = "black"
    mainImg.setAttribute("src", gold.getAttribute("src"))
    all.forEach((e) => {
        e.classList.remove("active")
    })
    gold.classList.add("active")
}
menu.onclick = () => {
    if (ul.style.display === "block") {
        ul.style.display = "none"
    } else {
        ul.style.display = "block"
    }
}
// menu.ontouch = () => {
//     if (ul.style.display === "block") {
//         ul.style.display = "none"
//     } else {
//         ul.style.display = "block"
//     }
// }





