export const loanDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    return today.toLocaleDateString()
}

export const returnDate = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const returnDate = today
    returnDate.setDate(today.getDate() + 15)

    return returnDate.toLocaleDateString()
}
