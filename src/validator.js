//aqui solo se debe definir el objeto validator y sus metodos isvalid y maskify

const validator = {
  //definir metodo isValid
  isValid(numeroTarjeta) {
    //imprimir numero tarjeta
    console.log(numeroTarjeta);

    //asignar valor numero tarjeta y transformarlo en Array
    const tarjetaArray = numeroTarjeta.split("");

    //revertir Array
    tarjetaArray.reverse();

    //imprimir numero tarjeta reversa
    console.log(tarjetaArray);

    // definir variable para guardar la suma de los elementos
    let sumaTotal = 0;

    //recorrer el arreglo
    for (let index = 0; index < tarjetaArray.length; index++) {
      //identificar index impar
      if (index % 2 !== 0) {
        //imprimir valor de index impar
        console.log("index " + index + " es impar");

        //impriir valor inicial del elemento del index impar
        console.log("valor inicial " + tarjetaArray[index]);

        //multiplicar el valor del elemento index en el arreglo por 2
        tarjetaArray[index] = tarjetaArray[index] * 2;

        //imprimir valor duplicado del elemento del index impar
        console.log("valor duplicado " + tarjetaArray[index]);

        //validar si el numero es mayor o igual a 10
        if (tarjetaArray[index] >= 10) {
          //separar los digitos en un nuevo arreglo, quedan como String
          const mayorAdiez = String(tarjetaArray[index]).split("");

          //transformar los digitos de String a enteros, sumarlos y asignar el nuevo valor al elemento index del array
          tarjetaArray[index] =
            parseInt(mayorAdiez[0]) + parseInt(mayorAdiez[1]);

          //imprimir el valor de la suma
          console.log("suma de los digitos " + tarjetaArray[index]);
        }
      }
      // suma del elemento index a sumaTotal transformado a entero
      sumaTotal = sumaTotal + parseInt(tarjetaArray[index]);
    }
    //imprimir valor de sumaTotal
    console.log(sumaTotal);

    //definir variable resultado de la validacion de latarjeta
    let resultado;

    //se valida si el numero es divisible en 10
    if (sumaTotal % 10 === 0) {
      //si el numero es divisible por 10, tarjeta valida
      console.log("Tarjeta válida");
      resultado = true;
    } else {
      //numero no divisible por 10, tarjeta invalida
      console.log("Tarjeta inválida");
      resultado = false;
    }
    //retornar resultado
    return resultado;
  },

  //definir metodo maskify
  maskify(numeroTarjeta) {
    
    // se define la variable tarjetaArray como un array
    const tarjetaArray = numeroTarjeta.split("");

    // se condiciona, si el length del array es mayor de 4 dígitos, se sustituyen los números por # exceptuando los últimos 4 números
    if (tarjetaArray.length > 4){
      for (let index = 0; index < tarjetaArray.length-4; index++) {        
        tarjetaArray[index]="#"
        console.log(tarjetaArray);
      }

      
    
    // si es el lenght es menor a 4 no se sustituyen
    } else {
      console.log(tarjetaArray);
    }
    // se presentan los numeros de array a string, definiendo una variable numerooculto y utilizando el .Join 
    const numerooculto= tarjetaArray.join("");
    return numerooculto;
  }  




 

};


export default validator;
