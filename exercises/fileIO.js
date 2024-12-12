import fs from 'fs/promises'

export async function readHelloWorld() {
  const path = new URL('./resources/1-hello-world.txt', import.meta.url)
  return (await fs.readFile(path)).toString('utf-8')
}

export async function readDiaryEntry() {
  const path = new URL('./resources/2-diary-entry.txt', import.meta.url)
  return (await fs.readFile(path)).toString('utf-8')
}

export async function writeSaveData(saveData) {
  const path = new URL('./resources/3-save-data.txt', import.meta.url)
  const saveDataString = JSON.stringify(saveData)
  await fs.writeFile(path, saveDataString, 'utf-8')
}

export async function appendLogEntry(logEntry) {
  const textToAppend = logEntry + '\n'
  const path = new URL('./resources/4-log-file.txt', import.meta.url)
  await fs.appendFile(path, textToAppend, 'utf-8')
}
