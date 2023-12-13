// Garbage Collection es un proceso automático realizado por el motor de JavaScript que consiste en eliminar aquellos objetos que no tienen referencias o son inalcanzables para el contexto de ejecución, a través del algoritmo mark - and - sweep(marcado y barrido).

// Algoritmo marcado y barrido
// El Garbage Collection es importante para liberar aquellas referencias en memoria y no exista un desbordamiento en las tareas(Stack overflow).Por ejemplo, un ciclo infinito que provoque el colapso de la página web.

// Algoritmo marcado y barrido
// El algoritmo marcado y barrido(mark - and - sweep) hace referencia a cuando un tipo de dato se vuelve inalcanzable para el programa.El motor de JavaScript empieza por la raíz, la cual es el Objeto Global, a medida que el programa avanza los objetos van creando o borrando referencias a sus raíces.

// Cuando un objeto se queda ninguna referencia, se dice que el objeto es inalcanzable, en este momento el Garbage Collection libera el espacio que usaban las variables u objetos cuando aún tenían una referencia.

//   Desde 2012, los navegadores utilizan un Garbage Collection, que ha ido recibiendo mejoras en su implementación constantemente.

// Ejemplo que actúa el Garbage Collection
// En este punto de tu estudio, ya conocerás los métodos shift y pop de arrays, puede que los hayas entendido como eliminar el primer y último elemento de un array, respectivamente.

// Pues no funcionan exactamente como “eliminar”, sino como extraer el primer y último elemento, pero si no lo guardamos en una variable, el Garbage Collection lo eliminará.

// const array = [1, 2, 3, 4, 5]
// // Extrae el último elemento, guarda la referencia en la variable lastElement.
// const lastElement = array.pop()
// console.log(lastElement) //5
// const array = [1, 2, 3, 4, 5]
// // Extrae el último elemento, pero no existe la referencia, entonces el Garbage Collection lo eliminará
// array.pop()
// console.log(array) // [1,2,3,4]
// Por lo tanto, el que elimina ese valor, es el Garbage Collection.
