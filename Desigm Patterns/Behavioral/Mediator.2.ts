interface IComponent {
  notify(message: string): void

  receive(message: string): void
}

class Mediator__2 {
  // A Subject whose notify method is mediated
  private components: Set<IComponent>

  constructor() {
    this.components = new Set()
  }

  add(component: IComponent): void {
    // Add components
    this.components.add(component)
  }

  notify(message: string, originator: IComponent): void {
    // Add components except for the originator component
    this.components.forEach((component) => {
      if (component !== originator) {
        component.receive(message)
      }
    })
  }
}

class Component implements IComponent {
  private mediator: Mediator__2
  private readonly name: string

  constructor(mediator: Mediator__2, name: string) {
    this.mediator = mediator
    this.name = name
  }

  notify(message: string): void {
    console.log(this.name + ': >>> Out >>> : ' + message)
    this.mediator.notify(message, this)
  }

  receive(message: string): void {
    console.log(this.name + ': <<< In <<< : ' + message)
  }
}

// Client code

const MEDIATOR__2 = new Mediator__2()
const COMPONENT1 = new Component(MEDIATOR__2, 'Component1')
const COMPONENT2 = new Component(MEDIATOR__2, 'Component2')
const COMPONENT3 = new Component(MEDIATOR__2, 'Component3')

MEDIATOR__2.add(COMPONENT1)
MEDIATOR__2.add(COMPONENT2)
MEDIATOR__2.add(COMPONENT3)

COMPONENT1.notify('data A')
COMPONENT2.notify('data B')
COMPONENT3.notify('data C')

// Component1: >>> Out >>> : data A
// Component2: <<< In <<< : data A
// Component3: <<< In <<< : data A
// Component2: >>> Out >>> : data B
// Component1: <<< In <<< : data B
// Component3: <<< In <<< : data B
// Component3: >>> Out >>> : data C
// Component1: <<< In <<< : data C
// Component2: <<< In <<< : data C
