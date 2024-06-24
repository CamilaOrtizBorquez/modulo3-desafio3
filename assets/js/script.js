
function pintar(elemento, colores){
    elemento.style.backgroundColor = colores
}

const ele = document.getElementById("ele1")
ele.addEventListener("click",() => pintar(ele, 'yellow'));