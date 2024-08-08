import IBaseCar from "../products/car.base";

/**
 * STEP 3
 * Crear clase abstacta o interfaz de la fabricacion del producto
 */
export default interface ICarFactory {
  makeCar(): IBaseCar
}