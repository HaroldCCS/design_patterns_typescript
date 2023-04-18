class ShoppingCar {
  private static instance: ShoppingCar;
  private products: Product[] = []

  private constructor() { }


  static getInstance(): ShoppingCar {
    if (!this.instance) ShoppingCar.instance = new ShoppingCar()
    return this.instance
  }

  public add(Product: Product): void {
    this.products.push(Product)
  }

  public deleteById(value: number): void {
    this.products = this.products.filter(_e => _e?.getId() !== value);
  }

  public listProducts(): void{
    console.log("Productos: ", this.products)
  }
}


class Product {

  private id: number;
  private name: string;
  private cost: number;

  constructor(id: number, name: string, cost: number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  public getId = () => this.id
  public getName = () => this.name
  public getCost = () => this.cost
}


const product_1 = new Product(1,"jabon", 1000)
const product_2 = new Product(2,"helado", 2000)
const product_3 = new Product(3,"carne", 5500)



//@INFO testeo de la integracion
export const testShoppingCar = (DO: boolean = false): void => {
  if (!DO) return

  const instance = ShoppingCar.getInstance()

  //@INFO Agregar 3 productos
  instance.add(product_1)
  instance.add(product_2)
  instance.add(product_3)

  //@iNFO Eliminar uno
  instance.deleteById(2)

  //@iNFO Deberia imprimir el los productos 1 y 3
  instance.listProducts()
}