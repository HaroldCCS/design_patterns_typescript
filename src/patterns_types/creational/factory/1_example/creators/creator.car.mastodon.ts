import IBaseCar from "../products/car.base";
import MastodonCar from "../products/car.mastodon";
import ICarFactory from "./creator.car.factory";

/**
 * STEP 4
 * Crear fabricasa de los productos
 * deben extender obligatoriamente de la abstraccion de la fabrica
 */
export default class MastodonCarFactory implements ICarFactory {
  public makeCar(): IBaseCar {
    return new MastodonCar()
  }
}
