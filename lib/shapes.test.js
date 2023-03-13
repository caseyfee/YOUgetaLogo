// need to bring in the data
const UserIndex = require('../index');
const { Circle, Triangle, Square } = require("./lib/shapes");

// A testing suite for Shapes is created.
describe('Shapes', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('Circle', () => {
        it('should create a circle with user inputs', () => {
            var shape = new Square();
            shape.setColor(`${this.bgColor}`);
            expect(shape.render()).toEqual(
                `<rect x="10" y="10" width="200" height="200" fill="${this.bgColor}"/>`);

        });
    });
});


// var shape = new Triangle();
// shape.setColor(`${this.bgColor}`);
// expect(shape.render()).toEqual(
//     `<polygon points="150, 18 244, 182 56, 182" 
//     fill="${this.bgColor}" />`);


// var shape = new Circle();
// shape.setColor(`${this.bgColor}`);
// expect(shape.render()).toEqual(
//     `<circle cx="150" cy="100" r="80" fill="${this.bgColor}"/>`);
