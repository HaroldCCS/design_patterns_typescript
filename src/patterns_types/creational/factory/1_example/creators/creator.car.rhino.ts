import IBaseCar from "../products/car.base";
import RhinoCar from "../products/car.rhino";
import ICarFactory from "./creator.car.factory";

/**
 * STEP 4
 * Crear fabricasa de los productos
 * deben extender obligatoriamente de la abstraccion de la fabrica
 */
export default class RhinoCarFactory implements ICarFactory {
  public makeCar(): IBaseCar {
    return new RhinoCar()
  }
}