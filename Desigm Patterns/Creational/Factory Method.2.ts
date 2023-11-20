interface IChair {
  height: number;
  width: number;
  depth: number;
  getDimensions(): dimension;
}
export default class ChairFactory {
  static getChair(chair: string): IChair {
    if (chair == "BigChair") {
      return new BigChair();
    } else if (chair == "MediumChair") {
      return new MediumChair();
    } else {
      return new SmallChair();
    }
  }
}

// The Chair Base Class
class Chair implements IChair {
  height = 0;
  width = 0;
  depth = 0;

  getDimensions(): dimension {
    return {
      width: this.width,
      depth: this.depth,
      height: this.height,
    };
  }
}

class SmallChair extends Chair {
  constructor() {
    super();
    this.height = 40;
    this.width = 40;
    this.depth = 40;
  }
}

class MediumChair extends Chair {
  constructor() {
    super();
    this.height = 60;
    this.width = 60;
    this.depth = 60;
  }
}

class BigChair extends Chair {
  constructor() {
    super();
    this.height = 80;
    this.width = 80;
    this.depth = 80;
  }
}

// A Chair Interface

type dimension = {
  height: number;
  width: number;
  depth: number;
};
