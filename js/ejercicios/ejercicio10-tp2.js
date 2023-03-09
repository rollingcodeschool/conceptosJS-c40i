// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt('Ingrese un numero de filas'));
const columnas = parseInt(prompt('Ingrese un numero de columnas'));

let numeroCelda = filas * columnas; 

document.write('<table><tbody>');
//este bucle dibuja filas
for(let indiceFilas=0; indiceFilas< filas ; indiceFilas++){
    document.write('<tr>')
        for(let indiceColumnas=0; indiceColumnas < columnas; indiceColumnas++){
            document.write(`<td>${numeroCelda}</td>`);
            numeroCelda--; //numeroCelda = numeroCelda -1
        }

    document.write(' </tr>')
}


document.write('</tbody></table>')