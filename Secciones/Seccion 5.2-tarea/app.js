
/*
crear una función que me permita determinar
la calificacion de 3 alumnos 
uno con nota de 100, otro con nota de 80 
y el último con nota de 59
*/
function calificacion(nota , alumno) {
    let notaLetra = '';

    if (nota >= 90 && nota <= 100) {
        notaLetra = 'A';
    }else if (nota >= 80 && nota <= 89) {
        notaLetra = 'B';
    }else if (nota >= 70 && nota <= 79) {
        notaLetra = 'C';
    }else if (nota >= 60 && nota <= 69) {
        notaLetra = 'D';
    }else if (nota < 60) {
        notaLetra = 'F';
    }else{
    
    }
    
    console.log('La nota del alumno: ' + alumno +' es igual a: ' + nota + ' Y equivale a la letra: ' + notaLetra); 
}
calificacion(100 , 1);
calificacion(80 , 2);
calificacion(59, 3);