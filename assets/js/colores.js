/*Cambio de color a negro*/

const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');


blue.addEventListener('click', () => pintar('black', blue));
red.addEventListener('click', () => pintar('black', red));
green.addEventListener('click', () => pintar('black', green));
yellow.addEventListener('click', () => pintar('black', yellow));

function pintar(colores, elemento){
    elemento.style.backgroundColor = colores
}



/*Cambio de colore con keydown*/

let color = '';

const cajaKey = document.querySelector('#key');
document.addEventListener('keydown', (event) => {

    if (event.key === 'a') {
        color = 'pink';
        pintarCaja(color,cajaKey);
        
    } else if (event.key === 's') {
        color = 'orange';
        pintarCaja(color,cajaKey);
    
    } else if (event.key ==='d'){
        color = 'lightblue'; 
        pintarCaja(color,cajaKey);

    } else if (event.key === 'q'){
        color = 'purple';
        agregarElemento(color);
    }else if (event.key === 'w'){
        color = 'grey'
        agregarElemento(color);
    }else if (event.key === 'e'){
        color = 'brown'
        agregarElemento(color);
    }
})



const pintarCaja = (colores, elemento) => {
    elemento.style.backgroundColor = colores;
}

/*Agregar cajas*/
const agregarElemento = (colores) => {
    const contenedor = document.querySelector('#contenedor')
    nuevoElemento = document.createElement("div");
    nuevoElemento.style.backgroundColor=colores;
    nuevoElemento.style.width='200px';
    nuevoElemento.style.height='200px';
    contenedor.appendChild(nuevoElemento);
}



