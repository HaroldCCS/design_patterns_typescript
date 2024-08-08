import IBaseCar from "./car.base";


/**
 * STEP 2
 * crear productos
 * deben extender del producto base obligatoriamente
 */
export default class RhinoCar implements IBaseCar {
  public showCost() {
    console.log("Rhino Car Cost: 100.000.000 COL")
  }
}
