let cantidadLitros = 0
let cantidadGalones = 0
let precioGalon = 0
let precioTotal = 0
let variable = 3.785

cantidadLitros = +prompt("Ingrese la cantidad de litros producidos")
precioGalon =+prompt("Ingrese el precio por Galones")
cantidadGalones = cantidadLitros / variable
precioTotal= cantidadGalones * precioGalon

alert(`En total recibira S/. ${precioTotal.toFixed(2)} por ${cantidadGalones.toFixed(2)} galones de leche`)