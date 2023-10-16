interface Payload {
  weight: number;
}

type Engine = unknown;

interface Stage {
  engines: Engine[];
}
interface Rocket {
  payload: Payload;
  stages: Stage[];
}

interface RocketFactory<T extends Rocket> {
  createRocket(): T;
  createPayload(): Payload;
  createStages(): Stage[];
}

class Client {
  buildRocketOn<T extends Rocket>(factory: RocketFactory<T>): Rocket {
    let rocket = factory.createRocket();
    rocket.payload = factory.createPayload();
    rocket.stages = factory.createStages();
    return rocket;
  }
}

class SimplePayload implements Payload {
  weight: number;
}

class SimpleRocketStage implements Stage {
  engines: Engine[];
}
class SimpleRocket implements Rocket {
  payload: SimplePayload;
  stages: [SimpleRocketStage];
}
class SimpleRocketFactory implements RocketFactory<SimpleRocket> {
  createRocket(): SimpleRocket {
    return new SimpleRocket();
  }
  createPayload(): SimplePayload {
    return new SimplePayload();
  }
  createStages(): [SimpleRocketStage] {
    return [new SimpleRocketStage()];
  }
}

class Satellite implements Payload {
  constructor(public id: number, public weight: number) {}
}
class FreightRocketFirstStage implements Stage {
  engines: Engine[];
}
class FreightRocketSecondStage implements Stage {
  engines: Engine[];
}
type FreightRocketStages = [FreightRocketFirstStage, FreightRocketSecondStage];

class FreightRocket implements Rocket {
  payload: Satellite;
  stages: FreightRocketStages;
}

class FreightRocketFactory implements RocketFactory<FreightRocket> {
  nextSatelliteId = 0;
  createRocket(): FreightRocket {
    return new FreightRocket();
  }
  createPayload(): Satellite {
    return new Satellite(this.nextSatelliteId++, 100);
  }
  createStages(): FreightRocketStages {
    return [new FreightRocketFirstStage(), new FreightRocketSecondStage()];
  }
}

let client = new Client();
let experimentalRocketFactory = new SimpleRocketFactory();
let freightRocketFactory = new FreightRocketFactory();
let experimentalRocket = client.buildRocketOn(experimentalRocketFactory);
let freightRocket = client.buildRocketOn(freightRocketFactory);
