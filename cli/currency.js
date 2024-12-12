import 'dotenv/config'
import { Command } from 'commander'
import Currency from '../models/Currency.js'

const currencyController = new Command('currency')

currencyController
  .command('convert <amount> <from> <to>')
  .description('Convert currency')
  .action(async (amount, from, to) => {
    const currency = new Currency(from, parseFloat(amount))

    try {
      await Currency.fetchExchangeRates()
    } catch (error) {
      console.error('Unable to fetch exchange rates. Using default rates.')
    }

    currency.convert(to)
    console.log(currency.toString())
  })

currencyController
  .command('list')
  .description('List the latest exchange rates from Open Excchange Rates')
  .action(async () => {
    try {
      await Currency.fetchExchangeRates()
    } catch (error) {
      console.error('Unable to fetch exchange rates. Using default rates.')
    }

    for (const [code, rate] of Object.entries(Currency.rates)) {
      console.log(`${code}: ${rate}`)
    }
  })

export default currencyController
