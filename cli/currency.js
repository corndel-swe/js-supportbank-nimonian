import { Command } from 'commander'

import Currency from '../models/Currency.js'

const currencyController = new Command('currency')

currencyController
  .command('convert <amount> <from> <to>')
  .description('Convert currency')
  .action((amount, from, to) => {
    const currency = new Currency(from, parseFloat(amount))
    currency.convert(to)
    console.log(currency.toString())
  })

export default currencyController
