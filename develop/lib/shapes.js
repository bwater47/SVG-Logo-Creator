// Exports 'Triangle', 'Circle', and 'Square' classes
class Triangle {
    constructor() {
        this.color = "black";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
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
generateSvgLogo(data) {
    const shape = new Triangle();
    return `<svg width="300" height="300">${shape.render()}</svg>
    `
}