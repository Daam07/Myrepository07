// Pedir al usuario que ingrese su peso y altura
let peso = parseFloat(prompt("Ingresa tu peso"));
let altura = parseFloat(prompt("Ingresa tu altura"));

// Calcular IMC
let imc=peso/(altura*altura);

// Mensaje 
if (imc < 18.5) {
    document.write("Tu IMCes " +imc.toFixed(3)+ ".Estás bajo de peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
    document.write("Tu IMC es " +imc.toFixed(3)+ ".Estás en un rango saludable.");
} else {
    document.write("Tu IMC es " +imc.toFixed(3)+ ".Tienes sobrepeso.");
}