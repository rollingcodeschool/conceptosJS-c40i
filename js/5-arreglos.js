//arrays
// como declarar un array
let funkopops = [];

//arreglo con datos
let peliculas= ['Ant-man', 2023, 'Los vengadores','Endgame','Black panther'];

document.write('Cantidad de peliculas: '+ peliculas.length); //cantidad de elementos en el arreglo
document.write('<br>Pelicula N3: '+peliculas[2]);

document.write('<br>'+peliculas);

document.write('<h2>Mostrar la lista de peliculas</h2>');
document.write('<ul>');
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write('</ul>');

//agregar elementos al arreglo

document.write('<h2>Agregar un elemento al principio del arreglo de peliculas</h2>');

peliculas.unshift('Capitan America','Thor');

document.write('<ul>');
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write('</ul>');

document.write('<h2>Agregar un elemento al final del arreglo de peliculas</h2>');

peliculas.push('Dr. Strange');

document.write('<ul>');
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write('</ul>');

document.write('<h2>Agregar un elemento en el medio del del arreglo de peliculas (3)</h2>');

peliculas.splice(3,0,'Iron man');

document.write('<ul>');
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write('</ul>');

// modificar el arreglo
document.write('<h2>Modificar un elemento en del arreglo de peliculas</h2>');

peliculas[4] = 'Hulk';

document.write('<ul>');
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write('</ul>');

//eliminar elementos del arreglo
document.write('<h2>Eliminar el primer del arreglo de peliculas</h2>');

peliculas.shift();

document.write('<ul>');
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write('</ul>');

document.write('<h2>Eliminar el ultimo elemento del arreglo de peliculas</h2>');

peliculas.pop();

document.write('<ul>');
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write('</ul>');

document.write('<h2>Eliminar un elemento en el medio del arreglo de peliculas (3)</h2>');

peliculas.splice(3,1);
// peliculas.splice(3,3);
// peliculas.splice(3);

document.write('<ul>');
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write('</ul>');

// OPERACIONES EXTRAS

document.write('<h2>Ordenar el arreglo de peliculas</h2>');

peliculas.sort();

document.write('<ul>');
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}
document.write('</ul>');

// 

document.write('<h2>Encontrar un elemento en el peliculas</h2>');

document.write(`<p>Existe Thor: ${peliculas.includes('Thor')}</p>`)



