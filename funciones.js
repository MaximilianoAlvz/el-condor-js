/// Funcion Para cambiar datos del cliente

let datoAcambiar;
let contDato;
let cambiarDato2;

const cambiarDatos = () => {

    do {
        datoAcambiar = Number(prompt("¿que dato desea cambiar?" + "\n" +
            "1- Nombre" + "\n" +
            "2- Apellido" + "\n" +
            "3- Edad" + "\n" +
            "4- Email" + "\n" +
            "5- Telefono" + "\n"));

        switch (datoAcambiar) {
            case 1:
                cliente1.nombre = prompt("Indique el nuevo nombre")
                contDato = prompt("¿desea cambiar algun otro dato? si/no").toLocaleLowerCase()
                break;
            case 2:
                cliente1.apellido = prompt("Indique el nuevo apellido")
                contDato = prompt("¿desea cambiar algun otro dato? si/no").toLocaleLowerCase()
                break;
            case 3:
                cliente1.edad = prompt("Indique la nueva edad")
                contDato = prompt("¿desea cambiar algun otro dato? si/no").toLocaleLowerCase()
                break;
            case 4:
                cliente1.mail = prompt("Indique el nuevo email")
                contDato = prompt("¿desea cambiar algun otro dato? si/no").toLocaleLowerCase()
                break;
            case 5:
                cliente1.telefono = prompt("Indique el nuevo telefono")
                contDato = prompt("¿desea cambiar algun otro dato? si/no").toLocaleLowerCase()
                break;
        }
    } while (contDato != "no");

}

/// Funcion para reservar una fecha

const reserva = [];
let entrada;
let añoEntrada;
let mesEntrada;
let diaEntrada;

let salida;
let añoSalida;
let mesSalida;
let diaSalida;
const precioDia = 3000;
const miliSegundosDia = 86400000;
let diferenciaReserva;
let diasReserva;
let totalReserva;


const agendarFecha = () => {

    añoEntrada = Number (prompt ("Ingrese para que año desea reservar"));
    mesEntrada = Number (prompt ("Ingrese para que mes desea reservar (en formato numerico)")) - 1;
    diaEntrada = Number (prompt ("Ingrese para que dia desea reservar"));

    entrada = new Date (añoEntrada, mesEntrada, diaEntrada);

    añoSalida = Number (prompt ("Ingrese para que año desea retirarse"));
    mesSalida = Number (prompt ("Ingrese en que mes desea retirarse (en formato numerico)")) - 1;
    diaSalida= Number (prompt ("Ingrese en que dia desea retirarse"));

    salida = new Date (añoSalida, mesSalida, diaSalida);

    alert ("Usted desea entrar el " + entrada + " y desea irse el " + salida);

    diferenciaReserva = salida - entrada;
    diasReserva = diferenciaReserva / miliSegundosDia;
    totalReserva = diasReserva * precioDia;

    alert ("Usted se quedara durante " + diasReserva + " dias" + " por un total de $" + totalReserva);

    const reserva1 = new Reserva (entrada,salida);
    reserva.push(reserva1);
}
