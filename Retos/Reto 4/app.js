// Se necesita crear un programa que permita ingresar una lista de estudiantes
// de 1 a N con su nota final (0,0 a 5,0) al finalizar dicho ingreso el programa
// debe mostrar en pantalla:
// • Cuántos pasaron teniendo en cuenta que se pasar con una nota mayor a 3.8.
// • Cuantos quedaron para recuperación si la nota esta entre 2.5 a 3.8.
// • Cuantos perdieron si la nota está de 0,0 a 2,5.

var listadoEstudiantes = [];

var agregarNuevoEstudiante = true;
while (agregarNuevoEstudiante) {

  var nombreEstudiante = prompt("Ingrese el nombre del estudiante");
  var notaEstudiante = parseFloat(prompt('Ingrese la nota del estudiante"' + nombreEstudiante + '"'));

  var nuevoEstudiante = {
    nombre: nombreEstudiante,
    nota: notaEstudiante
  };

  listadoEstudiantes.push(nuevoEstudiante);
  agregarNuevoEstudiante = confirm("¿Desea agregar otro estudiante?");
}

function obtenerListadoEstudiantes(listadoEstudiantes) {

  var listaEstudiantes = "Estudiantes - Nota\n\n";

  listadoEstudiantes.forEach(e => {

    listaEstudiantes += `${e.nombre} \t ${e.nota} \n`
    
  });

  return listaEstudiantes;
}

function estadisticas(listadoEstudiantes) {

  var ganaron = 0;
  var perdieron = 0;
  var recuperan = 0;

  listadoEstudiantes.forEach(e => {

    if (e.nota >= 3.8)
      ganaron++;
    else if (e.nota > 2.5)
      recuperan++;
    else
      perdieron++;

  });

  return `Ganaron: ${ganaron}\nPerdieron: ${perdieron}\nRecuperación: ${recuperan}`;

}

alert(obtenerListadoEstudiantes(listadoEstudiantes) + "\n\n" + estadisticas(listadoEstudiantes)
);
