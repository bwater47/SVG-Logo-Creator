// Exports 'Triangle', 'Circle', and 'Square' classes
// turn the classes into one class shape shape color variable extend others after that and pass color when prompt is asked.
class Triangle {
    constructor() {
        this.Text = "";
        this.Font = [];
        this.FontSize = "";
        this.TextColor = [];
        this.ShapeColor = "";
        this.BorderColor = "";
        this.BorderSize = "";
        this.BorderStyle = "";
    }
    setText(text) {
        this.Text = text;
    }
    setFontStyle(style) {
        this.fontStyle = style;
    }
    setFontSize(size) {
        this.fontSize = size;
    }
    setTextColor(color) {
        this.TextColor = color;
    }
    setShapeColor(color) {
        this.ShapeColor = color;
    }
    setBorderColor(color) {
        this.BorderColor = color;
    }
    setBorderSize(size) {
        this.BorderSize = size;
    }
    setBorderStyle(style) {
        this.BorderStyle = style;
    }
    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.ShapeColor}" stroke="${this.BorderColor}" stroke-width="${this.BorderSize}" stroke-dasharray="${this.BorderStyle}" style="font-size: ${this.fontSize}px; font-style: ${this.fontStyle}; fill: ${this.TextColor};" >${this.Text}</polygon>`;
    }
}
// class Circle {
//     constructor() {
//         this.color = "black";
//     }
//     setColor(color) {
//         this.color = color;
//     }
//     render() {
//         return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
//     }
// }
// class Square {
//     constructor() {
//         this.color = "black";
//     }
//     setColor(color) {
//         this.color = color;
//     }
//     render() {
//         return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
//     }
// }

// Function to generate SVG logo using data from the shape classes in shapes.js
function generateSvgLogo(data) {
    let shape;
    if (data.Shape === "Triangle") {
        shape = new Triangle();
        shape.setText(data.Text);
        shape.setFontStyle(data.FontStyle);
        shape.setFontSize(data.FontSize);
        shape.setTextColor(data.TextColor);
        shape.setShapeColor(data.ShapeColor);
        shape.setBorderColor(data.BorderColor);
        shape.setBorderSize(data.BorderSize);
        shape.setBorderStyle(data.BorderStyle);
    } else if (data.Shape === "Circle") {
        shape = new Circle();
        shape.setColor(data.Color);
    } else if (data.Shape === "Square") {
        shape = new Square();
        shape.setColor(data.Color);
    }
    if (data.Shape === "Triangle" && data.Shape.Border === "Yes") {
        shape.setBorderColor(data.BorderColor);
        shape.setBorderSize(data.BorderSize);
        shape.setBorderStyle(data.BorderStyle);
    }
    return `<svg width="300" height="200">${shape.render()}</svg>`;
}
// module.exports = Circle;
// module.exports = Square;
// module.exports = generateSvgLogo(data);
module.exports = Triangle;
