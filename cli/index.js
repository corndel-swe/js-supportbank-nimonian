import { program } from 'commander'
import transactionController from './transaction.js'
import currencyController from './currency.js'

program.version('0.1.0').description('A Support Bank CLI')

program.addCommand(transactionController)
program.addCommand(currencyController)

program.parse(process.argv)
