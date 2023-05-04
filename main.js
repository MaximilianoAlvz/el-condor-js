alert("Bienvenido a la pagina oficial de el complejo Los Medanos")

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = prompt("ingrese su edad");
let mail = prompt("ingrese su email");
let telefono = prompt("ingrese su telefono");

const clientes = [];

const cliente1 = new Cliente(nombre, apellido, edad, mail, telefono);
clientes.push(cliente1);

alert(
    "Nombre: " + cliente1.nombre + "\n" +
    "Apellido: " + cliente1.apellido + "\n" +
    "Edad: " + cliente1.edad + "\n" +
    "Email: " + cliente1.mail + "\n" +
    "Telefono: " + cliente1.telefono + "\n"
);

let cambiarDato = prompt("¿Desea cambiar algun dato? si/no").toLocaleLowerCase();



if (cambiarDato == "si") {
    do {
        cambiarDatos();
        alert("Los nuevos datos son:" + "\n" +
            "Nombre: " + cliente1.nombre + "\n" +
            "Apellido: " + cliente1.apellido + "\n" +
            "Edad: " + cliente1.edad + "\n" +
            "Email: " + cliente1.mail + "\n" +
            "Telefono: " + cliente1.telefono + "\n"
        );

        cambiarDato2 = prompt("¿Desea cambiar algun dato? si/no").toLocaleLowerCase();
    } while (cambiarDato2 != "no");
}

alert ("Hola " + cliente1.nombre + " reserva ahora tus vacaciones!");
agendarFecha();
console.log(reserva);