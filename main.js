alert("Bienvenido a la pagina oficial de el complejo Los Medanos")

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = prompt("ingrese su edad");
let mail = prompt("ingrese su email");
let telefono = prompt("ingrese su telefono");

const cliente1 = new Cliente(nombre, apellido, edad, mail, telefono);

alert(
    "Nombre: " + cliente1.nombre + "\n" +
    "Apellido: " + cliente1.apellido + "\n" +
    "Edad: " + cliente1.edad + "\n" +
    "Email: " + cliente1.mail + "\n" +
    "Telefono: " + cliente1.telefono + "\n"
);

let cambiarDato = prompt("¿Desea cambiar algun dato? si/no").toLocaleLowerCase();
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