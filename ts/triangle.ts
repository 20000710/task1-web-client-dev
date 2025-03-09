const findAnglesofTriangles = (angle1: number, angle2: number): number => {
    return 180 - (angle1 + angle2);
}

console.log(findAnglesofTriangles(80, 65));