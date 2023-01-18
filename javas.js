const check = document.getElementById("check");
const childs = document.querySelectorAll(".section-top .section-childs")
const childsText = document.querySelectorAll(".section-top .section-childs p:nth-child(2)")
const kids = document.querySelectorAll(".section-kids .kids")
const kidsNumbers = document.querySelectorAll(".number")


check.addEventListener("click",()=>{
document.body.classList.toggle("light")
document.querySelector("header").classList.toggle("light")
document.querySelector(".middle-title").classList.toggle("light")
document.querySelector(".left-h p").classList.toggle("light")
childs.forEach(e=>{
e.classList.toggle("light")
})
childsText.forEach(e=>{
e.classList.toggle("light")
})
kids.forEach(e=>{
e.classList.toggle("light")
})
kidsNumbers.forEach(e=>{
e.classList.toggle("light")
})
})

