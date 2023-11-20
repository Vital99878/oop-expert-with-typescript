// The Factory Concept

interface IProduct {
  name: string;
}

class ConcreteProduct implements IProduct {
  name = "";
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductA";
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductB";
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super();
    this.name = "ConcreteProductC";
  }
}

class Creator {
  static createObject(productType: "a" | "b" | "c"): IProduct {
    switch (productType) {
      case "a":
        return new ConcreteProductA();
      case "b":
        return new ConcreteProductB();
      case "c":
        return new ConcreteProductC();
    }
  }
}

// The Client
const PRODUCT = Creator.createObject("b");
console.log(PRODUCT.name);
