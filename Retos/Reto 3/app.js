// 3. Se necesita hacer un programa que nos calcule el IVA de un producto 
// teniendo en cuenta que vamos a manejar 3 países
// Colombia  19%, Argentina 20% y Chile 9 %.

let pais = 'Colombia';
let iva = 0;
let valor = 12000;

if (pais === 'Colombia' ) { // Comillas para string
    
    iva = (valor / 100) * 19;
    var total = valor +iva ;
    console.log('El iva que se cobrará en Colombia es de: ' + iva + 
                '  basado en el valor suministrado  ' + valor + ' danto por total: ' + total);
    
} else if ( pais === 2){
    iva = (valor / 100 ) * 20;
    var total = valor + iva
    console.log('El iva que se  cobrará en Argentina es de: ' + iva + 
                '  basado en el valor dado de ' + valor + ' dando por total:' + total );
} else if (pais === 3){
    iva = (valor / 100 ) * 9;
    var total = valor + iva;
    console.log('El iva que se cobrará en Chile es de: ' + iva + 
                ' basado en el al valor dado de: ' + valor + ' dando por total: ' + total);
}else{
  console.log('Ingrese un numero valido')
}