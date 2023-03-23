// for.. in
// for(variable in object){----}

let videoJuego ={
    nombre: 'marioBross',
    precio: 3000,
    categoria: 'aventura'
}

let colores= ['azul','amarillo','rojo'];

for(let i in videoJuego){
    console.log(i); //key
    console.log(videoJuego[i]); //value
}

// for... of
console.log('Otras pruebas');

for(let i in colores){
    console.log(i); //posicion
    console.log(colores[i]); 
}

for(let i of colores){
    console.log(i); //item del array
    // console.log(colores[i]); 
}
