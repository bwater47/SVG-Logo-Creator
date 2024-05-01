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
class Circle {
    constructor() {
        this.color = "black";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<circle cx="150" cy="150" r="100" fill="${this.color}" />`;
    }
}
class Square {
    constructor() {
        this.color = "black";
    }
    setColor(color) {
        this.color = color;
    }
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}