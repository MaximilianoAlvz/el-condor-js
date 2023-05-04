class Cliente {
    nombre;
    apellido;
    edad;
    mail;
    telefono;
    
    constructor (nombre,apellido,edad,mail,telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;
        this.telefono = telefono;
    }
}

class Reserva {
    entrada;
    salida;

    constructor (entrada, salida) {
        this.entrada = entrada;
        this.salida = salida;
    }
}