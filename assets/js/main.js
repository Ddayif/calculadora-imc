	function Convertir(){

		var pesoUsuario= document.getElementById("peso").value;
		var estaturaUsuario= document.getElementById("estatura").value;

		var calculadora = (pesoUsuario/(estaturaUsuario*estaturaUsuario));
		calculadora = calculadora.toFixed(2);

		alert("Su indice de masa corporal es de: " + calculadora);
	}