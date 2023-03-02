// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

//Hola mundo  (hasta 10 caracteres)
let frase = prompt('Ingrese una frase');

console.log(frase.toLowerCase());
frase = frase.toLowerCase();
console.log(frase.length);

//Tomar un caracter y verificar si es una vocal
console.log(frase.charAt(0));

if( frase.charAt(0) === 'a' ||  frase.charAt(0) === 'e' || frase.charAt(0) === 'i' || frase.charAt(0) === 'o' || frase.charAt(0) === 'u'){
    document.write(frase.charAt(0))
}
if( frase.charAt(1) === 'a' ||  frase.charAt(1) === 'e' || frase.charAt(1) === 'i' || frase.charAt(1) === 'o' || frase.charAt(1) === 'u'){
    document.write(frase.charAt(1))
}
if( frase.charAt(2) === 'a' ||  frase.charAt(2) === 'e' || frase.charAt(2) === 'i' || frase.charAt(2) === 'o' || frase.charAt(2) === 'u'){
    document.write(frase.charAt(2))
}
if( frase.charAt(3) === 'a' ||  frase.charAt(3) === 'e' || frase.charAt(3) === 'i' || frase.charAt(3) === 'o' || frase.charAt(3) === 'u'){
    document.write(frase.charAt(3))
}
if( frase.charAt(4) === 'a' ||  frase.charAt(4) === 'e' || frase.charAt(4) === 'i' || frase.charAt(4) === 'o' || frase.charAt(4) === 'u'){
    document.write(frase.charAt(4))
}

