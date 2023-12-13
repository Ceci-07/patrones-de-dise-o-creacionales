// Una vez que se ejecuta un archivo en el navegador, el motor de JavaScript genera un entorno global(Global environment).El entorno global hace tres cosas muy importantes:

// Genera un objeto global llamado window.
// Genera un contexto llamado this.En un contexto global this es igual a window.
// Ambiente de ejecución.
// Después de generar el entorno global, comienza el contexto de ejecución(Execution context) donde corre el código de JavaScript utilizando un Stack de tareas, apilándolas una por una, en la cuál la última tarea añadida será la primera en ejecutarse.

// Una vez que el motor de JavaScript está interactuando con el navegador, realiza los siguientes procesos:

// Parser: genera un parseo del documento completo mediante palabras claves.

//   AST: Se crea a partir de los nodos que genera el parser.Es una estructura de árbol que representa tu código sintácticamente.Puedes utilizar la página AST Explorer{ target = "_blank" } para ver cómo funciona.

//     Intérprete: El intérprete recorre el AST y genera Bytecode(lenguaje que entiende la computadora y no es binario) basado en la información que contiene.Sin embargo, si el intérprete detecta que puede optimizar tu código, no genera Bytecode, sino que genera un proceso de optimización que consiste en el profiler y compiler.

// Profiler y compiler: El profiler monitorea y mira el código para optimizarlo.El compiler optimiza ese código y genera machine code(lenguaje binario).En esta etapa, por la intención de optimizar el código, también genera errores como el Hoisting.

// Engine JavaScript


// JS  ==> PARSER ==> AST(ABSTRACT SINTAX TREE) ==>INTERPRETER ==> BYTECODE
//                                             ||                                                               PROFILER (MONITOR)
//                                             ||
//                                             COMPILER
//                                             ||
//                                             OPTIMIZED CODE
