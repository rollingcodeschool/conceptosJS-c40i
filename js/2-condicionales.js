// estructura condicional if

/*
if(condicion){
    si se cumple la condicion ejecuto este codigo...
}else{
    aqui todo el codigo si no se cumple la condicion
}
*/

// pedir la edad a un usuario
// si tiene desde 16 años tiene que votar
// menores de 16 no votan

let edad = parseInt(prompt('Ingrese su edad'));
console.log(edad);
console.log(typeof(edad));

if( edad >= 16 ){
    document.write('Puede votar');
}else{
    document.write('No puede votar');
}



