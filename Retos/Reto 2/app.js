// Crear un programa que te permita ingresar una catidad de años
// y el programa te definirá en que categoría se considera según la edad:

// Prenatal va en números negativos desde -0,0 a 0,9
// Bebés deben estar entre 0,0 y 1,00
// Niño pequeño entre 3 y 5
// Escuela primaria de 5 a 12
// Adolescentes de 12 a 18
// Adulto joven 18 a 21

let edad = 22;
let categoria = '';

if (edad >= -0.0 && edad <= 0.9) {
   categoria = 'Prenatal';
}else if (edad >= 0.0 && edad <= 1.0) {
    categoria= 'Bebé';
}else if (edad >= 3 && edad <= 5) {
    categoria = 'Niño pequeño';
}else if (edad >= 5 && edad <= 12) {
    categoria = 'Escuela primaria';
}else if (edad >= 18 && edad <= 18) {
    categoria = 'Adolescentes';
}else if (edad >=18 && edad <= 21) {
         categoria = ' Adulto joven';
} 
else if(edad > 21) {
    console.log('Inserte una edad menor a 21 años'); 
}


console.log('la edad es ' + edad +' años' +' y la categoria es: ' + categoria);