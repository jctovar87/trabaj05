let hamburguesaS = 20
let hamburguesaD = 25
let hamburguesaT = 28
let tipoHamburguesa =""
let precioHamburguesa = 0
let escogeCantidad = 0
let escogeHamburguer = 0
let porcentaje  = 1.05
let total = 0

escogeHamburguer = +prompt(`Elija el tipo de Hamburguesa: \n
                            1 para Simple S/${hamburguesaS} \n
                            2 para Doble S/${hamburguesaD} \n
                            3 para Triple S/. ${hamburguesaT} ` )

if(escogeHamburguer === 1 || escogeHamburguer === 2 || escogeHamburguer === 3){

    if( escogeHamburguer === 1){
        precioHamburguesa = hamburguesaS
        tipoHamburguesa="SIMPLE"
    }else if (escogeHamburguer === 2){
        precioHamburguesa = hamburguesaD
        tipoHamburguesa="DOBLE"
    }else if( escogeHamburguer === 3){
        precioHamburguesa = hamburguesaT
        tipoHamburguesa="TRIPLE"
    }
    
console.log(precioHamburguesa)

escogeCantidad = +prompt("Indique cuantas Hamburguesas va a llevar")
total = escogeCantidad * precioHamburguesa * porcentaje
alert(`TOTAL : \n
        ${escogeCantidad} Hamburguesas del tipo ${tipoHamburguesa} \n
        S/. ${total.toFixed(2)} soles`)
    
} else{

    alert("Ingrese un tipo valido de HAMBURGUESA")     
    
}
