// El Call Stack consiste en ordenar las funciones que son invocadas de arriba hacia abajo, donde la última tarea será la que se ejecute primero.Una vez se ha guardado la información del archivo o programa, es momento de ejecutarlas.

//   Primeramente, guarda todas las funciones o declaraciones en anonymous que representa el objeto global.

// Representación del Call Stack
// Y así sucesivamente.Va agregando y quitando ejecuciones en el orden correspondiente.Es por eso que JavaScript realiza una tarea a la vez.

// Ejemplo de ejecución
// El siguiente código contiene tres funciones hello, world y main que ya han sido guardadas en el memory heap al declararlas y están listas para ejecutarse.

// Ejemplo de ejecución función main
// Al llegar a la función main, el Engine lo coloca en el Call Stack para ejecutarlo.Pero dentro se encuentran más invocaciones a otras funciones, por ende, primero ejecutará la que esté más arriba hasta ejecutarlas todas.

// Ejemplo de ejecución función hello
// Al invocar la función hello, el Engine lo coloca en el Call Stack.La función console.log también es una función, por lo que el Engine también lo colocará en el Call Stack.

// Ejemplo de ejecución función console.log dentro de hello
// Una vez ejecutada la función console.log el Engine lo sacará del Call Stack.

// Ejemplo de ejecución función hello finalizada
// Como la función hello ya ha sido ejecutada, el Engine lo sacará del Call Stack para seguir ejecutando la función main.

// Ejemplo de ejecución función world
// Y así sucesivamente, hasta que termine de ejecutarse main, o todas las tareas en el Call Stack.Cuando no existan tareas en el Call Stack, el programa habrá finalizado.
