import { Command } from 'commander'
import Currency from '../models/Currency.js'
import { TransactionList } from '../models/Transaction.js'

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

transactionController
  .command('summarise <filename>')
  .description(
    'Resolve a list of transactions and display the summary. Assumes file is stored in the data directory.'
  )
  .action(async (file) => {
    const ext = file.split('.').at(-1)
    let transactions

    if (ext === 'csv') {
      transactions = await TransactionList.fromCSVFile(file)
    } else if (ext === 'json') {
      transactions = await TransactionList.fromJSONFile(file)
    } else {
      throw new Error('Unsupported file type')
    }

    const accounts = transactions.summarise()

    for (let account of accounts) {
      console.log(account.name, account.balance.toString())
    }
  })

export default transactionController
