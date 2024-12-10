import { Command } from 'commander'

import Currency from '../models/Currency.js'

const transactionController = new Command('transaction')

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    console.log(from, to, amount)
  })

transactionController
  .command('split <amount> <code> <people>')
  .description('Split a bill between multiple people')
  .action((amount, code, people) => {
    const currency = new Currency(code || 'USD', amount / people)
    console.log(currency.toString())
  })

export default transactionController
