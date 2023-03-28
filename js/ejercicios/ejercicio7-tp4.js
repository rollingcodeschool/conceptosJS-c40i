// Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// existeContacto(Contacto): indica si el contacto pasado existe o no.
// listarContactos(): Lista toda la agenda
// buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// agendaLlena(): indica si la agenda está llena.
// huecosLibres(): indica cuántos contactos más podemos ingresar.

class Contacto {
  #nombre;
  #telefono;
  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    if (nuevoNombre.length > 0) {
      this.#nombre = nuevoNombre;
    }
  }
  get telefono() {
    return this.#telefono;
  }

  set telefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }
}

class Agenda {
  #tamanio;
  constructor(tamanio) {
    this.contactos = [];
    this.#tamanio = tamanio;
  }

  get tamanio() {
    return this.#tamanio;
  }

  set tamanio(nuevaDimension) {
    this.#tamanio = nuevaDimension;
  }

  // aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
  agregarContacto(contacto) {
    //quiero agregar contactos unicos
    if(!this.existeContacto(contacto.nombre)){
      //verificar si la agenda esta llena
      if (!this.agendaLlena()) {
        console.log("contacto agregado");
        this.contactos.push(contacto);
      }
    }else{
      console.log('Ya existe el contacto '+contacto.nombre);
    }
    console.log(this.contactos);
  }
  // existeContacto(Contacto): indica si el contacto pasado existe o no.
  existeContacto(nombreContacto) {
    const contactoBuscado = this.contactos.find(
      (contacto) => contacto.nombre === nombreContacto
    );
    if(contactoBuscado){
      //agreguen el doc.write
      console.log(contactoBuscado);
      return true;
    }else{
      console.log('No existe el contacto '+nombreContacto);
      return false;
    }
  }

  // listarContactos(): Lista toda la agenda
  listarContactos(){
    this.contactos.map((contacto)=>
      //agregar un doc.writ
      console.log(`Contacto: ${contacto.nombre} - Tel: ${contacto.telefono}`) 
    )
  }
  // buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
  // eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
  // agendaLlena(): indica si la agenda está llena.
  agendaLlena() {
    //si la agenda esta llena
    if (this.contactos.length === this.tamanio) {
      console.log("la agenda esta llena");
      return true;
    } else {
      console.log("hay espacio disponible en la agenda");
      return false;
    }
  }

  // huecosLibres(): indica cuántos contactos más podemos ingresar.

  borrarContacto(nombre){
    let contactosFiltrados = this.contactos.filter((contacto)=> contacto.nombre !== nombre);
    this.contactos = contactosFiltrados
  }
}

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

let agendaNueva = new Agenda(10);

do {
  const opcion = parseInt(
    prompt(`Seleccione una opcion:
    1- Añadir contacto 
    2- Ver si existe un contacto en la agenda 
    3- Mostrar todos los contactos 
    4- Buscar un contacto por su nombre 
    5- Eliminar un contacto 
    6- Ver si la agenda está llena 
    7- Espacio disponible para almacenar contactos
    8- Modificar tamaño de la agenda`)
  );
  console.log(opcion);
if(!isNaN(opcion)){
  switch (opcion) {
    case 1:
      const nombrePersona = prompt("Ingrese un nombre");
      const telefonoPersona = prompt("Ingrese un telefono");
      const contactoNuevo = new Contacto(nombrePersona, telefonoPersona);
      agendaNueva.agregarContacto(contactoNuevo);

      break;
    case 2:
      const nombre = prompt("Ingrese el nombre buscado");
      agendaNueva.existeContacto(nombre);
      break;
    case 3:
      agendaNueva.listarContactos();
      break;
    case 4:
      console.log("4- Buscar un contacto por su nombre ");
      break;
    case 5:
      const nombreParaBorrar = prompt("Ingrese el nombre para borrar");
      agendaNueva.borrarContacto(nombreParaBorrar)
      break;
    case 6:
      console.log("  6 Ver si la agenda está llena");
      agendaNueva.agendaLlena()
        ? document.write("La agenda esta llena")
        : document.write("La agenda tiene espacio disponible");
      break;
    case 7:
      console.log("7 Ver el espacio disponible para almacenar contactos ");
      break;
    case 8:
      console.log("cambiar tamaño de agenda");
      break;
    default:
      alert("Selecciono una opcion invalida");
  }

}
} while (confirm("¿Desea realizar otra operación?"));
