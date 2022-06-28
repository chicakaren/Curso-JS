
class Carro{
    constructor(marca, tipo, puertas){
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.CreadoEn = 'hoy';
        this.encendido = false;
        this.gasolina = 100;
    }


  encenderCarro() {
        if (this.encendido ) {
            console.log('El carro estaba encendido');
        } else {
            this.encendido = true; 
            console.log('el carro esta encendido');
        }
    return this;
  }

  realizarViaje(consumo){
    /*
    optimizacíon del  codigo
    if (!this.encendido) return console.log('El carro esta apagado');
    if (consumo > this.gasolina) return console.log('No puede realizar el viaje');
    */
   
    if (this.encendido) { 
        if(this.gasolina <= consumo){
          console.log('no queda gasolina, restante: ' + this.gasolina);
        }else{
          this.gasolina = this.gasolina - consumo;
        return 'Su gasolina restante es: ' + this.gasolina;
        }
  
      }else{ 
        console.log('El carro esta apagado');
      }
  
  }
    

} // finalización de la clase

let carro = new Carro('Mazda', 'Sedan', 2);


console.log(carro);