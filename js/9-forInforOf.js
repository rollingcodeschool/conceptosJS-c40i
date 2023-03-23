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
    console.log(i); 
    console.log(colores[i]); 
}

for(let i of colores){
    console.log(i); //item del
    // console.log(colores[i]); 
}
