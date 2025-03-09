const findDatesRange = (date1: string, date2: string): number => {
    let d1: Date = new Date(date1);
    let d2: Date = new Date(date2);

    // Calculate the difference in milliseconds
    let diffInMs: number = d2.getTime() - d1.getTime();

    // Calculate the difference in days
    let diffInDays: number = diffInMs / (1000 * 60 * 60 * 24);

    return Math.abs(diffInDays);
}

console.log(findDatesRange("2024-03-19", "2024-03-21"));