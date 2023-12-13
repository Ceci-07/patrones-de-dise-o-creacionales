// La asincronía de JavaScript consiste en delegar algunas tareas para que las ejecute el navegador, una vez esas tareas están terminadas entran en otra estructura llamada Callback queue.En el Callback queue la primera tarea que entra, es la primera en salir. ¿Cómo salen ? Mediante el Event Loop.

// El Event loop es el encargado de preguntar al Call Stack si ya ha terminado todas sus tareas.Entonces, si y solo si el Call Stack está vacío, el Event loop moverá las funciones que están en el Callback queue para que se ejecuten.

// Para entender mejor este término, eetomemos el ejemplo de los tacos, pero ahora tienes un compañero.Entonces tú delegas la tarea de preparar la torta a otra persona, mientras realizas los tacos.

// Luego de 5 minutos por cada tarea, entregas las tortas a los clientes correspondientes.Después de 10 minutos necesitas la torta, entonces preguntas ¿ya está lista la torta ? Tu ayudante te entrega la torta y se lo entregas.En total fueron 20 minutos y todos los clientes recibieron su pedido.Así funciona la asincronía en JavaScript.

// Asincronía en JavaScript
// El proceso completo que sigue JavaScript se muestra en la siguiente imagen:

// Representación de la asincronía de JavaScript
// Las Web APIs son herramientas adicionales que te ofrece el navegador para realizar peticiones, modificar el DOM, entre otras.Estas herramientas las puedes observar en el objeto global window.

// Ejemplo de asincronía
// Rápidamente, la función asíncrona setTimeout consiste en ejecutar otra función en cierto tiempo.Recibe dos valores, la función a establecer un retraso y el tiempo en milisegundos.

// Observa el siguiente código y piensa cuál será el resultado:

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 0);
const baz = () => console.log("Third");

bar();
foo();
baz();

// El resultado es:

// Primero se muestra en consola "First".
// Segundo se muestra en consola "Third".
// Después de medio segundo, "Second".
// Esto es porque la función bar salió del Call Stack para esperar asíncronamente un tiempo definido(0 segundos en este caso).Después tendrá que esperar(sin importar el tiempo establecido en setTimeout) hasta que se vacíe el Call Stack para que el Event loop le permita entrar nuevamente al Call Stack para ejecutarse.

// Asincronía en JavaScript
// Fuente: JavaScript Visualized: Event Loop

// Callbacks, Promesas y Async / Await
// El tema de asincronía en JavaScript es muy amplio, aún falta conocer los temas de callbacks, promesas y “async / await” (una estructura de las nuevas versiones de ECMAScript). Por lo que te recomiendo el Curso de Asincronismo con JavaScript.
