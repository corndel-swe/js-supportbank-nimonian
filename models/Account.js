class Account {
  static accounts = []
  constructor(name, balance) {
    this.name = name
    this.balance = balance
    Account.accounts.push(this)
  }

  deposit(amount) {
    this.balance.add(amount)
  }

  withdraw(amount) {
    this.balance.subtract(amount)
  }
}

export default Account
