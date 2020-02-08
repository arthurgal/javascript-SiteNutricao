
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var tdAltura = pacientes[i].querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");


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
        tdImc.textContent = imc.toFixed(2);
    }else{
        tdImc.textContent = "Altura e/ou Peso invalido";
        pacientes[i].classList.add("paciente-invalido");
    }

}

