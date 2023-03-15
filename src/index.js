import validator from './validator.js';

console.log(validator);



//definir variable numero
let numero = "";
//definir variable numerocvv
let numerocvv= "";

//Agrego evento listener al elemento con Id Pagar
document.getElementById("pagar").addEventListener("click", function () {
  //asignar a la variable numero el valor ingresado en el elemento con id numerotarjeta
  numero = document.getElementById("numerotarjeta").value;
  
  //asignar a la variable numero cvv el valor ingresado en el elemento conn id cvv
  
  numerocvv = document.getElementById("cvv").value; 
  // alerta condicionante si se deja un campo vacio de numero de tarjeta y cvv

  if (numero === "" || numerocvv=== "" ){
    window.alert("Debes igresar el número de tarjeta y CVV de tu tarjeta")
  } else {
       
    //invocar el metodo isValid del objeto validator
    if (validator.isValid(numero) === true) {
      window.alert("Tu compra con el número de tarjeta  "+ validator.maskify(numero) + "  fué exitosa");
    } else {
      // se invoca el metodo maskify del objeto validator
      window.alert("El número de tarjeta  "+ validator.maskify(numero) + "  es inválido");
    }
  }
});

