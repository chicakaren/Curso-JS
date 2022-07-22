// Se necesita crear un programa que permita ingresar los productos 
// de 1 a N de un mercado con su valor y cantidad dónde:
// • Se debe mostrar el total del mercado calculando cantidad y valor, 
// teniendo en cuenta un IVA del 19%
// • Se debe mostrar el total bruto y neto, al igual que el valor del IVA
// • Se debe mostrar el producto más caro y el más barato.
// • Se debe crear una funcionalidad que permita listar todos los productos 
// ordenados de mayor a menor precio que fueron incluidos en el mercado

var IVA = 0.19;


function ordenarProductos(productos) {
    
    for (var i = 0; i < productos.length; i++) {
        for (var j = 0; j < productos.length - 1; j++) {
            if (productos[j].valor < productos[j + 1].valor) {
                console.log(productos[j].nombre, productos[j + 1].nombre);
                var aux = productos[j];
                productos[j] = productos[j + 1];
                productos[j + 1] = aux;
            }
        }
    }
}
function obtenerListadoDeProductos(productos) {
    var listadoProductos = 'Productos -  Valor  -  Cantidad -  Subtotal\n\n';
    productos.forEach(function (p) { return listadoProductos += p.nombre + " \t $ " + p.valor + " \t " + p.cantidad + " \t $ " + p.valor * p.cantidad + "\n"; });
    return listadoProductos;
}
function obtenerTotales(productos) {
    var totalBruto = 0;
    productos.forEach(function (p) { return totalBruto += (p.valor * p.cantidad); });
    var valorIva = totalBruto * IVA;
    var totalNeto = totalBruto + valorIva;
    var totales = 'Totales: \n';
    totales += "Subtotal: $ " + totalBruto + "\n";
    totales += "Iva (" + IVA + "%): $ " + valorIva + "\n";
    totales += "Total: $ " + totalNeto;
    return totales;
}
function obtenerEstadisticas(productos) {
    var ultimo = productos.length - 1;
    var estadisticas = 'Estadisticas: \n';
    estadisticas += "Producto mas costoso: " + productos[0].nombre + ": $ " + productos[0].valor + "\n";
    estadisticas += "Producto mas economico: " + productos[ultimo].nombre + ": $ " + productos[ultimo].valor;
    return estadisticas;
}

var productos = [];

// Agregar los prodcutos que deseamos.
var agregarNuevoProducto = true;
while (agregarNuevoProducto) {
    // Obtendremos informacion del nuevo producto.
    var nombreProducto = prompt('Ingrese el nombre del producto'); 
    var valorProducto = prompt("Ingrese el valor del producto \"" + nombreProducto + "\"");
    var cantidadProducto = prompt("Ingrese la cantidad a llevar del prodcuto \"" + nombreProducto + "\"");
    // crear un nuevo producto.
    var nuevoProducto = {
        'nombre': nombreProducto,
        'valor': parseInt(valorProducto),
        'cantidad': parseFloat(cantidadProducto)
    };
     // Agregara un nuevo producto a la lista.
    productos.push(nuevoProducto);
    // Se le pregunta si se desea seguir agregando productos.
    agregarNuevoProducto = confirm('¿Desea agregar otro producto?');
}
// Ordenar el listado de productos y mostrar resultados.
ordenarProductos(productos);
alert(obtenerListadoDeProductos(productos) + " \n\n " + obtenerTotales(productos) + " \n\n " + obtenerEstadisticas(productos));

