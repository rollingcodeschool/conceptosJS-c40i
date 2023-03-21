// // ES5
// id: 1000,
// nombre: "summer rains",
// duracion: "2min 40seg",
// autor: "Facu Carabajal",
function Cancion(id, nombre, autor){
    this.id = id;
    this.nombre = nombre;
    this.autor = autor;
}
//instanciando al prototipo cancion
const nuevoTema = new Cancion(10,'prueba de cancion','Facu');
console.log(nuevoTema)

//ES6
class VideoJuego{
    #titulo; // declaro esta propiedad privada
    constructor(titulo, paramGenero, precio, desarrollador){
        this.#titulo = titulo;
        this.genero = paramGenero;
        this._precio = precio;
        this.desarrollador = desarrollador;
        this.valoracion = 0;
    }

    //metodos
    saveGame(){
        document.write(`<p>El juego ${this.titulo} fue guardado</p>`)
    }

    //propiedades computadas get y set
    get precio(){
        return this._precio;
    }

    set precio(nuevoPrecio){
        if(nuevoPrecio > 0){
            this._precio = nuevoPrecio;
        }else{
            console.log(nuevoPrecio + ' no es valido')
        }
    }
    get titulo(){
        return this.#titulo;
    }

    set titulo(nuevoTitulo){
       this.#titulo = nuevoTitulo;
    }

}

// instanciar a la clase VideoJuego
const csgo = new VideoJuego('CSGO','Shooter',2000, 'Valve');
const superMario = new VideoJuego('Super Mario','Aventura', 1000, 'Nintendo');

console.log(csgo);

csgo.saveGame();
superMario.saveGame()

//actualizar precio
// csgo.precio = 3000;
// console.log(csgo);
csgo.titulo = 'CSGO 2023'
document.write(`<p>Precio ${csgo.titulo}: $${csgo.precio}</p>`)
//actualizar el precio usando el setter
csgo._precio = 3000;
document.write(`<p>Precio CSGO: $${csgo.precio}</p>`)

// document.write(`<p>Precio CSGO: ${csgo._precio}</p>`)


