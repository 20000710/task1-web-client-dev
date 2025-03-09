const generateInitial = (name: string = ""): string => {
    let index1: string = name[0].toUpperCase();
    let numIdx: number = 0;

    for (let i = 0; i < name.length; i++) {
        if (name[i] === ' ') {
            numIdx = i + 1;
        }
    }

    return index1 + name[numIdx].toUpperCase();
}

console.log(generateInitial("John Doe"));

