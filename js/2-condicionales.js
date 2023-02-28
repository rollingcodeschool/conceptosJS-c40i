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
// opcionales 71 en adelante, 16 y 17
// desde 18 hasta los 70 inclusive

let edad = parseInt(prompt("Ingrese su edad"));
console.log(edad);
console.log(typeof edad);

if ((edad >= 16 && edad < 18) || edad >= 71) {
  document.write("es optativo votar");
} else if (edad >= 18 && edad <= 70) {
  document.write("Debe votar");
} else {
  document.write("No puede votar");
}
