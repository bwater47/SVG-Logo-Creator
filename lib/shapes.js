// Exports 'Triangle', 'Circle', and 'Square' classes
// turn the classes into one class shape shape color variable extend others after that and pass color when prompt is asked.
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}
class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`;
  }
}
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<circle cx="150" cy="150" r="100" fill="${this.shapeColor}" />`;
  }
}
class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />`;
  }
}

module.exports = {Triangle, Circle, Square};
