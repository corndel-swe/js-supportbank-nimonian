import fs from 'fs/promises'

export async function readJSONTransactions() {
  const path = new URL('../data/Transactions2013.json', import.meta.url)
  return JSON.parse((await fs.readFile(path)).toString('utf-8'))
}
