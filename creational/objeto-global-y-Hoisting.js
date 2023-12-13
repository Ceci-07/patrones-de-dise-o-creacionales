// Si abres la consola del navegador, con la combinación de teclas Ctrl + Shift + I o clic derecho e “Inspeccionar” en tu navegador preferido(de preferencia Google Chrome).

// Ejecuta la palabra window, se desplegará un objeto en el que se encuentran todas las funcionalidades de JavaScript, por ejemplo ejecuta window.console.log("Hola") tendrá el mismo comportamiento que console.log("Hola").

// Si ejecutas this observarás que muestra el mismo objeto que window, esto es porque en un contexto global, estos dos objetos son iguales.Pero en otros contextos, como el de una función o una clase, this cambia.

// Qué es hoisting
// Hoisting es un término para describir que las declaraciones de variables y funciones son movidas a la parte superior del scope más cercano: scope global o de función.Esto sucede solamente con las declaraciones y no con las asignaciones.

// El código permanece igual, solo es una interpretación del motor de JavaScript que intenta ayudar a optimizar el código, pero en este caso provoca errores y resultados no esperados.En el caso de las variables solo sucede cuando son declaradas con var.

//   Hoisting en variables declaradas con var
//     En el siguiente código, la respuesta del console.log es undefined, porque al hacer referencia a una variable que no está declarada, el motor de JavaScript crea esta variable antes de la declaración y le asigna un valor de undefined.

//     console.log(nombre) // undefined

var nombre = "Andres"
var nombre = undefined
console.log(nombre)
nombre = "Andres"


// Lo adecuado es evitar utilizar var para declarar las variables con let o const, ya que estas últimas el proceso de optimización que realiza el motor de JavaScript no generará variables con el valor de undefined antes de su declaración.
