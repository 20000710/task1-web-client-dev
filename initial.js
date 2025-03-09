const generateInitial = (name = "") => {
    let index1 = name[0].toUpperCase()
    let numIdx = 0

    for(let i = 0; i < name.length; i++) {
        if(name[i] === ' ') {
            numIdx = i + 1
        }
    }

    return index1 + name[numIdx].toUpperCase()
}

console.log(generateInitial("John Doe"))