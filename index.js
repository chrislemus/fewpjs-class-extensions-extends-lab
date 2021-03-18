// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    return this.sides.reduce((accu, side) => accu + side)
  }
}

class Square extends Polygon {
  get area() {
    const {sides} = this
    return sides[0] * sides[2]
  }

  get isValid() {
    const {sides} = this
    return sides.every(side => side === sides[0])
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (!Array.isArray(this.sides)) return;
    const [s1, s2, s3] = this.sides
    const validSides = s1+s2 > s3 && s2+s3 > s1 && s3+s1 > s2
    return validSides
  }
}