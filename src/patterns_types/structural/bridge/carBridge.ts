// Define la interfaz de Implementación
interface Motor {
  arrancar(): void;
}


// Implementa clases de Implementación concretas
class MotorElectrico implements Motor {
  arrancar() {
      console.log("Arranca el motor eléctrico");
  }
}

class MotorGasolina implements Motor {
  arrancar() {
      console.log("Arranca el motor de gasolina");
  }
}


// Define la abstracción
class CocheBridge {
  protected motor: Motor;

  constructor(motor: Motor) {
      this.motor = motor;
  }

  arrancarMotor() {
      this.motor.arrancar();
  }
}



// Uso
let motor: Motor = new MotorElectrico();
let coche_instance: CocheBridge = new CocheBridge(motor);
coche_instance.arrancarMotor(); // Arranca el motor eléctrico

motor = new MotorGasolina();
coche_instance = new CocheBridge(motor);
coche_instance.arrancarMotor(); // Arranca el motor de gasolina