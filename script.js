// Beginning of my code

const icon = document.querySelector('nav');
const nav = document.querySelector('#nav');

icon.addEventListener("click", ()=>{
    nav.classList.toggle("hidden")
})