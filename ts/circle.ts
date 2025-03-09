const findDiameter = (rad: number): number => {
    return rad * 2;
}

const findCircumference = (): number => {
    const diameter = findDiameter(5);
    const circumference = Math.PI * diameter;

    return circumference;
}

const findAreaofCircle = (): number => {
    const diameter = findDiameter(5);
    const circumference = Math.PI * diameter;
    let area = (circumference / 2) * 5;

    return area;
}

console.log("Diameter: ", findDiameter(5));
console.log("circumference: ", findCircumference());
console.log("area of circle: ", findAreaofCircle());

