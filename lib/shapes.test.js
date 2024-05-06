// Jest tests for shapes
const Triangle = require("./shapes.js").Triangle;
const Circle = require("./shapes.js").Circle;
const Square = require("./shapes.js").Square;
const Shape = require("./shapes.js").Shape;

// This is a test suite that describes the Triangle class
describe("Triangle", () => {
  // This is a test case that checks the setting of the shapes color.
  it("Should have the color blue when a new instance is made", () => {
    // Create a new Triangle object
    const shape = new Triangle();
    // Check if the color of the shape is equal to "blue"
    expect(shape.shapeColor).toBe("blue");
  });
  // expect(shape.render()).toBe(`<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />`);
});
