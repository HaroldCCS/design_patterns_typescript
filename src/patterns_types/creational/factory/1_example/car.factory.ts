import ICarFactory from "./creators/creator.car.factory"
import IBaseCar from "./products/car.base"

import MastodonCarFactory from "./creators/creator.car.mastodon"
import RhinoCarFactory from "./creators/creator.car.rhino"


// Testeo
function appFactory(factory: ICarFactory): IBaseCar {
  const car = factory.makeCar()
  return car
}


type FactoryType = 'mastodon' | 'rhino'
export function createFactory(type: FactoryType): ICarFactory {
  const factories = {
    mastodon: MastodonCarFactory,
    rhino: RhinoCarFactory
  }

  const Factory = factories[type];
  return new Factory()
}


export function testFactory() {
  const _car_1 = appFactory(createFactory('mastodon'))
  const _car_2 = appFactory(createFactory('rhino'))
}