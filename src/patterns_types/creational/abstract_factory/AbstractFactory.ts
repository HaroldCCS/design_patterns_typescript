// Interfaz de la fábrica abstracta de carros
interface CarFactory {
  createSedan(): SedanCar;
  createSUV(): SUVCar;
}

// Interfaz de carro sedán
interface SedanCar {
  showInfo(): void;
}

// Interfaz de carro SUV
interface SUVCar {
  showInfo(): void;
}


// Implementación concreta de carro sedán
class LuxurySedan implements SedanCar {
  showInfo(): void {
    console.log("Luxury Sedan Car - Expensive and Comfortable");
  }
}

// Implementación concreta de carro SUV
class LuxurySUV implements SUVCar {
  showInfo(): void {
    console.log("Luxury SUV - Spacious and Stylish");
  }
}

// Implementación concreta de la fábrica de carros de lujo
class LuxuryCarFactory implements CarFactory {
  createSedan(): SedanCar {
    return new LuxurySedan();
  }

  createSUV(): SUVCar {
    return new LuxurySUV();
  }
}

// Implementación concreta de carro sedán
class EconomySedan implements SedanCar {
  showInfo(): void {
    console.log("Economy Sedan Car - Affordable and Efficient");
  }
}

// Implementación concreta de carro SUV
class EconomySUV implements SUVCar {
  showInfo(): void {
    console.log("Economy SUV - Practical and Fuel-efficient");
  }
}

// Implementación concreta de la fábrica de carros económicos
class EconomyCarFactory implements CarFactory {
  createSedan(): SedanCar {
    return new EconomySedan();
  }

  createSUV(): SUVCar {
    return new EconomySUV();
  }
}

// Uso del patrón Abstract Factory
function clientCode(factory: CarFactory) {
  const sedanCar = factory.createSedan();
  const suvCar = factory.createSUV();

  console.log("Sedan Car:");
  sedanCar.showInfo();

  console.log("SUV Car:");
  suvCar.showInfo();
}

// Ejemplo de uso con la fábrica de carros de lujo
console.log("Client: Testing with Luxury Car Factory");
const luxuryCarFactory = new LuxuryCarFactory();
clientCode(luxuryCarFactory);

// Ejemplo de uso con la fábrica de carros económicos
console.log("Client: Testing with Economy Car Factory");
const economyCarFactory = new EconomyCarFactory();
clientCode(economyCarFactory);