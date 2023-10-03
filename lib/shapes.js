class Shape {
    constructor(color) {
        this.color = color;
    }
};

class Triangle extends Shape {
    render = (color) => {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`
    }
};

class Square extends Shape {
    render = (color) => {
        return `<rect x="75" y="25" width="150" height="150" fill="${color}" />`
    }
};

class Circle extends Shape {
    render = (color) => {
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`
    }
};

module.exports = { Triangle, Square, Circle }