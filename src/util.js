class Util  {
  static #defaultFormat = Intl.NumberFormat('pt-br', {
      currency: 'BRL',
      style: "currency"
    })


  static formatCurrency(value) {
    return this.#defaultFormat.format(value)
  }

  static unformatCurrency(value) {
    const v =  Number(value.replace(/\D/g, '')) / 100
    return v
  }
}

module.exports = Util