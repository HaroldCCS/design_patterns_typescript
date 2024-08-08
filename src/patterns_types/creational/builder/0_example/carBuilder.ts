interface Builder {
  setPuertas(n: number): void;
  setColor(color: string): void;
  setMarca(marca: string): void;
}


class Carro {
  puertas: number;
  color: string;
  marca: string;

  constructor(builder: CarroBuilder) {
      this.puertas = builder.puertas;
      this.color = builder.color;
      this.marca = builder.marca;
  }
}

class CarroBuilder implements Builder {
  puertas: number = 0;
  color: string = "";
  marca: string = "";

  setPuertas(n: number): void {
      this.puertas = n;
  }

  setColor(color: string): void {
      this.color = color;
  }

  setMarca(marca: string): void {
      this.marca = marca;
  }

  build(): Carro {
      return new Carro(this);
  }
}

// Uso
let carroBuilder = new CarroBuilder();
carroBuilder.setPuertas(4);
carroBuilder.setColor("Rojo");
carroBuilder.setMarca("Toyota");


let carro = carroBuilder.build();

console.log(carro);