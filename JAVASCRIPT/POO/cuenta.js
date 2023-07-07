/**
 * 
 * Clase CuentaBancaria
 * 
 * pilares de POO
 * 
 * Abstraccion: Extraemos lo mas revelante para trabajar con la clase
 * Encapsulamiento: Encapsula, cierra el nivel de acceso de los atributos
 * Public: Tenemos acceso dentro de la clase
 * Herencia: 
 * Polimorfismo
 */
class Cuenta{
    // asignacion de atributos
    tipo_cuenta
    tipo_moneda
    nombre
    numero_cuenta
    #saldo
    #pin

    //Metodo constructor => Inicializamos los atributos del objeto
    constructor(nombre, tipoCuenta, tipoMoneda, numeroCuenta){
        this.nombre = nombre;
        this.tipo_cuenta = tipoCuenta;
        this.tipo_moneda = tipoMoneda;
        this.numero_cuenta = numeroCuenta;
    }




    //creando metodo set y get para el atributo saldo
    set capturarSaldo(cantidad){
        // El this hace referencia a los atributos y metodos
        this.#saldo = cantidad;
    }

    //Imprimimos el atributo privado
    get imprimirSaldo(){
        return "Abriste tu cuenta con $" + this.#saldo;
    }

    //creando metodo set y get para el atributo PIN
    set capturarPin(pin){
        this.#pin = pin;
    }

    get imprimirPin(){
        return "Tu PIN es" + this.#pin;
    }

// Método para validar depósito
depositar(cantidad) {
    // Depositar de 1.00 en adelante, máximo son 3000
    if (cantidad >= 1 && cantidad <= 3000) {
    this.#saldo += cantidad;
    return "Depositaste <strong>$" + cantidad + "</strong>, tu saldo actual es de <strong>$" + this.#saldo + "</strong>";
    } else {
    return "Por favor deposita entre $1.00 y $3,000";
    }
}

//Tarea para miercoles: 
//Hacer el metodo Retirar
//Retirar $10 en adelante y condicionar que el retiro sea menor al saldo



    // Método para retornar toda la información de la cuenta
resume() {
    return "<b>Nombre del Propietario:</b> " + "<strong>" + this.nombre + "</strong>" +
    "<br><b>Numero de Cuenta:</b> " + this.numero_cuenta +
    "<br><b>Tipo de Cuenta:</b> " + this.tipo_cuenta +
    "<br><b>Tipo de Moneda:</b> " + this.tipo_moneda;
    }
}

//Instancia: Es el llamado de la clase
let cuenta1 = new Cuenta("Ramon Nuñez", "Cuenta de Ahorro", "Local", "123456789");

document.write(cuenta1.resume());
document.write("<br>")
//Llamando al metodo SET
cuenta1.capturarSaldo = 50;
//Imprimiendo en HTML el metodo GET de saldo
document.write(cuenta1.imprimirSaldo);
document.write("<br>")
document.write(cuenta1.depositar(230.50));