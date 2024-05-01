// Jest tests for shapes
const Triangle = require("./shapes").Triangle;
const Circle = require("./shapes").Circle;
const Square = require("./shapes").Square;

// This is a test suite that describes the Triangle class
describe("Triangle", () => {
    // This is a test case that checks the render method
    it("Should render with color", () => {
        // Create a new Triangle object
        const shape = new Triangle();
        // Set the color of the shape
        shape.setColor("blue");
        // Check if the render method returns the correct SVG element
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});