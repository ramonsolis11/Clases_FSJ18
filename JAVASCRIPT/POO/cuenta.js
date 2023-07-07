/**
 * Clase CuentaBancaria
 * 
 * Pilares de POO: Abstracción, Encapsulamiento, Public, Herencia, Polimorfismo
 */
class Cuenta {
    // Atributos de la clase
    tipo_cuenta;
    tipo_moneda;
    nombre;
    numero_cuenta;
    #saldo;
    #pin;
    
        // Método constructor
        constructor(nombre, tipoCuenta, tipoMoneda, numeroCuenta) {
        this.nombre = nombre;
        this.tipo_cuenta = tipoCuenta;
        this.tipo_moneda = tipoMoneda;
        this.numero_cuenta = numeroCuenta;
        }
    
        // Setter y Getter para el atributo saldo
        set capturarSaldo(cantidad) {
            this.#saldo = cantidad;
        }
    
        get imprimirSaldo() {
            return "<strong>Abriste tu cuenta con $" + this.#saldo + "</strong>";
        }
    
        // Setter y Getter para el atributo pin
        set capturarPin(pin) {
            this.#pin = pin;
        }
    
        get imprimirPin() {
            return "Tu PIN es" + this.#pin;
        }
    
        // Método para validar el depósito
        depositar(cantidad) {
        if (cantidad >= 1 && cantidad <= 3000) {
            this.#saldo += cantidad;
            return "<strong>Depositaste $" + cantidad + "</strong>, tu saldo actual es de $" + this.#saldo;
        } else {
            //El método depositar valida que el depósito sea mayor o igual a $1.00 y menor o igual a $3,000. Si la cantidad es válida, se suma al saldo actual de la cuenta. En caso contrario, se muestra un mensaje de error.
            return "Por favor deposita entre $1.00 y $3,000";
        }
        }
    
        //Hacer el metodo Retirar
        //Retirar $10 en adelante y condicionar que el retiro sea menor al saldo
        // Método para validar el retiro
        retirar(cantidad) {
        if (cantidad >= 10 && cantidad <= this.#saldo) {
            this.#saldo -= cantidad;
            return "<strong>Retiraste $" + cantidad + "</strong>, tu saldo actual es de $" + this.#saldo;
        } else {
            //El método retirar valida que el retiro sea mayor o igual a $10 y menor o igual al saldo disponible. Si la cantidad es válida, se resta del saldo actual de la cuenta. Si no se cumplen las condiciones, se muestra un mensaje de error.
            return "No se puede realizar el retiro. Asegúrate de tener suficiente saldo y que el retiro sea de al menos $10.";
        }
        }
    
        // Método para retornar toda la información de la cuenta
        resume() {
        return "<b>Nombre del Propietario:</b> " + this.nombre +
            "<br><b>Numero de Cuenta:</b> " + this.numero_cuenta +
            "<br><b>Tipo de Cuenta:</b> " + this.tipo_cuenta +
            "<br><b>Tipo de Moneda:</b> " + this.tipo_moneda;
        }
    }
    
    // Instancia de la clase Cuenta
    let cuenta1 = new Cuenta("Ramon Nuñez", "Cuenta de Ahorro", "Local", "123456789");
    
    // Mostrar el resumen de la cuenta
    document.write(cuenta1.resume());
    document.write("<br>");
    
    // Establecer el saldo
    cuenta1.capturarSaldo = 50;
    
    // Mostrar el saldo
    document.write(cuenta1.imprimirSaldo);
    document.write("<br>");
    
    // Realizar un depósito
    document.write(cuenta1.depositar(230.50));
    document.write("<br>");
    
    // Realizar un retiro
    document.write(cuenta1.retirar(10));
    document.write("<br>");

