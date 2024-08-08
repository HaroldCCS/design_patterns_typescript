// Define una interfaz de producto
interface CocheInterface {
  info(): void;
}

//------------------------------------

// Implementa clases de producto concretas
class Toyota implements CocheInterface {
  info() {
    console.log("Este es un coche Toyota");
  }
}

class Ford implements CocheInterface {
  info() {
    console.log("Este es un coche Ford");
  }
}

//----------------------------------

// Define la interfaz del creador
interface CocheFactory {
  crearCoche(): CocheInterface;
}

// Implementa clases de creador concretas
class ToyotaFactory implements CocheFactory {
  crearCoche(): CocheInterface {
    return new Toyota();
  }
}

class FordFactory implements CocheFactory {
  crearCoche(): CocheInterface {
    return new Ford();
  }
}

// Uso
let factory: CocheFactory = new ToyotaFactory();
let coche: CocheInterface = factory.crearCoche();
coche.info(); // Este es un coche Toyota

factory = new FordFactory();
coche = factory.crearCoche();
coche.info(); // Este es un coche Ford