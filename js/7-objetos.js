//objetos notacion literal

// XXX-55555-XXX

let cancion = {
  // propiedades clave: valor
  id: 1000,
  nombre: "summer rains",
  duracion: "2min 40seg",
  autor: "Facu Carabajal",
  //metodos
  play: function () {
    console.log(this)
    document.write(`<p>La cancion ${this.nombre} comenzo ...</p>`);
  },
  pausa: () => {
    console.log(this)
    document.write(`<p>Se pauso la canción</p>`);
  }
};

//mostrar el objeto
console.log(cancion);
// document.write(cancion);
document.write(`Cancion: ${cancion.nombre}<br>`);
document.write(`Autor: ${cancion.autor}<br>`);
document.write(`Duracion: ${cancion["duracion"]}`);

//metodo del objeto Object devuelve true o false
console.log(cancion.hasOwnProperty("autor"));
console.log(cancion.hasOwnProperty("estado"));

cancion.play();
cancion.pausa();

console.log(this);

//agregar propiedades
cancion.estado = true;
console.log(cancion);
document.write(`Estado: ${cancion.estado}<br>`);

//modificar la propiedad
cancion.estado = false;
document.write(`Estado: ${cancion.estado}<br>`);

//borrar una propiedad del objeto
delete cancion.estado;
console.log(cancion);