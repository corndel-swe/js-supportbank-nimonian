class Currency {
  static symbols = {
    EUR: '€',
    GBP: '£',
    USD: '$',
  }

  static rates = {
    EUR: 0.85,
    GBP: 0.73,
    USD: 1,
  }

  #code
  #value

  constructor(code, value) {
    if (!Currency.symbols[code]) {
      throw new Error(`Unknown currency code: ${code}`)
    }

    if (typeof value !== 'number') {
      throw new Error('Value must be a number')
    }

    this.#code = code
    this.#value = value
  }

  get value() {
    return this.#value
  }

  get code() {
    return this.#code
  }

  convert(code) {
    if (!Currency.symbols[code]) {
      throw new Error(`Unknown currency code: ${code}`)
    }

    this.#value *= Currency.rates[code] / Currency.rates[this.#code]
    this.#code = code
  }

  add(other) {
    if (!(other instanceof Currency)) {
      throw new Error('Expected instance of Currency')
    }

    this.#value +=
      (other.value / Currency.rates[other.#code]) * Currency.rates[this.#code]
  }

  subtract(other) {
    if (!(other instanceof Currency)) {
      throw new Error('Expected instance of Currency')
    }

    this.add(new Currency(other.code, -other.value))
  }

  toString() {
    return `${Currency.symbols[this.#code]} ${this.#value.toFixed(2)}`
  }
}

export default Currency
