## Nombre del Proyecto: Validación Tarjeta de Crédito

* Descripción:
  Se trata de una sección en una página web de una tienda de ropa, donde la persona puede ver el resumen de 
  su compra, el precio total a pagar y el apartado donde deberá ingresar los datos de su tarjeta 
  de crédito como: número, fecha de vencimiento y cvv. Con esto, si es válida la tarjeta, podrá realizar 
  la compra de manera exitosa, si por el contrario, esto no sucede, debera ingresar datos de tarjeta válidos.

* Principales usuarios del producto: 
  Aplicación dirigida a empresas y personas que quieran validar tarjetas de crédito para pagar compras via web.

* Funcionalidad:
  La aplicación esta pensada para que se maneje de forma sencilla,para que puedan validar los datos de tarjeta de crédito de 
  clientes y pagar sus compras.

* Prototipos:
  En el siguiente enlace pueden observar los prototipos realizados durante el desarrollo del proyecto. Se pueden observar 
  los diferentes cambios de diseño para que tuviera mejor presentación y experiencia para 
  el usuario.
  https://docs.google.com/document/d/1k8yNnd4dDeJh229a3UpSUHebaRN_6HV_xrWmHhtRlvU/edit?usp=sharing
  
  
* Resultados del hito:
 
  Una interfaz que debe permitir al usuario:

  - Insertar un número de tarjeta que quiera validar. 
  - Ver si el resultado es válido, indicando compra exitosa, o no es válido, pidiendo ingresar un número de tarjeta válida.
    A través de investigación y análisis del algoritmo de Luhn (utilizado para poder validar un número de tarjeta de crédito), 
    se ejecutaron cada una de las funciones, operaciones y ciclos necesarios para hacer la validación. Función IsValid.
  - Alerta si se dejan campos sin información, como número de tarjeta y CVV.
  - Ocultar todos los dígitos del número de tarjeta a exepción de los últimos 4 caracteres. Función maskify.
  - Aplicar el objeto validator en IsValid y maskify para las pruebas unitarias de los métodos.
  - Código de proyecto en repositorio Github y la interfaz desplegada en GitHub Pages.
