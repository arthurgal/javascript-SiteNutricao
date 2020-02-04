var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutri";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");


var pesoEhValido = true;
var alturaEhValido = true;

if(peso <= 0 || peso >= 500){
    pesoEhValido = false;
}

if(altura <= 0 || altura >= 3.00){
    alturaEhValido = false;
}

if(pesoEhValido && alturaEhValido){
    var imc = peso / (altura*altura);
    tdImc.textContent = imc;
}else{
    tdImc.textContent = "Altura e/ou Peso invalido";
}