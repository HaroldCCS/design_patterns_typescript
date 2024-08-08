/**
 * El patrón de diseño Visitor te permite añadir más operaciones a objetos sin tener que modificar las clases. 
 * En lugar de mover la lógica de operación en las clases, se puede crear un conjunto de clases visitor que 
 * definen la misma operación de manera diferente. Es útil cuando tienes que realizar varias operaciones 
 * relacionadas pero distintas en las mismas clases de objetos, 
 * lo que permite separar el algoritmo del objeto sobre el que opera.
 * 
 * Vamos a ver un ejemplo de Visitor en TypeScript utilizando un caso de uso de figuras geométricas:
 */

//----------------------------------------------------------------- interfaces -----------------------------------------------
// Interfaz de la clase Visitor
interface Visitor {
  visitDot(dot: Dot): void;
  visitCircle(circle: Circle): void; //! ejemplo 1
}

// Interfaz de la clase ElementVisitor
interface ElementVisitor {
  accept(visitor: Visitor): void;
}



//----------------------------------------------------------------- Elementos -----------------------------------------------

// Clase Dot que implementa la interfaz ElementVisitor
class Dot implements ElementVisitor {
  constructor(public id: number, public x: number, public y: number) {}

  accept(visitor: Visitor): void {
      visitor.visitDot(this);
  }
}

// Clase Circle que implementa la interfaz ElementVisitor
class Circle implements ElementVisitor {
  constructor(public id: number, public x: number, public y: number, public radius: number) {}

  accept(visitor: Visitor): void {
      visitor.visitCircle(this); //! ejemplo 1
  }
}


//----------------------------------------------------------------- Visitor -----------------------------------------------

// Clase Visitor concreta que implementa la interfaz Visitor
class XMLExportVisitor implements Visitor {
  visitDot(dot: Dot): void {
      console.log(`Exportando las coordenadas del punto (${dot.x}, ${dot.y}) a XML.`);
  }

  visitCircle(circle: Circle): void { //! ejemplo 1
      console.log(`Exportando las propiedades del círculo con radio ${circle.radius} y coordenadas (${circle.x}, ${circle.y}) a XML.`);
  }
}



//----------------------------------------------------------------- Ejecucion -----------------------------------------------


// Uso del patrón Visitor
let dot = new Dot(1, 10, 55);
let circle = new Circle(2, 20, 30, 10); //! ejemplo 1

let xmlExportVisitor = new XMLExportVisitor();

dot.accept(xmlExportVisitor);
circle.accept(xmlExportVisitor); //! ejemplo 1