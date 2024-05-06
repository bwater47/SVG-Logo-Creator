const { Triangle, Circle, Square } = require("./shapes.js");
function generateSvgLogo(data) {
  let shapeInstance;

  if (data.Shape === "Triangle") {
    shapeInstance = new Triangle(data.ShapeColor);
  } else if (data.Shape === "Circle") {
    shapeInstance = new Circle(data.ShapeColor);
  } else if (data.Shape === "Square") {
    shapeInstance = new Square(data.ShapeColor);
  }

  const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
${shapeInstance.render()}
<text x="150" y="125" fill="${data.TextColor}" text-anchor="middle">${
    data.Text
  }</text>
</svg>`;

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
  return HTMLCode;
}

module.exports = generateSvgLogo;
