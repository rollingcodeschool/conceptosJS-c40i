// estructura switch
/*
switch(opcion){
    case 1:
        todo el codigo que ej si el usuario selecciono 1
        break;
    case '1':
        todo el codigo que ej si el usuario selecciono 1
        break;
    case 2:
        todo el codigo que ej si el usuario selecciono 2
        break;
    case 'lunes':
        todo el codigo que ej si el usuario selecciono lunes
        break;
    default:
        todas las lienas de codigo que ejecuto si no se cumplieron los case anteriores
}
*/

// el usuario debe seleccionar un dia (lunes, miercoles o viernes) y sugerir un menu que conste de (plato principal, bebida y postre)

let dia = prompt(
  "Seleccione un dia para sugerirle el menú especial: 1-Lunes, 2-Miercoles, 3- Viernes"
);

switch (dia) {
  case 'lunes':
  case "1":
    document.write(`<h2>Menú del lunes</h2>
        <ul>
            <li>Entrada: Provoleta</li>
            <li>Plato principal: Entraña</li>
            <li>Bebida: Vino</li>
            <li>Postre: Flan</li>
        </ul>
        `);
    break;
  case "2":
    document.write(`<h2>Menú del miercoles</h2>
        <ul>
            <li>Plato principal: Milanesa napolitana con papas</li>
            <li>Bebida: Coca-cola</li>
            <li>Postre: Helado</li>
        </ul>
        `);
    break;
  case "3":
    document.write(`<h2>Menú del viernes</h2>
        <ul>
            <li>Plato principal: Matambre al verdeo</li>
            <li>Bebida: Vino</li>
            <li>Postre: Volcan de chocolate</li>
        </ul>
        `);
    break;
    default:
        document.write('Ingreso una opcion erronea');
}
