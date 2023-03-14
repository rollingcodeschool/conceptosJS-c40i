// funciones declarativas
function saludar(){
    document.write('Hola mundo');  
}

function nuevoSaludo(apellido, nombre, aliasPersonaje){
    let nombreLargo = nombreCompleto(nombre,apellido);
    document.write(`<br>Mi nombre es ${nombreLargo}, mi caracteristica es ser ${aliasPersonaje}`);
}

// function nombreCompleto (nombre, apellido){
//     let nombreLargo = nombre +' '+apellido;
//     return nombreLargo;
// }

//funciones expresivas o anonimas
// const nombreCompleto = function (nombre, apellido){
//     let nombreLargo = nombre +' '+apellido;
//     console.log(nombreLargo)
//     return nombreLargo;
// }

// const nombreCompleto = (nombre, apellido) =>{
//     let nombreLargo = nombre +' '+apellido;
//     console.log(nombreLargo);
//     return nombreLargo
// }

const nombreCompleto = (nombre, apellido) => nombre +' '+apellido;

nombreCompleto('peter', 'parker');

const nombre = 'Clark'
const apellido = 'Kent'
const alias = 'Superman'

//invocar a la funcion
saludar();

nuevoSaludo(apellido, nombre, alias);
nuevoSaludo('connor', 'coolero', 'cruza de potrillo y de perra');

// TODO Pedir a un usuario un nombre y precio de un juego, crear un funcion que informe el precio final en pesos argentinos. Preguntar si quiere saber el precio de otro juego.



