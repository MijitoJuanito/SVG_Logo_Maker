const { Triangle, Square, Circle } = require('./shapes.js');

describe('Triangle', () => {
    test('should return value for a Triangle shapeKey code used in generating a logo stamp', () => {
        const newShape = new Triangle();
        expect(shapeKey = newShape.render("blue")).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Square', () => {
    test('should return value for a Square shapeKey code used in generating a logo stamp', () => {
        const newShape = new Square();
        expect(shapeKey = newShape.render("blue")).toEqual('<rect x="75" y="25" width="150" height="150" fill="blue" />');
    });
});

describe('Circle', () => {
    test('should return value for a Circle shapeKey code used in generating a logo stamp', () => {
        const newShape = new Circle();
        expect(shapeKey = newShape.render("blue")).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
});