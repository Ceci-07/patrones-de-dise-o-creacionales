/*How to implement Singleton

*1-Hacer privado al constructor
*2-Crear un método estático que llame al privado
*3-Constructor y guardar la instancia en una variable estática
*/
//PROS Y CONTRA DE SINGLETON
/*PROS: certeza de que solo existira una sola instancia de una clase
*un solo punto de acceso global a dicha instancia
*la instacia de inicializada solo cuando se requiere por primer vez

CONTRA:
*bulnera el principio de respondabilidad unica, el patron resuelve dos problemas al mismo tiempo.
*complejidad incrementada en ambientes de multiples hilos de ejecucion
*complejidad a la hora de crear pruebas unitarias debido al uso de elementos estaticos.
*/
/*CUANDO USARLO?
1-Usalos cuando requieras que exista un unico punto de acceso a los recursos compartidos y que pueda ser usado por diversos clientes*/

class Singleton {
  static instance = undefined;


  constructor(version) {
    this.version = version;
  }

  static getInstance(version) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(version);
    }
    return Singleton.instance;
  }
}

function appSingleton() {
  const singleton1 = Singleton.getInstance('version-1');
  const singleton2 = Singleton.getInstance('version-2');
  const singleton3 = Singleton.getInstance('version-3');


  console.log(singleton1 === singleton2);
  console.log(singleton1 === singleton2);
  console.log(singleton1 === singleton3);

}

appSingleton();
