let precio1 = 200
let precio2 = 150
let precio3 = 100
let precio4 = 50
let numeroCita= 0
let diasTotal = 0
let costoDia = 0
let costo = 0

numeroCita = +prompt("Ingrese el numero de cita, 1 si es primera cita")
diasTotal = +prompt("Ingrese los dias del tratamiento Total")

if(numeroCita >= 1 && numeroCita <= 3){
    costoDia = precio1

}else if(numeroCita >= 4 && numeroCita <= 5){
    costoDia = precio2

}else if(numeroCita >= 6 && numeroCita <= 8){
    costoDia = precio3

}else if(numeroCita >= 9){
    costoDia = precio4

}else {
    console.log("Ingrese un dia correcto")
}

if (diasTotal <= 3){
    costo = diasTotal * precio1
}else if(diasTotal <= 5){
    costo = (precio1 * 3) + (precio2 * (diasTotal - 3))
}else if(diasTotal <= 8){
    costo = (precio1 * 3) + (precio2 * 2) + (precio3 * (diasTotal - 5))
}else if(diasTotal >= 9){
    costo = (precio1 * 3) + (precio2 * 2) + (precio3 * 3) + (precio4 * (diasTotal - 8))
}

alert(`1 El precio de la cita es: ${costoDia} \n 
        El costo total del tratamiento es: ${costo} \n
        Los dias del tratamiento son: ${diasTotal}`)
