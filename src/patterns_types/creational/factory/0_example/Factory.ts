

/**
 * STEP 1
 * declarar el producto base (clase abstracta o interfaz)
 */
interface BaseCar {
  showCost(): void
}


/**
 * STEP 2
 * crear productos
 * deben extender del producto base obligatoriamente
 */
class MastodonCar implements BaseCar {
  public showCost() {
    console.log("Mastodon Car Cost: 300.000.000 COL")
  }
}

class RhinoCar implements BaseCar {
  public showCost() {
    console.log("Rhino Car Cost: 100.000.000 COL")
  }
}


/**
 * STEP 3
 * Crear clase abstacta o interfaz de la fabricacion del producto
 */
interface CarFactory {
  makeCar(): BaseCar
}


/**
 * STEP 4
 * Crear fabricasa de los productos
 * deben extender obligatoriamente de la abstraccion de la fabrica
 */
class MastodonCarFactory implements CarFactory {
  public makeCar(): BaseCar {
    return new MastodonCar()
  }
}

class RhinoCarFactory implements CarFactory {
  public makeCar(): BaseCar {
    return new RhinoCar()
  }
}



/**
 * Testeo
 */
const appFactory = (factory: CarFactory) => {
  const car = factory.makeCar()
  car.showCost()
}

type FactoryType = 'mastodon' | 'rhino'
function createFactory(type: FactoryType) {
  const factories = {
    mastodon: MastodonCarFactory,
    rhino: RhinoCarFactory
  }

  const Factory = factories[type];
  return new Factory()
}

export function testFactory(DO: boolean = false){
  if (!DO) return;

  appFactory(createFactory('mastodon'))
  appFactory(createFactory('rhino'))
}

