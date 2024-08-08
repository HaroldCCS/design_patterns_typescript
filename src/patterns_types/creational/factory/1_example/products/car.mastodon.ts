import IBaseCar from "./car.base";

/**
 * STEP 2
 * crear productos
 * deben extender del producto base obligatoriamente
 */
export default class MastodonCar implements IBaseCar {
  public showCost() {
    console.log("Mastodon Car Cost: 300.000.000 COL")
  }
}