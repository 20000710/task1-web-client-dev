const findDatesRange = (date1, date2) => {
    let d1 = new Date(date1)
    let d2 = new Date(date2)

    // Calculate the different in miliseconds
    let diffInMs = d2 - d1

    // Calculate the different in days
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24)

    return Math.abs(diffInDays)
}

console.log(findDatesRange("2024-03-19", "2024-03-21"))