// // ES5
// id: 1000,
// nombre: "summer rains",
// duracion: "2min 40seg",
// autor: "Facu Carabajal",
function Cancion(id, nombre, autor) {
  this.id = id;
  this.nombre = nombre;
  this.autor = autor;
}
//instanciando al prototipo cancion
const nuevoTema = new Cancion(10, "prueba de cancion", "Facu");
console.log(nuevoTema);

//ES6
class VideoJuego {
  #titulo; // declaro esta propiedad privada
  constructor(titulo, paramGenero, precio, desarrollador) {
    this.#titulo = titulo;
    this.genero = paramGenero;
    this._precio = precio;
    this.desarrollador = desarrollador;
    this.valoracion = 0;
  }

  //propiedades computadas get y set
  get precio() {
    return this._precio;
  }

  set precio(nuevoPrecio) {
    if (nuevoPrecio > 0) {
      this._precio = nuevoPrecio;
    } else {
      console.log(nuevoPrecio + " no es valido");
    }
  }
  get titulo() {
    return this.#titulo;
  }

  set titulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
  //metodos
  saveGame() {
    document.write(`<p>El juego ${this.titulo} fue guardado</p>`);
  }

  mostrarInformacion() {
    document.write(`<h2>Informacion del juego ${this.titulo}</h2>
        <ul>
        <li>Precio: ${this.precio}</li>
        <li>Genero: ${this.genero}</li>
        <li>Desarrollador: ${this.desarrollador}</li>
        <li>Valoracion: ${this.valoracion}</li>
        </ul>`);
  }
}

class JuegoSupervivencia extends VideoJuego {
  #protagonista;
  #antagonista;
  constructor(
    titulo,
    paramGenero,
    precio,
    desarrollador,
    protagonista,
    antagonista
  ) {
    //invocamos al constructor de la clase videoJuego
    super(titulo, paramGenero, precio, desarrollador);
    this.#protagonista = protagonista;
    this.#antagonista = antagonista;
  }

  get protagonista() {
    return this.#protagonista;
  }

  set protagonista(nuevoProtagonista) {
    this.#protagonista = nuevoProtagonista;
  }
  get antagonista() {
    return this.#antagonista;
  }

  set antagonista(nuevoAntagonista) {
    this.#antagonista = nuevoAntagonista;
  }

  mostrarInformacion(){
    // invocar al metodo del padre
    // super.mostrarInformacion();
    document.write(
    `<h2>Informacion del juego ${this.titulo}</h2>
    <ul>
    <li>Precio: ${this.precio}</li>
    <li>Genero: ${this.genero}</li>
    <li>Desarrollador: ${this.desarrollador}</li>
    <li>Valoracion: ${this.valoracion}</li>
    <li>Protagonista: ${this.protagonista}</li>
    <li>Antagonista: ${this.antagonista}</li>
    </ul>`
    )
  }
}

// instanciar a la clase VideoJuego
const csgo = new VideoJuego("CSGO", "Shooter", 2000, "Valve");
const superMario = new VideoJuego("Super Mario", "Aventura", 1000, "Nintendo");

console.log(csgo);

csgo.saveGame();
superMario.saveGame();

//actualizar precio
// csgo.precio = 3000;
// console.log(csgo);
csgo.titulo = "CSGO 2023";
document.write(`<p>Precio ${csgo.titulo}: $${csgo.precio}</p>`);
//actualizar el precio usando el setter
csgo._precio = 3000;
document.write(`<p>Precio CSGO: $${csgo.precio}</p>`);

// document.write(`<p>Precio CSGO: ${csgo._precio}</p>`)

const residentEvil2 = new JuegoSupervivencia(
  "Resident Evil 2",
  "Terror, supervivencia",
  2000,
  "capcom",
  "Leon",
  "Birkin"
);

console.log(residentEvil2);
residentEvil2.saveGame();

residentEvil2.mostrarInformacion();
csgo.mostrarInformacion();

