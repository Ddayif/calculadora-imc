	var pregunta1 = prompt("Cual es tu peso");
	var pregunta2= prompt("Cual es tu estatura");
	var peso= pregunta1;
	var estatura= pregunta2;

	function mostrar(){
		var calculadora = (peso/(estatura*estatura));
		calculadora = calculadora.toFixed(2);
		
		calculo.innerHTML = "Tu peso es: " + calculadora;
	}

	mostrar();
	
