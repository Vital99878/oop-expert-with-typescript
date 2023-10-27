/**
 * Паттерн Адаптер
 *
 * Назначение: Позволяет объектам с несовместимыми интерфейсами работать вместе.
 */

/**
 * Целевой класс объявляет интерфейс, с которым может работать клиентский код.
 */
export class Target {
  public action(): string {
    return "Target: The default target's behavior."
  }
}

/**
 * Адаптируемый класс содержит некоторое полезное поведение, но его интерфейс
 * несовместим с существующим клиентским кодом. Адаптируемый класс нуждается в
 * некоторой доработке, прежде чем клиентский код сможет его использовать.
 */
class Adaptable {
  public specificAction(): string {
    return '.eetpadA eht fo roivaheb laicepS'
  }
}

/**
 * Адаптер делает интерфейс Адаптируемого класса совместимым с целевым
 * интерфейсом.
 */
class Adapter extends Target {
  private adaptable: Adaptable

  constructor(adaptable: Adaptable) {
    super()
    this.adaptable = adaptable
  }

  public action(): string {
    const result = this.adaptable.specificAction().split('').reverse().join('')
    return `Adapter: (TRANSLATED) ${result}`
  }
}

/**
 * Клиентский код поддерживает все классы, использующие целевой интерфейс.
 */
function clientCode(target: Target) {
  console.log(target.action())
}

console.log('Client: I can work just fine with the Target objects:')
const target = new Target()
clientCode(target)

console.log('')

const adaptee = new Adaptable()
console.log("Client: The Adaptee class has a weird interface. See, I don't understand it:")
console.log(`Adaptee: ${adaptee.specificAction()}`)

console.log('')

console.log('Client: But I can work with it via the Adapter:')
const adapter = new Adapter(adaptee)
clientCode(adapter)
