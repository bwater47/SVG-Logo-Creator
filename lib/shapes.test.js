// Jest tests for shapes
const Triangle = require("./shapes.js").Triangle;
const Circle = require("./shapes.js").Circle;
const Square = require("./shapes.js").Square;
const Shape = require("./shapes.js").Shape;

// This is a test suite that describes the Triangle class
describe("Shape", () => {
  describe("Triangle", () => {
    // This is a test case that checks the setting of the shapes color.
    it("Should have the color blue when a new instance is made", () => {
      // Create a new Triangle object
      const color = "blue";
      const shape = new Triangle(color);
      // Check if the color of the shape is equal to "blue"
      expect(shape.shapeColor).toBe(color);
    });
  });
  describe("Triangle render", () => {
    it("Should return a string with the color blue", () => {
      const color = "blue";
      const shape = new Triangle(color);
      expect(shape.render()).toBe(
        `<polygon points="150,50 100,150 200,150" fill="${color}" />`
      );
    });
  });
});
describe("Shape", () => {
  describe("Circle", () => {
    // This is a test case that checks the setting of the shapes color.
    it("Should have the color blue when a new instance is made", () => {
      // Create a new Triangle object
      const color = "blue";
      const shape = new Triangle(color);
      // Check if the color of the shape is equal to "blue"
      expect(shape.shapeColor).toBe(color);
    });
  });
  describe("Circle render", () => {
    it("Should return a string with the color blue", () => {
      const color = "blue";
      const shape = new Triangle(color);
      expect(shape.render()).toBe(
        `<polygon points="150,50 100,150 200,150" fill="${color}" />`
      );
    });
  });
});
describe("Shape", () => {
  describe("Square", () => {
    // This is a test case that checks the setting of the shapes color.
    it("Should have the color blue when a new instance is made", () => {
      // Create a new Triangle object
      const color = "blue";
      const shape = new Triangle(color);
      // Check if the color of the shape is equal to "blue"
      expect(shape.shapeColor).toBe(color);
    });
  });
  describe("Square render", () => {
    it("Should return a string with the color blue", () => {
      const color = "blue";
      const shape = new Triangle(color);
      expect(shape.render()).toBe(
        `<polygon points="150,50 100,150 200,150" fill="${color}" />`
      );
    });
  });
});