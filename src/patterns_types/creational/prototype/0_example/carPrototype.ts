interface Clonable {
  clone(): Clonable;
}

class Coche implements Clonable {
  private modelo: string;
  private color: string;

  constructor(modelo: string, color: string) {
    this.modelo = modelo;
    this.color = color;
  }

  clone(): Coche {
    // Creamos un nuevo coche con las mismas propiedades
    return new Coche(this.modelo, this.color);
  }

  describirCoche(): void {
    console.log(`Este coche es un ${this.modelo} de color ${this.color}`);
  }
}

// Crear un coche
let coche1 = new Coche("Toyota", "Rojo");

// Clonar el coche
let coche2 = coche1.clone();

// Describir los coches
coche1.describirCoche();  // Este coche es un Toyota de color Rojo
coche2.describirCoche();