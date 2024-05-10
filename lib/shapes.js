// turn the classes into one class shape shape color variable extend others after that and pass color when prompt is asked.
// This is the class that will be used to create the shapes for the logo.
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}
// This is a shape class that extends the Shape class and creates a triangle shape in this instance.
class Triangle extends Shape {
  constructor(shapeColor) {
    // This calls the constructor of the Shape class and passes the shapeColor parameter to it.
    super(shapeColor);
  }
  // This is the render method that will return the SVG element for the shape.
  render() {
    return `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`;
  }
}
class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }

  render() {
    return `<circle cx="150" cy="120" r="80" fill="${this.shapeColor}" />`;
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
// Exports 'Triangle', 'Circle', and 'Square' classes
module.exports = {Triangle, Circle, Square, Shape};
