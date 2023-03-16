let productos = [
    "Hidratante facial",
    "Tonico exfoliante",
    "Protector solar factor 50",
    "Protector solar toque seco factor 50",
    "Protector solar con color factor 50",
    "Gel de limpieza facial",
    "Tonico hidratante",
    "Sérum hidratante",
    "Exfoliante de azúcar cherry",
    "Pads de hidrogel para contorno de ojos",
    "Mascarilla facial",
    "Sérum facial con PHA",
    "Agua micellar",
    "Mascara de hidratación y reparación",
    "Protector solar en barra",
    "Crema contorno de ojos",
    "Bálsamo labial",
  ];
  
  function mostrarArreglo(array, titulo = 'No hay un titulo disponible') {
    document.write(`<h2>${titulo}</h2>`);
    document.write("<ul>");
    array.map(producto => document.write(`<li>${producto}</li>`));
    document.write("</ul>");
  }

  mostrarArreglo(productos,'Lista de productos de skincare');

  //filtrar el arreglo todos los protectores solares
  let arregloFiltrado = productos.filter((producto)=> producto.includes('Protector'));
  mostrarArreglo(arregloFiltrado,'Lista de protectores solares');

  //buscar un elemento dentro del arreglo find
  let productoBuscado = productos.find((producto)=> producto.includes('Sérum'));
  let nuevoProductoBuscado = productos.find((producto)=> producto.includes('Jabon'));
document.write(`<p>Buscamos un sérum: ${productoBuscado}</p>`)
document.write(`<p>Buscamos un jabon: ${nuevoProductoBuscado}</p>`)

