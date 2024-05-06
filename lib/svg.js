// This const variable is assigned to the require shapes.js file which contains the classes for the shapes that will be used in the logo.
const { Triangle, Circle, Square } = require("./shapes.js");
// This function is called when the user answers the questions and then the logo will generate with the answers.
function generateSvgLogo(data) {
  // This lets the new shape instance be undefined until the user selects a shape.
  let shapeInstance;
  // This if statement checks if the shape is a triangle and then creates a new instance of the Triangle class with the shape color.
  if (data.Shape === "Triangle") {
    shapeInstance = new Triangle(data.ShapeColor);
  } else if (data.Shape === "Circle") {
    shapeInstance = new Circle(data.ShapeColor);
  } else if (data.Shape === "Square") {
    shapeInstance = new Square(data.ShapeColor);
  }
  // This is the SVG code that will be generated with the shape instance and the text inputs from the user.
  const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
${shapeInstance.render()}
<text x="150" y="125" fill="${data.TextColor}" text-anchor="middle">${
    data.Text
  }</text>
</svg>`;
// This variable contains a template literal string which is the HTML code that will be generated with the SVG code.
  const HTMLCode = `<!DOCTYPE html>
<html lang="en">
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <head>
        <title>Logo</title>
        <style>
        body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
        }
        </style>
    </head>
    <body>
        ${svgCode}
    </body>
</html>`;
// This returns the HTML code that will be generated with the SVG code.
  return HTMLCode;
}
// This exports the generateSvgLogo function to be used in the cli.js file.
module.exports = generateSvgLogo;
