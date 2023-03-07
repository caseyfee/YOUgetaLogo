// need to bring in the data


var shape = new Triangle(data);
shape.setColor(`${data.bgColor}`);
expect(shape.render()).toEqual(
    `<polygon points="150, 18 244, 182 56, 182" 
    fill="${data.bgColor}" />`);

var shape = new Square(data);
shape.setColor(`${data.bgColor}`);
expect(shape.render()).toEqual(
    `<rect x="10" y="10" width="200" height="200" fill="${data.bgColor}"/>`);

var shape = new Circle(data);
shape.setColor(`${data.bgColor}`);
expect(shape.render()).toEqual(
    `<circle cx="150" cy="100" r="80" fill="${data.bgColor}"/>`);