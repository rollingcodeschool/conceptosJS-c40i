//arrays
// como declarar un array
let funkopops = [];

//arreglo con datos
let peliculas = ["Ant-man", 2023, "Los vengadores", "Endgame", "Black panther"];

function mostrarArreglo(array, titulo = 'No hay un titulo disponible') {
  document.write(`<h2>${titulo}</h2>`);
  document.write("<ul>");
  for (let i = 0; i < array.length; i++) {
    document.write(`<li>${array[i]}</li>`);
  }
  document.write("</ul>");
}

document.write("Cantidad de peliculas: " + peliculas.length); //cantidad de elementos en el arreglo
document.write("<br>Pelicula N3: " + peliculas[2]);
document.write("<br>" + peliculas);
//mostramos el arreglo completo
mostrarArreglo(peliculas);

//agregar elementos al arreglo
peliculas.unshift("Capitan America", "Thor");
mostrarArreglo(peliculas, 'Agregamos un elemento al principio del arreglo de peliculas');

peliculas.push("Dr. Strange");
mostrarArreglo(peliculas, 'Agregar un elemento al final del arreglo de peliculas');

peliculas.splice(3, 0, "Iron man");
mostrarArreglo(peliculas, 'Agregar un elemento en el medio del del arreglo de peliculas (3)');

// modificar el arreglo
peliculas[4] = "Hulk";
mostrarArreglo(peliculas,'Modificar un elemento en del arreglo de peliculas')

//eliminar elementos del arreglo
peliculas.shift();
mostrarArreglo(peliculas,'Eliminar el primer del arreglo de peliculas')

peliculas.pop();
mostrarArreglo(peliculas,'Eliminar el ultimo elemento del arreglo de peliculas')

peliculas.splice(3, 1);
// peliculas.splice(3,3);
// peliculas.splice(3);
mostrarArreglo(peliculas,'Eliminar un elemento en el medio del arreglo de peliculas (3)')

// OPERACIONES EXTRAS
peliculas.sort();
mostrarArreglo(peliculas,'Ordenar el arreglo de peliculas')

//
document.write("<h2>Encontrar un elemento en el peliculas</h2>");
document.write(`<p>Existe Thor: ${peliculas.includes("Thor")}</p>`);

//Operador ternario
// (condicion logica)? true : false;
let existePeli = peliculas.includes("Thor")
  ? "Si encontramos la pelicula"
  : "No encontramos la pelicula buscada";
// alternativa al operador ternario
let otraPeli = "";
if (peliculas.includes("Capitan America")) {
  otraPeli = "Si encontramos la pelicula";
} else {
  otraPeli = "No encontramos la pelicula buscada";
}

document.write(`<p>Existe Thor: ${existePeli}</p>`);
document.write(
  `<p>Existe Loky: ${
    peliculas.includes("Loky")
      ? "Si encontramos la pelicula"
      : "No encontramos la pelicula buscada"
  }</p>`
);
