import fs from 'fs-extra'
import path from 'path'

export const GetAvaliableBooksJson = async () => {
    return await fs.readJSON(path.join(__dirname, '../database/avaliableBooks.json'))
}

export const GetBorrowedBooksJson = async () => {
    return await fs.readJSON(path.join(__dirname, '../database/borrowedBooks.json'))
}

export const GetLoamHistoricJson = async () => {
    return await fs.readJSON(path.join(__dirname, '../database/loanHistoric.json'))
}
