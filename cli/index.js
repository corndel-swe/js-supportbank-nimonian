import { program } from 'commander'
import transactionController from './transaction.js'

program.version('0.1.0').description('A Support Bank CLI')

program.addCommand(transactionController)

program.parse(process.argv)
