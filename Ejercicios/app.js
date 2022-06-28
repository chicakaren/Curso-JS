/* 1.Convertir de libras a kilogramos*/

let libras = 127;
let kg = 0 ;

kg = libras / 2.2046;

console.log( 'conversión de libras: ' + libras + ' a kilogramos redondeado: ' + Math.round(kg));


/* 2.Convertir de kilometros a millas */

let klm = 20;
let millas = 0 ;

 millas = klm * 0.62;

 console.log('La comversion de kilometros a millas es: ' + millas);
 

/* 3.Calcular el área de un triangulo rectángulo */

let base = 10;
let altura = 5 ;
let area = base * (altura / 2);

 console.log('el área de un triangulo rectángulo es: ' + area);


/* 4.Arreglo con ciclo for*/

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
let numeroMayor = 0;
 
for (let i = 0; i < numeros.length; i++) {

    if (numeros [i] >= numeroMayor) {
       numeroMayor = numeros[i];
        
    }
    
    
}
 
console.log('el numero mayor es: ' + numeroMayor);


/* 5.Arreglo con impresion de consola:
número es un número impar
número es un número par	
Debe de utilizar un ciclo FOR para generar dicha impresión */

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
 
for (let i = 0; i < numeros.length; i++) {

    let num = numeros[i];
    par = num % 2;
    
    if (par == 0) {
        console.log(num + ', es numero es par');
    }else{
        console.log(num + ',es numero es impar');
    } 
    
}
 


/* 6.Imprimir una tabla */
for (let i = 1; i <= 5; i++) {

    let reglon ='';

    for (let j = 1; j <= 5; j++) {
        reglon += `${ j * i }    `;
    }
    console.log(reglon)
}



/* 7.Crear una función que reciba 3 argumentos numérico*/
 
function max(a,b,c) {
   let mayor = 0;
    if (a >= b && a >= c)

    return mayor =a;
else if (b >= a && b>= c)
    return mayor = b;

else
    return mayor = c;
}

   let  mayor = max(5,2,6);
 console.log('El numero mayor es: ' + mayor);


/* 8.Crear una función para determinar el nombre más largo*/
 
function nombreLargo(arreglo) {
let largo = '';

for (let i = 0; i < arreglo.length; i++) {
      let nombre  = arreglo[i];
    if (nombre.length > largo.length) {
         
        largo = nombre;
     }
    
}
    return largo;
    
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let heroeLargo = nombreLargo( heroes );
console.log( heroeLargo );


/* 9.Crear una función  para filtrar nombres*/
 
function filtrarPorLetra(arreglo, letra) {
    let nuevoArreglo = [];

    for (let i = 0; i < arreglo.length; i++) {
        let nombre = arreglo[i];
        if (nombre[0] === letra) {
            nuevoArreglo.push(nombre);
        } 
    }
    return nuevoArreglo;
}

let heroes = ['Doom', 'Dr.Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarPorLetra(heroes,'S');
console.log(heroesCon);




