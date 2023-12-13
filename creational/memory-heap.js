// El comportamiento de JavaScript es síncrono, es decir, solamente puede ejecutar una tarea a la vez.Esto puede ser beneficio o perjudicial dependiendo los casos.Por ende, para ejecutar cada tarea, JavaScript se organiza en dos estructuras de datos: el Memory Heap y el Call Stack.

// Qué es Memory Heap
// El memory heap consiste en una manera desorganizada o aleatoria de guardar la información, ya sea valores, funciones, entre otros. ¿Recuerdas el componente de tu computador que guarda información de manera aleatoria ? Exactamente, la RAM es donde guardará esta información mediante una referencia o dirección.

// Memoria y cómo se guardan los datos.
// Por ejemplo, declaras una variable nombre y le asignas un valor, esta se guardará en la memoria RAM utilizando una referencia que manejará el memory heap.De esta manera, el Engine sabrá que variable mostrar cuando sea utilizada después de la declaración, pidiendo la referencia de memoria al memory heap y buscándola en la memoria RAM.

// Representación del memory heap para almacenar datos
// Valores por referencia
// ¿Qué pasa con estructuras más complejas, como arrays u objetos ? Pues que estas se guardarán en una dirección de memoria diferente a sus valores, pero referenciadas entre sí.Por ejemplo, mira el siguiente código y piensa cuál es el resultado:

const objeto1 = { valor: 1 }
const objeto2 = objeto1
objeto2.valor = 2

console.log(objeto1.valor)
console.log(objeto1 === objeto2)


// Primero mostrará el valor 2 y después true.La explicación es que la referencia de ambos objetos a sus valores es la misma, por lo que si modificas un valor, también lo harás en ambos.

// Parámetros de referencia para dos objetos
