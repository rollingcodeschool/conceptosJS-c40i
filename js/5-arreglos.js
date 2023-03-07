//arrays
// como declarar un array
let funkopops = [];

//arreglo con datos
let peliculas= ['Ant-man', 2023, 'los vengadores','endgame','black panther'];

document.write('Cantidad de peliculas: '+ peliculas.length); //cantidad de elementos en el arreglo
document.write('<br>Pelicula N3: '+peliculas[2]);

document.write('<br>'+peliculas);

document.write('<h2>Mostrar la lista de peliculas</h2>');
document.write('<ul>');

for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`);
}

document.write('</ul>');