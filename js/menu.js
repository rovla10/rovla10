const icono = document.querySelector(`.icono`);
const menu = document.querySelector(`.menu-nav`);

console.log(menu)
console.log(icono)

icono.addEventListener(`click`, ()=>{
    menu.classList.toggle("spread")
})
window.addEventListener("click", e =>{
    if(menu.classList.contains("spread") && e.target != menu && e.target != icono ){

        menu.classList.toggle("spread")
    }
})