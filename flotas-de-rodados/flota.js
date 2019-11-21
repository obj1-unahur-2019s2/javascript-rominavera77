class ChevroletCorsa {
  	constructor() {
          this._color
	  } 
	color(){return this._color}  
  	setColor(nuevoColor){
          this._color = nuevoColor
      }
  	capacidad() { return 4 }
  	velocidadMaxima() {return  150 } 
  	peso() { return 1300 }
}

class RenaultKwid {
  	constructor(){
          this._tieneTanqueAdicional = true
      }
	
	setTanqueAdicional(estado){  this._tieneTanqueAdicional = estado }
    capacidad() {
    	if (_tieneTanqueAdicional) {return 3} 
    	else {return 4}  
  	}
  	velocidadMaxima(){
  		if (_tieneTanqueAdicional) {return 120}
  		else {return 110}
  	}
  	peso(){ 
  		if (_tieneTanqueAdicional) { return 1200 + 150}
  		else { return 1200}
  	}
  	color() { return azul }
}

class AutoEspecial {
	constructor(col){
		this._color = col
		this._peso 
		this._capacidad
		this._velocidadMaxima
	}
	color(){return this._color}  
  	setColor(nuevoColor){
          this._color = nuevoColor
	}
	peso(){return this._peso}
	setPeso(nuevoPeso){ this._peso = nuevoPeso}
	capacidad(){return this._capacidad}
	setCapacidad(nuevaCapacidad){ this._capacidad = nuevaCapacidad}
	velocidadMaxima(){return this-_velocidadMaxima}
	setVelocidadMaxima(nuevaCapacidad){ this._capacidad = nuevaCapacidad }
}


// sería como el depósito, maneja una colección de rodados
class Dependencia {
	constructor(){
		this._empleados 
		this._flotaDeRodados = []
		this._pedidosDeTraslado = []
	}
	empleados(){ return this._empleados}
	setEmpleados(numero) { this._empleados + numero}
	agregarAFlota(rodado){ this._flotaDeRodados.push(rodado)}
	pesoTotalFlota() { 
		var pesoTotal = 0
		var pesoTotalFlota = this._flotaDeRodados.forEach(rodado => pesoTotal = rodado.peso())
		return pesoTotal
	}
	estaBienEquipada() {
		return flotaDeRodados.length >= 3 
		&& this._flotaDeRodados.every({rodado => rodado.velocidadMaxima() >= 100})
	}
	capacidadTotalEnColor(color){ 
		var flotaColor = flotaDeRodados.filter({rodado => rodado.color() == color})
		return flotaColor.sum({ rodado => rodado.capacidad()})
	}
	colorDelRodadoMasRapido(){ 
		return flotaDeRodados.max({rodado => rodado.velocidadMaxima()}).color()
	}
	method capacidadFaltante(){
		return 	(empleados - flotaDeRodados.sum({rodado => rodado.capacidad()}))
	}
	method esGrande(){
		return flotaDeRodados.size() >= 5 and empleados >= 40
	}
	method agregarPedido(pedido) {return  pedidosDeTraslado.add(pedido)}
	method quitarPedido(pedido) { return pedidosDeTraslado.remove(pedido)}
	method totalPasajerosEnPedidos() {
		return pedidosDeTraslado.sum({p => p.cantidadDePasajeros()})
	}
	method PedidosQueNoPuedeSatisfacer() { 
		return pedidosDeTraslado.filter({pedido => not pedido.puedeSatisfacerPedido()})
	}
	method pedidoTieneColorIncompatible(color) {
		return pedidosDeTraslado.all({pedido => pedido.coloresIncompatibles()})
	}
	method relajar(){
		return pedidosDeTraslado.map({pedido => pedido.tiempoMaximo() + 1})
	}
}

