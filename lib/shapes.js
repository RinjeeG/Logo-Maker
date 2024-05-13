// Define the base Shape class
class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }
}

// Define Circle class extending Shape
class Circle extends Shape {
    constructor(color, radius = 80) {
        super(color);
        this.radius = radius;
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

// Define Triangle class extending Shape
class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}

// Define Square class extending Shape
class Square extends Shape {
    constructor(color, sideLength = 100) {
        super(color);
        this.sideLength = sideLength;
    }

    render() {
        return `<rect x="100" y="100" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}

// Export all classes from this module
module.exports = {
    Shape,
    Circle,
    Triangle,
    Square
};
