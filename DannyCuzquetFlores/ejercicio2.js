// Pedir al usuario que ingrese su ingreso
var ingreso = parseFloat(prompt("Ingresa tu ingreso por favor:"));

// Impuesto sobre la renta
var isr;

if (ingreso <= 10000) {
    isr = 0;
    
} else if (ingreso <= 30000) {
    isr = ingreso * 0.1;
   
} else {
    isr = ingreso * 0.2;
    
}
// Mostrar el isr calculado
document.write("Tu impuesto sobre la renta es: $" +isr.toFixed(2))

