/*Factory: es un patron de diseño que no sprovee de una interfaz pare crear objetos basados en una superclase, posibilitando que las subclases, creadoras alteren el tipo de objetos a retornar en su proceso de fabricacion*/


/*
¿Cómo implementar Factory?

*1-Declarar clase/interfaz de producto base, esto será devuelto por clase de fábrica y sus subclases.
*2-Implementar subclases de productos concretos que heredan/implementan la clase/interfaz del producto base.
*3-Decare clase/interfaz de fábrica que devuelva objetos que coincidan con el producto base, no con los productos concretos.
*4-Implementar subclases de fábricas concretas que heredan/implementan la clase/interfaz de fábrica base. Estas clases devolverán productos concretos en su método de fábrica.
*/

/*PASO 1*/
class BaseCar {
  showCost() {
    throw new Error('Method not implemented!');
  }
}

/*PASO 2*/
class MastodonCar extends BaseCar {
  showCost() {
    console.log('Mastodon Car Cost: 300,000MXN');
  }
}

class RhinoCar extends BaseCar {
  showCost() {
    console.log('Rhino Car Cost: 100,000MXN');
  }
}

/*PASO 3*/
class CarFactory {
  makeCar() {
    throw new Error('Method not implemented!');
  }
}

/*PASO 4*/
class MastodonCarFactory extends CarFactory {
  makeCar() {
    return new MastodonCar();
  }
}

class RhinoCarFactory extends CarFactory {
  makeCar() {
    return new RhinoCar();
  }
}

function appFactory(factory) {
  const car = factory - makeCar();
  car.showCost();
}

// appFactory(new MastodonCarFactory());
// appFactory(new RhinoCarFactory());

function createFactory(type) {
  const factories = {
    mastodon: MastodonCarFactory,
    rhino: RhinoCarFactory,
  }

  const Factory = factories[type];
  return new Factory();
}

appFactory(createFactory('mastodon'));
appFactory(createFactory('rhino'));


/*
PRO:
1-Evitamos un acoplamiento alto entre los elementos creadores y los productos.
2-La creacion de productos sucede en un unico punto.
3-Agregar nuevos productos no requiere modificar el codigo existente, lo entiende

CONTRA:
1-Demasiado codigo generico, nuevo producto, nueva fabrica.
2-Muchas abstracciones.

COMO USARLO?
1-Usalo cuando no sabes cuantos productos diferentes habrá.
2-cuando necesites desacoplar el uso de losproductos con su creacion.
3-extender el funcionamiento de bibliotecas o frameworks
*/
