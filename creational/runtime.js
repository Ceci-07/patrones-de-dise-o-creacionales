// Recordando el material de Call Stack, se mencionó que JavaScript realiza una tarea a la vez en el Call Stack, esto se denomina código síncrono o Single thread.La sincronía puede presentar problemas en operaciones que demoren demasiado.

// Representacíon de síncronismo en JavaScript
// Ejemplo práctico
// Por ejemplo, imagina que JavaScript es una tienda de tacos, tú trabajas ahí y solamente puedes hacer una preparación a la vez.Llegan tres personas que ordenan un taco, una torta y un taco, y tienes que atenderlos en ese orden.

// El primer taco probablemente se demore 5 minutos.Luego, la preparación de la torta es más compleja, por lo que posiblemente demorará 20 minutos.En este punto, el tercer cliente se ha hartado de la espera y se retira.Este proceso no es óptimo.

//   console.log("taco")
// console.log("torta")
// console.log("taco")
// En Internet sucede lo mismo, si un usuario no observa información en tu página web en los primeros cinco segundo, se retirará.

//   Entonces, una solución sería ejecutar las tareas más lentas(torta) después de las más rápidas(tacos).Y esta solución se llama asincronismo y JavaScript tiene una manera de manejarlo.
