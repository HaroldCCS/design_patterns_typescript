/**
 * Ventajas:
 * Este patron indica tener una unica instancia de la clase
 * No sirve el new Singleton() por fuera de la clase ya que el constructor es privado
 * Un solo punto de acceso global
 * La instancia se inicializa unicamente cuando es usada
 * 
 * desventajas:
 * Vulnera principio de responsabildiad unica
 * Complejidad en ambientes de multiples hilos
 * Complejidad para pruebas unitarias
 * 
 * en teoria estos inconvenientes vienen del hecho 
 * que este tipo de clases suelen tenar data en el cache
 * 
 * este patron se suele usar para el manejo de estados como
 * el state de react o redux
 */
export class Singleton {
  private static instance: Singleton;

  private constructor() {
  }

  static getInstance(): Singleton {
    if (!Singleton.instance) Singleton.instance = new Singleton()

    return Singleton.instance
  }
}



