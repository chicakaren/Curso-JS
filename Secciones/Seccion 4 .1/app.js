// crear un algoritmo, que basado en la nota 
// imprima si el alumno aprueba la materia
// aprueba 60
// si el alumno tiene nota menor a 50
// imprimir un mensaje que diga:
// Por favor estudie mas

let nota = 45;

if (nota >= 60){
  console.log('El estudiante aprobo la materia')
  console.log('Con una nota  de:' +  ' '  + nota);
}
else
{
 if (nota <=50 ) 
 {
  console.log('El estudiante NO aprobo la materia, su nota es de:' +  ' ' + nota)
  console.log('Por favor estudie más ');
 }


else
{
  console.log('El alumno NO aprueba la materia' );
}
}



console.log('Fin del programa');