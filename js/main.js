function calculadorimc(){
	var calculadora = document.getElementById("calculadora");
	var peso = document.getElementById("peso").value;
	var altura = document.getElementById("altura").value;
	
	if( peso != "" && altura != "" ){
		altura = parseInt(altura) / 100;
		var imc = peso / (altura * altura);
		calculadora.innerHTML += "<p>con tu estatura de:" + altura + " cm." + "<br>" + "Y tu peso de: "+ peso + " kgs" + "<br>" + "tu índice de masa corporal es " + imc.toFixed(2) + "." "</p>";
	}
	
	peso = "";
	altura = "";
};

calculadora();