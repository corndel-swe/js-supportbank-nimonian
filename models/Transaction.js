import fs from 'fs/promises'
import Currency from './Currency.js'
import Account from './Account.js'

export class Transaction {
  constructor(date, from, to, narrative, amount) {
    this.date = date
    this.from = from
    this.to = to
    this.narrative = narrative
    this.amount = new Currency('GBP', parseFloat(amount))
  }
}

export class TransactionList {
  static async fromCSVFile(filename) {
    const url = new URL(`../data/${filename}`, import.meta.url)
    const raw = await fs.readFile(url, 'utf-8')
    const transactions = raw
      .split('\n')
      .slice(1)
      .map((line) => {
        const [date, from, to, narrative, amount] = line.split(',')
        return new Transaction(date, from, to, narrative, amount)
      })

    return new TransactionList(transactions)
  }
  constructor(transactions) {
    this.transactions = transactions
  }

  summarise() {
    const accounts = []
    for (let transaction of this.transactions) {
      let fromAccount = accounts.find(
        (account) => account.name === transaction.from
      )

      let toAccount = accounts.find(
        (account) => account.name === transaction.to
      )

      if (!fromAccount) {
        fromAccount = new Account(transaction.from, new Currency('GBP', 0))
        accounts.push(fromAccount)
      }

      if (!toAccount) {
        toAccount = new Account(transaction.to, new Currency('GBP', 0))
        accounts.push(toAccount)
      }

      fromAccount.deposit(transaction.amount)
      toAccount.withdraw(transaction.amount)
    }

    return accounts
  }
}
